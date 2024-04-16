import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [UsersModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
