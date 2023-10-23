import { BlockListModule } from './../block-list/block-list.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DbModule } from 'src/db/db.module';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [DbModule, AccountModule, BlockListModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
