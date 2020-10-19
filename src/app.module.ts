import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ShopModule } from './shop/shop.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from './models/products';

@Module({
  imports: [
    AdminModule,
    ShopModule,
    MongooseModule.forRoot('mongodb+srv://Abhishek:NxaJWCIxaFS8OROF@mycluster.50nbg.mongodb.net/test?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'Product', schema: Product }])
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
