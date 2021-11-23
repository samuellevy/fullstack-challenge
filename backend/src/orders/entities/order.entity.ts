import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contactName: string;

  @Column()
  contactPhone: string;

  @Column()
  agency: string;

  @Column()
  orderDescription: string;

  @Column()
  company: string;

  @Column()
  category: string;

  @Column()
  deadline: string;
}
