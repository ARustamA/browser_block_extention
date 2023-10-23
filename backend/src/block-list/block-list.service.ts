import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AddBlockItemDto, BlockListQueryDto } from './dto';

@Injectable()
export class BlockListService {
  constructor(private db: DbService) {}

  create(userId: number) {
    return this.db.blockList.create({
      data: { ownerId: userId },
    });
  }

  getBlockListByUser(userId: number, query: BlockListQueryDto) {
    //поиск в бд блок листа юзера
    return this.db.blockList.findFirstOrThrow({
      where: { ownerId: userId },
      include: {
        items: {
          where: { data: { contains: query.q, mode: 'insensitive' } }, //фильтрац по параметру без регитсра
          orderBy: { createdAt: 'desc' }, //сортировка
        },
      },
    });
  }

  async addItem(userId: number, data: AddBlockItemDto) {
    const blockList = await this.db.blockList.findFirstOrThrow({
      where: { ownerId: userId },
    });
    return this.db.blockItem.create({
      data: { blockListId: blockList.id, ...data },
    });
  }

  async removeItem(userId: number, itemId: number) {
    const blockList = await this.db.blockList.findFirstOrThrow({
      where: { ownerId: userId },
    });

    return this.db.blockItem.delete({
      where: { blockListId: blockList.id, id: itemId },
    });
  }
}
