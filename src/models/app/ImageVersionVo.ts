import { ImageGroupVo } from './ImageGroupVo';

export type ImageVersionVo = {
  haveTagNum?: number;
  imageGroupVoList?: ImageGroupVo[];
  noTagNum?: number;
  totalNum?: number;
  version?: string;
};
