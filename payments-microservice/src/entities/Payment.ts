import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'payments' })
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  paymentId: string;

  @Column()
  amount: number;
}
