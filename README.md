# type-generation
[![NPM Status](https://img.shields.io/npm/v/type-generation.svg)](https://www.npmjs.com/package/type-generation)

Swagger-UI 接口类型文件生成工具

## 特点
- [x] 支持单个接口的类型生成
- [x] 支持 Eslint 优化代码样式
- [x] 拉取模块的进度展示
- [ ] 暂不支持 api 文件生成
## 安装

```sh
npm i --save-dev type-generation
或者
yarn add --dev type-generation
```

## 配置

在根目录或者根目录下的 config 文件夹内新建 `type-generation.js` 配置文件如下：
```
module.exports = {
  baseUrl: 'http://192.168.10.2:8882/',
  swaggerList: [
    {
      dir: 'src/models/business/model',
      name: 'saas-business-application',
    },
    {
      dir: 'src/models/notice/model',
      name: 'saas-notice-application',
    },
    {
      dir: 'src/models/settings/model',
      name: 'saas-settings-application',
    },
    {
      dir: 'src/models/vehicle/model',
      name: 'saas-vehicle-application',
    },
  ],
};
```

### 配置支持的字段
  | 字段        | 类型   | 说明                     |
  | ----------- | ------ | ------------------------ |
  | baseUrl     | String | 拉取的地址               |
  | swaggerList | Array  | 每个工程的配置           |
  | dir         | String | 生成的类型文件的保存路径 |
  | name        | String | 对应的每个工程名称       |

## 使用

**拉取配置中的每个工程的所有类型**
```
npx type-generation
```
**拉取对应 api 所涉及的类型**

默认的工程名取 api 中 saas-api 后面一词形成的组合 saas-{ $arg }-application，如下工程名取 saas-business-application。
```
npx type-generation -a=/saas-api/business/vip-card/bind-car/query
或者
npx type-generation --api=/saas-api/business/vip-card/bind-car/query
```

需特殊处理如 saas-crm-canal-new-application 这样的，则需要加上 `--name=saas-crm-canal-new-application` 或者 `-n=saas-crm-canal-new-application`。