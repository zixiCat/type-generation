export type File = {
  absolute?: boolean;
  absoluteFile?: File;
  absolutePath?: string;
  canonicalFile?: File;
  canonicalPath?: string;
  directory?: boolean;
  executable?: boolean;
  file?: boolean;
  freeSpace?: number;
  hidden?: boolean;
  lastModified?: number;
  name?: string;
  parent?: string;
  parentFile?: File;
  path?: string;
  readable?: boolean;
  totalSpace?: number;
  usableSpace?: number;
  writable?: boolean;
};
