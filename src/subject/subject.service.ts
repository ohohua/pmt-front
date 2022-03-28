import { Injectable } from '@nestjs/common';
import { Subject } from './subject.entity';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/login/login.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  async allSubject() {
    return this.subjectRepository.find();
  }
}
