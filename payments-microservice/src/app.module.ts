import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/Payment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      username: 'testuser',
      password: 'testuser123',
      database: 'nestjs_db',
      synchronize: true,
      entities: [Payment],
    }),
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
