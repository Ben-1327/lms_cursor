import { IsEmail, IsNotEmpty, MinLength, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole, UserStatus } from '../../../database/entities/user.entity';

export class CreateUserDto {
  @ApiProperty({
    description: '氏名',
    example: '田中太郎'
  })
  @IsNotEmpty({ message: '氏名は必須です' })
  name: string;

  @ApiProperty({
    description: 'メールアドレス',
    example: 'tanaka@example.com'
  })
  @IsEmail({}, { message: '有効なメールアドレスを入力してください' })
  @IsNotEmpty({ message: 'メールアドレスは必須です' })
  email: string;

  @ApiProperty({
    description: 'パスワード',
    example: 'password123',
    minLength: 6
  })
  @IsNotEmpty({ message: 'パスワードは必須です' })
  @MinLength(6, { message: 'パスワードは6文字以上で入力してください' })
  password: string;

  @ApiProperty({
    description: 'ユーザーロール',
    enum: UserRole,
    example: UserRole.STUDENT
  })
  @IsEnum(UserRole, { message: '有効なロールを選択してください' })
  @IsOptional()
  role?: UserRole;

  @ApiProperty({
    description: 'ユーザーステータス',
    enum: UserStatus,
    example: UserStatus.PAYMENT_PENDING
  })
  @IsEnum(UserStatus, { message: '有効なステータスを選択してください' })
  @IsOptional()
  status?: UserStatus;
} 