import { FilePostChat } from './file-post-chat';
import { MediaType } from './media-type-enum';

export interface Media {
  id: string;
  type: MediaType;
  url: string;
  thumbnailUrl: string;
  filePost: FilePostChat;
  fileName: string;
  fileChat: FilePostChat;
}
