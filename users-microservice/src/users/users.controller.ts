import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller()
export class UsersMicroserviceController {
  constructor(private userService: UsersService) {}

  @MessagePattern({ cmd: 'createUser' })
  getPayments(@Payload() data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
