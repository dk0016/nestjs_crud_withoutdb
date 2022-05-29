import { readFile, writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
export class MessageRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const results = JSON.parse(contents);
    return results;
  }
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = uuidv4();
    messages[id] = { id, content };
    return await writeFile('messages.json', JSON.stringify(messages));
  }
  async update(id: string, content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    let messages = JSON.parse(contents);
    messages[id] = { id, content };
    return await writeFile('messages.json', JSON.stringify(messages));
  }
  async delete(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    let messages = JSON.parse(contents);
    delete messages[id];
    return await writeFile('messages.json', JSON.stringify(messages));
  }
}
