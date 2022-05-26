import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateShowTvDto } from './dto/CreateShowTvDto';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly service: AppService) {}

  @Get()
  async find() {
    const shows = await this.service.find();

    this.logger.debug(`Returning ${shows.length} show tv`);

    return shows;
  }

  @Post()
  async create(@Body() createShowTvDto: CreateShowTvDto) {
    this.logger.debug(CreateShowTvDto);
    return await this.service.create(createShowTvDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    this.logger.debug('id', id);
    const record = await this.service.findOne(id);

    this.logger.debug(`Returning record with id: ${id}`);

    return record ? record : {};
  }
}
