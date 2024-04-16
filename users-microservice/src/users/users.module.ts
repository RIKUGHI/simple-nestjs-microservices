import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersMicroserviceController],
})
export class UsersModule {}
