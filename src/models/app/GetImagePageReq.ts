export type GetImagePageReq = {
  // 图片分组
  imgGroup?: string;
  // 图片打标签的状态
  labelState?: boolean;
  order?: string;
  orderStatement?: string;
  page?: number;
  rows?: number;
  sort?: string;
  start?: number;
  // 图片数据集版本
  version?: string;
};
