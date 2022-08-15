import { FeatureDataItem } from './FeatureDataItem';

export type SaveImageFeatureReq = {
  // 图片特征
  featureList?: FeatureDataItem[];
  // 图片ID
  imageId?: number;
};
