import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('通知')
@Controller('notifications')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  @ApiOperation({ summary: '通知送信' })
  @ApiResponse({ status: 200, description: '通知送信成功' })
  async sendNotification(@Body() notificationDto: any) {
    await this.notificationsService.sendNotification(
      notificationDto.type,
      notificationDto.message,
      notificationDto.recipient
    );
    return { message: '通知を送信しました' };
  }

  @Post('templates')
  @ApiOperation({ summary: 'テンプレート作成' })
  @ApiResponse({ status: 201, description: 'テンプレート作成成功' })
  createTemplate(@Body() templateDto: any) {
    return this.notificationsService.createTemplate(templateDto);
  }

  @Patch('templates/:id')
  @ApiOperation({ summary: 'テンプレート更新' })
  @ApiResponse({ status: 200, description: 'テンプレート更新成功' })
  updateTemplate(@Param('id') id: string, @Body() templateDto: any) {
    return this.notificationsService.updateTemplate(id, templateDto);
  }

  @Delete('templates/:id')
  @ApiOperation({ summary: 'テンプレート削除' })
  @ApiResponse({ status: 200, description: 'テンプレート削除成功' })
  async deleteTemplate(@Param('id') id: string) {
    await this.notificationsService.deleteTemplate(id);
    return { message: 'テンプレートを削除しました' };
  }
} 