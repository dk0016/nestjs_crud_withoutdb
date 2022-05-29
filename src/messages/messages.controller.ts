import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createMessagedto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessagesService;

  constructor() {
    this.messageService = new MessagesService();
  }
  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: createMessagedto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }
  @Put('/:id')
  updateMessages(@Param('id') id: string, @Body() body: createMessagedto) {
    return this.messageService.update(id, body.content);
  }
  @Delete('/:id')
  deleteMessages(@Param('id') id: string) {
    return this.messageService.delete(id);
  }
}
