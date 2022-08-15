import { URLStreamHandler } from './URLStreamHandler';

export type URL = {
  authority?: string;
  content?: {};
  defaultPort?: number;
  deserializedFields?: URLStreamHandler;
  file?: string;
  host?: string;
  path?: string;
  port?: number;
  protocol?: string;
  query?: string;
  ref?: string;
  serializedHashCode?: number;
  userInfo?: string;
};
