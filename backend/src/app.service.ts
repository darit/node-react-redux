import { Injectable, Logger } from '@nestjs/common';
import { ShowTvEntity } from './Models/ShowTvEntity';
import { Connection, Repository } from 'typeorm';
import { CreateShowTvDto } from './dto/CreateShowTvDto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private readonly repo: Repository<ShowTvEntity>;

  constructor(private connection: Connection) {
    this.repo = connection.getRepository(ShowTvEntity);
  }
  async find() {
    try {
      return await this.repo.find();
    } catch (e) {
      this.logger.error('Error while retrieving special offerings', e);
      throw new Error('Failed to retrieve special offerings');
    }
  }

  async findOne(id: number) {
    try {
      return this.repo.findOne(id);
    } catch (e) {
      this.logger.error(`Error while retrieving show tv with id ${id}`, e);
      throw new Error('Failed to retrieve show tv with id');
    }
  }

  async create(showTv: CreateShowTvDto) {
    try {
      const { id } = await this.repo.save(showTv, {
        reload: true,
      });

      return this.repo.findOne(id);
    } catch (e) {
      this.logger.error('Error creating new show tv', e);
      throw new Error('Error creating new show tv');
    }
  }
}
