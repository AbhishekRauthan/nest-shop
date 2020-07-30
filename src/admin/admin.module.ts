import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [AdminController],
  providers: [AppService]
})
export class AdminModule {}
