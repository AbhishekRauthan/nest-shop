import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [ShopController],
  providers:[AppService]
})
export class ShopModule {}
