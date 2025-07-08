import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('コース')
@Controller('courses')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @ApiOperation({ summary: 'コース作成' })
  @ApiResponse({ status: 201, description: 'コース作成成功' })
  create(@Body() createCourseDto: any) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @ApiOperation({ summary: 'コース一覧取得' })
  @ApiResponse({ status: 200, description: 'コース一覧取得成功' })
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'コース詳細取得' })
  @ApiResponse({ status: 200, description: 'コース詳細取得成功' })
  @ApiResponse({ status: 404, description: 'コースが見つかりません' })
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'コース更新' })
  @ApiResponse({ status: 200, description: 'コース更新成功' })
  @ApiResponse({ status: 404, description: 'コースが見つかりません' })
  update(@Param('id') id: string, @Body() updateCourseDto: any) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'コース削除' })
  @ApiResponse({ status: 200, description: 'コース削除成功' })
  @ApiResponse({ status: 404, description: 'コースが見つかりません' })
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
} 