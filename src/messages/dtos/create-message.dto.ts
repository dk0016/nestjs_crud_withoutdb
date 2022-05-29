import { IsString } from 'class-validator';
export class createMessagedto {
  @IsString()
  content: string;
}
