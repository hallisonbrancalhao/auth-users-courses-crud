import { Injectable } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from './dto/create-courses.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createCourseDto: CreateCourseDto) {
    this.courseModel.create(createCourseDto);
  }

  findAll() {
    return this.courseModel.find();
  }

  findOne(id: string) {
    return this.courseModel.findById(id);
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseModel.findByIdAndUpdate(
      id,
      {
        nome: updateCourseDto.nome,
        valor: updateCourseDto.valor,
        duracao: updateCourseDto.duracao,
      },
      { new: true },
    );
  }

  delete(id: string) {
    return this.courseModel.findByIdAndDelete(id);
  }
}
