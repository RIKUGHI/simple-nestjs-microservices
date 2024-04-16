import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/entities/Payment';
import { PaymentsService } from './payments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
