import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('ユーザー')
@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'ユーザー作成' })
  @ApiResponse({ status: 201, description: 'ユーザー作成成功' })
  @ApiResponse({ status: 409, description: 'メールアドレス重複' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'ユーザー一覧取得' })
  @ApiResponse({ status: 200, description: 'ユーザー一覧取得成功' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ユーザー詳細取得' })
  @ApiResponse({ status: 200, description: 'ユーザー詳細取得成功' })
  @ApiResponse({ status: 404, description: 'ユーザーが見つかりません' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'ユーザー更新' })
  @ApiResponse({ status: 200, description: 'ユーザー更新成功' })
  @ApiResponse({ status: 404, description: 'ユーザーが見つかりません' })
  @ApiResponse({ status: 409, description: 'メールアドレス重複' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'ユーザー削除' })
  @ApiResponse({ status: 200, description: 'ユーザー削除成功' })
  @ApiResponse({ status: 404, description: 'ユーザーが見つかりません' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
} 