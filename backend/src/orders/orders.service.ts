import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  async create(order: CreateOrderDto) {
    return await this.ordersRepository.save(order);
  }

  async findAll() {
    return await this.ordersRepository.find();
  }

  async findOne(id: number) {
    return await this.ordersRepository.findOne(id);
  }

  async update(id: number, order: UpdateOrderDto) {
    return await this.ordersRepository.update(id, order);
  }

  async remove(id: number) {
    return await this.ordersRepository.delete(id);
  }
}
