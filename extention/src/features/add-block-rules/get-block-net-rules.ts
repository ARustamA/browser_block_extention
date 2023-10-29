import { NetRules, NetRuleActionType, NetRuleResourceType } from '../../shared/lib/browser';
import { BlockItemDtoType, blockListControllerGetList } from "@/shared/api/generated";

export async function getBlockNetRules() {
  const blockList = await blockListControllerGetList();
  // return blockList.items.map(item => item.id)
  return blockList.items
    .filter(item => item.type === BlockItemDtoType.WebSite)
    .map((item): NetRules => ({
      id: item.id,
      action: { type: NetRuleActionType.BLOCK },
      condition: item.data.startsWith('regexp:')
        ? {
          regexFilter: item.data.replace('regexp:', ''),
          resourceTypes: [NetRuleResourceType.MAIN_FRAME]
        } : {
          urlFilter: item.data,
          resourceTypes: [NetRuleResourceType.MAIN_FRAME]
        }
    }));
}
