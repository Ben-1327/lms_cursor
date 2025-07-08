import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curriculum } from '../../database/entities/curriculum.entity';

@Injectable()
export class CurriculaService {
  constructor(
    @InjectRepository(Curriculum)
    private curriculumRepository: Repository<Curriculum>,
  ) {}

  async create(createCurriculumDto: any): Promise<Curriculum> {
    const curriculum = this.curriculumRepository.create(createCurriculumDto);
    return this.curriculumRepository.save(curriculum);
  }

  async findAll(): Promise<Curriculum[]> {
    return this.curriculumRepository.find();
  }

  async findOne(id: string): Promise<Curriculum> {
    const curriculum = await this.curriculumRepository.findOne({ where: { id } });
    if (!curriculum) {
      throw new NotFoundException('カリキュラムが見つかりません');
    }
    return curriculum;
  }

  async update(id: string, updateCurriculumDto: any): Promise<Curriculum> {
    await this.curriculumRepository.update(id, updateCurriculumDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const curriculum = await this.findOne(id);
    await this.curriculumRepository.remove(curriculum);
  }
} 