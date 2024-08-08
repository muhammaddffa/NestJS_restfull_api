import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserContoller } from './user.controller';

@Module({
  providers: [UserService],
  controllers: [UserContoller],
})
export class UserModule {}
