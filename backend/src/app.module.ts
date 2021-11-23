import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
