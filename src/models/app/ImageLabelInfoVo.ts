import { ImageLabelItemVo } from './ImageLabelItemVo';
import { HistoryItem } from './HistoryItem';

export type ImageLabelInfoVo = {
  algorithmLabels?: ImageLabelItemVo[];
  historyItems?: HistoryItem[];
  imageLabels?: ImageLabelItemVo[];
  // 图片扩展字段
  imgExt?: string;
  imgId?: number;
  imgSrcName?: string;
  imgUrl?: string;
};
