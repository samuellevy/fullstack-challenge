import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() category: CreateCategoryDto) {
    return this.categoriesService.create(category);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() category: UpdateCategoryDto) {
    return this.categoriesService.update(id, category);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
