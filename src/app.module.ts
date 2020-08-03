import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [AdminModule, ShopModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
