import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AssignmentsService } from './assignments.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('課題')
@Controller('assignments')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Post()
  @ApiOperation({ summary: '課題作成' })
  @ApiResponse({ status: 201, description: '課題作成成功' })
  create(@Body() createAssignmentDto: any) {
    return this.assignmentsService.create(createAssignmentDto);
  }

  @Get()
  @ApiOperation({ summary: '課題一覧取得' })
  @ApiResponse({ status: 200, description: '課題一覧取得成功' })
  findAll() {
    return this.assignmentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '課題詳細取得' })
  @ApiResponse({ status: 200, description: '課題詳細取得成功' })
  @ApiResponse({ status: 404, description: '課題が見つかりません' })
  findOne(@Param('id') id: string) {
    return this.assignmentsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '課題更新' })
  @ApiResponse({ status: 200, description: '課題更新成功' })
  @ApiResponse({ status: 404, description: '課題が見つかりません' })
  update(@Param('id') id: string, @Body() updateAssignmentDto: any) {
    return this.assignmentsService.update(id, updateAssignmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '課題削除' })
  @ApiResponse({ status: 200, description: '課題削除成功' })
  @ApiResponse({ status: 404, description: '課題が見つかりません' })
  remove(@Param('id') id: string) {
    return this.assignmentsService.remove(id);
  }
} 