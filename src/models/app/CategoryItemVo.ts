import { ClassItemVo } from './ClassItemVo';

export type CategoryItemVo = {
  categoryId?: number;
  categoryName?: string;
  classItemVoList?: ClassItemVo[];
  color?: string;
  id?: number;
  remark?: string;
  shortcutKey?: string;
};
