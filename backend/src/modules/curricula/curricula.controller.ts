import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CurriculaService } from './curricula.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('カリキュラム')
@Controller('curricula')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CurriculaController {
  constructor(private readonly curriculaService: CurriculaService) {}

  @Post()
  @ApiOperation({ summary: 'カリキュラム作成' })
  @ApiResponse({ status: 201, description: 'カリキュラム作成成功' })
  create(@Body() createCurriculumDto: any) {
    return this.curriculaService.create(createCurriculumDto);
  }

  @Get()
  @ApiOperation({ summary: 'カリキュラム一覧取得' })
  @ApiResponse({ status: 200, description: 'カリキュラム一覧取得成功' })
  findAll() {
    return this.curriculaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'カリキュラム詳細取得' })
  @ApiResponse({ status: 200, description: 'カリキュラム詳細取得成功' })
  @ApiResponse({ status: 404, description: 'カリキュラムが見つかりません' })
  findOne(@Param('id') id: string) {
    return this.curriculaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'カリキュラム更新' })
  @ApiResponse({ status: 200, description: 'カリキュラム更新成功' })
  @ApiResponse({ status: 404, description: 'カリキュラムが見つかりません' })
  update(@Param('id') id: string, @Body() updateCurriculumDto: any) {
    return this.curriculaService.update(id, updateCurriculumDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'カリキュラム削除' })
  @ApiResponse({ status: 200, description: 'カリキュラム削除成功' })
  @ApiResponse({ status: 404, description: 'カリキュラムが見つかりません' })
  remove(@Param('id') id: string) {
    return this.curriculaService.remove(id);
  }
} 