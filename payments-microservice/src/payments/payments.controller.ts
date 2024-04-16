import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsMicroserviceController {
  constructor(private paymentService: PaymentsService) {}

  @MessagePattern({ cmd: 'getPayments' })
  getPayments(@Payload() data: any) {
    console.log(data);
    return data;
  }

  @EventPattern('onCreatePayment')
  createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.createPayment(createPaymentDto);
  }

  @EventPattern('onUserCreated')
  handleOnUserCreated(@Payload() user: any) {
    console.log(user);
  }
}
