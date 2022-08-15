import { File } from './File';
import { InputStream } from './InputStream';
import { URI } from './URI';
import { URL } from './URL';

export type Resource = {
  description?: string;
  file?: File;
  filename?: string;
  inputStream?: InputStream;
  open?: boolean;
  readable?: boolean;
  uri?: URI;
  url?: URL;
};
