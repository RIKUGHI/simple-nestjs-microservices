import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Get()
  getPayments() {
    return this.natsClient.send({ cmd: 'getPayments' }, { msg: 'Hello world' });
  }

  @Post()
  createPayment(@Body() createPaymentDto) {
    return this.natsClient.emit('onCreatePayment', createPaymentDto);
  }
}
