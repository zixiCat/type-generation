import { ImageLabelItemVo } from './ImageLabelItemVo';

export type SaveAllTageInfoReq = {
  // 图片扩展字段
  imgExt?: string;
  // 图片ID
  imgId?: number;
  // 所有标签
  labelItemVos?: ImageLabelItemVo[];
};
