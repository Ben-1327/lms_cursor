import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Enrollment } from './enrollment.entity';
import { Submission } from './submission.entity';

export enum UserRole {
  SYSTEM_ADMIN = 'system_admin',
  COURSE_MANAGER = 'course_manager', 
  INSTRUCTOR = 'instructor',
  STUDENT = 'student'
}

export enum UserStatus {
  PAYMENT_PENDING = 'payment_pending',
  STUDY_PENDING = 'study_pending',
  STUDYING = 'studying',
  CANCELLED = 'cancelled',
  GRADUATED = 'graduated'
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ name: 'password_hash', length: 255 })
  passwordHash: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT
  })
  role: UserRole;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.PAYMENT_PENDING
  })
  status: UserStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Enrollment, enrollment => enrollment.user)
  enrollments: Enrollment[];

  @OneToMany(() => Submission, submission => submission.user)
  submissions: Submission[];
} 