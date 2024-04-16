import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/CreateUser.dto';
import { lastValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const newUser = await lastValueFrom(
      this.natsClient.send({ cmd: 'createUser' }, createUserDto),
    );
    this.natsClient.emit('onUserCreated', newUser);
    return newUser;
  }

  // @Get(':id')
  // async getUserById(@Param('id') id: string) {
  //   const user = await lastValueFrom(
  //     this.natsClient.send({ cmd: 'getUserById' }, { userId: id }),
  //   );
  //   if (user) return user;
  //   else throw new HttpException('User Not Found', 404);
  // }
}
