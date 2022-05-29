import { Injectable } from '@nestjs/common';
import { MessageRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  messageRepo: MessageRepository;

  constructor() {
    this.messageRepo = new MessageRepository();
  }
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  findAll() {
    return this.messageRepo.findAll();
  }
  create(content: string) {
    return this.messageRepo.create(content);
  }
  update(id: string, content: string) {
    return this.messageRepo.update(id, content);
  }
  delete(id: string) {
    return this.messageRepo.delete(id);
  }
}
