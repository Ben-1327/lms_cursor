import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Course } from './course.entity';
import { Assignment } from './assignment.entity';

export enum ContentType {
  TEXT = 'text',
  PDF = 'pdf',
  SLIDE = 'slide'
}

@Entity('curricula')
export class Curriculum {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'course_id' })
  courseId: string;

  @Column({ name: 'parent_id', nullable: true })
  parentId: string;

  @Column({ length: 200 })
  title: string;

  @Column({
    type: 'enum',
    enum: ContentType,
    name: 'content_type'
  })
  contentType: ContentType;

  @Column({ type: 'text', nullable: true })
  content: string;

  @Column({ name: 'order_index', default: 0 })
  orderIndex: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Course, course => course.curricula)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @ManyToOne(() => Curriculum, curriculum => curriculum.children)
  @JoinColumn({ name: 'parent_id' })
  parent: Curriculum;

  @OneToMany(() => Curriculum, curriculum => curriculum.parent)
  children: Curriculum[];

  @OneToMany(() => Assignment, assignment => assignment.curriculum)
  assignments: Assignment[];
} 