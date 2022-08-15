export type ImageInfoVo = {
  id?: number;
  imgSrcName?: string;
  imgUrl?: string;
  labelNum?: number;
  labelState?: boolean;
  lockState?: 'FREE' | 'LOCKED' | 'OWNED';
};
