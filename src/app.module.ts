import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ShopModule } from './shop/shop.module';
import { Page404Middleware } from './page404.middleware';

@Module({
  imports: [AdminModule, ShopModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Page404Middleware)
      .forRoutes({ path: '', method: RequestMethod.GET })
  }
}
