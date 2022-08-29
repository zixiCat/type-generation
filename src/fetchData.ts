// import { fetchDataRes } from './mockData';
import axios from 'axios';
import chalk from 'chalk';
import ProgressBar from 'progress';

import { TypeDefinitions } from './generateType';
import { getConfig } from './config';

export interface FetchDataRes {
  dir: string;
  name: string;
  paths: { [x: string]: object };
  definitions: TypeDefinitions;
  [x: string]: unknown;
}

export default async () => {
  // init terminal style
  const startTime = Number(new Date());
  const bar = new ProgressBar(':step', {
    total: 2,
  });

  bar.tick({
    step: 'Fetching data...',
  });

  return new Promise<FetchDataRes[] | undefined>(async (resolve) => {
    const config = await getConfig();

    const request = axios.create({
      baseURL: config.baseUrl,
    });

    // fetch resources data
    const urlInfo =
      process.env.NODE_ENV !== 'mock'
        ? (
            await request.get<{ name: string; url: string }[]>(
              '/swagger-resources'
            )
          ).data
        : [];
    // extract the personal urlInfo by config
    const customUrlInfo: { name: string; url: string; dir: string }[] = [];
    config.swaggerList.forEach((i) => {
      const url = urlInfo.find((j) => j.name === i.name)?.url;
      if (url) customUrlInfo.push({ ...i, url });
    });

    const api = process.argv
      .find((i) => /^(--api=|-a=)/.test(i))
      ?.split('=')[1];
    const moduleName = process.argv
      .find((i) => /^(--name=|-n=)/.test(i))
      ?.split('=')[1];

    if (!api) {
      if (process.env.NODE_ENV !== 'mock') {
        const resArr = await Promise.all(
          customUrlInfo.map(
            (i) =>
              new Promise<FetchDataRes>((innerResolve) => {
                request.get(i.url).then((res) => {
                  innerResolve({
                    ...res.data,
                    dir: i.dir,
                    name: i.name,
                  });
                });
              })
          )
        );
        resolve(resArr);
      } else {
        // resolve([fetchDataRes as any]);
        resolve([{} as any]);
      }
    } else {
      const fetchName = moduleName;
      const customUrlInfoItem = customUrlInfo.find((i) => i.name === fetchName);

      if (customUrlInfoItem) {
        request.get(customUrlInfoItem.url).then((res) => {
          resolve([
            {
              ...res.data,
              dir: customUrlInfoItem.dir,
              name: customUrlInfoItem.name,
            },
          ]);
        });
      } else {
        throw Error(chalk.bold.red('The module was not found!'));
      }
    }
    // change terminal style
    bar.tick({
      step: `Fetched data ${chalk.greenBright('successfully')} in ${(
        (Number(new Date()) - startTime) /
        1000
      ).toFixed(1)}s`,
    });
  });
};
