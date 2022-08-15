export type AlgorithmImageReq = {
  // 图片ID
  imgId?: number;
  // 需要调用的模型类型
  modelEnum?: 'BLOOD' | 'FLUORECYTE';
};
