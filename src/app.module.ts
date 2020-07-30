import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ShopModule } from './shop/shop.module';
import { Page404Middleware } from './page404.middleware';
import { AppService } from './app.service';

@Module({
  imports: [AdminModule, ShopModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Page404Middleware)
      .exclude(
        'admin/add-product',
        '/'
      )
      .forRoutes('')
  }
}
