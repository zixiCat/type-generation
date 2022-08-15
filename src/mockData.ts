export const fetchDataRes = {
  dir: 'src/models/app',
  swagger: '2.0',
  info: {
    description: 'Api Documentation',
    version: '1.0',
    title: 'Api Documentation',
    termsOfService: 'urn:tos',
    contact: {},
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0',
    },
  },
  host: '81.70.216.18:4000',
  basePath: '/',
  tags: [
    { name: 'algorithm-controller', description: 'Algorithm Controller' },
    { name: 'auth-controller', description: 'Auth Controller' },
    { name: 'feature-controller', description: 'Feature Controller' },
    { name: 'file-controller', description: 'File Controller' },
    { name: 'image-controller', description: 'Image Controller' },
    { name: 'label-config-controller', description: 'Label Config Controller' },
    { name: 'tagging-controller', description: 'Tagging Controller' },
  ],
  paths: {
    '/algorithm/recognize-image': {
      post: {
        tags: ['algorithm-controller'],
        summary: '调用模型, 重新识别图片标签',
        operationId: 'recognizeImageUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'AlgorithmImageReq',
              $ref: '#/definitions/AlgorithmImageReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/auth/is-login': {
      get: {
        tags: ['auth-controller'],
        summary: '是否登陆',
        operationId: 'isLoginUsingGET',
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/auth/login': {
      post: {
        tags: ['auth-controller'],
        summary: '登陆接口',
        operationId: 'loginUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: { originalRef: 'LoginReq', $ref: '#/definitions/LoginReq' },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«UserInfo»',
              $ref: '#/definitions/Response«UserInfo»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/auth/login-out': {
      get: {
        tags: ['auth-controller'],
        summary: '登出',
        operationId: 'logoutUsingGET',
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/auth/modify-user-info': {
      post: {
        tags: ['auth-controller'],
        summary: '修改密码',
        operationId: 'modifyUserInfoUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'ModifyUserInfoReq',
              $ref: '#/definitions/ModifyUserInfoReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/auth/sign': {
      post: {
        tags: ['auth-controller'],
        summary: '需超级管理员权限: 注册用户',
        operationId: 'signUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: { originalRef: 'SignReq', $ref: '#/definitions/SignReq' },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«long»',
              $ref: '#/definitions/Response«long»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/feature/add-image-feature-config': {
      post: {
        tags: ['feature-controller'],
        summary: '新增图片特征配置',
        operationId: 'addImageFeatureConfigUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'AddImageFeatureConfigReq',
              $ref: '#/definitions/AddImageFeatureConfigReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/feature/delete-image-feature-config': {
      post: {
        tags: ['feature-controller'],
        summary: '删除图片特征配置',
        operationId: 'deleteImageFeatureConfigUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'DeleteImageFeatureConfigReq',
              $ref: '#/definitions/DeleteImageFeatureConfigReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/feature/get-image-feature': {
      post: {
        tags: ['feature-controller'],
        summary: '获取图片特征',
        operationId: 'getImageFeatureUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'GetImageFeatureReq',
              $ref: '#/definitions/GetImageFeatureReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«FeatureVo»',
              $ref: '#/definitions/Response«FeatureVo»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/feature/get-image-feature-config': {
      post: {
        tags: ['feature-controller'],
        summary: '获取图片集的图片特征配置',
        operationId: 'getImageFeatureConfigUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'GetImageFeatureConfigReq',
              $ref: '#/definitions/GetImageFeatureConfigReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«List«FeatureItem»»',
              $ref: '#/definitions/Response«List«FeatureItem»»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/feature/save-image-feature': {
      post: {
        tags: ['feature-controller'],
        summary: '保存图片特征',
        operationId: 'saveImageFeatureConfigUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'SaveImageFeatureReq',
              $ref: '#/definitions/SaveImageFeatureReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/feature/update-image-feature-config': {
      post: {
        tags: ['feature-controller'],
        summary: '更新图片特征配置',
        operationId: 'updateImageFeatureConfigUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'UpdateImageFeatureConfigReq',
              $ref: '#/definitions/UpdateImageFeatureConfigReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/file/get-label-config-2': {
      post: {
        tags: ['file-controller'],
        summary: '重定向设置',
        operationId: 'uploadImgUsingPOST',
        consumes: ['multipart/form-data'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'faceimg',
            in: 'formData',
            description: 'faceimg',
            required: true,
            type: 'file',
          },
        ],
        responses: {
          '200': { description: 'OK', schema: { type: 'object' } },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: true,
      },
    },
    '/file/get-label-config-3': {
      post: {
        tags: ['file-controller'],
        summary: '重定向设置2',
        operationId: 'getLabelConfigUsingPOST',
        consumes: ['multipart/form-data'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'file',
            in: 'formData',
            description: 'file',
            required: true,
            type: 'file',
          },
        ],
        responses: {
          '200': { description: 'OK' },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: true,
      },
    },
    '/image/get-all-image-version': {
      get: {
        tags: ['image-controller'],
        summary: '获取所有图片数据集版本',
        operationId: 'getAllImageVersionUsingGET',
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«List«ImageVersionVo»»',
              $ref: '#/definitions/Response«List«ImageVersionVo»»',
            },
          },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/image/get-image-feature': {
      post: {
        tags: ['image-controller'],
        summary: '获取图片特征',
        operationId: 'getImageFeatureUsingPOST_1',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'GetImageFeatureReq',
              $ref: '#/definitions/GetImageFeatureReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«ImageFeatureVo»',
              $ref: '#/definitions/Response«ImageFeatureVo»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/image/refrsh-image-label': {
      post: {
        tags: ['image-controller'],
        summary: '重新调用模型，更新图片标签，调用此接口会导致原有图片标签丢失',
        operationId: 'refreshImageLabelUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'RefreshImageLabelReq',
              $ref: '#/definitions/RefreshImageLabelReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/image/update-image-feature': {
      post: {
        tags: ['image-controller'],
        summary: '更新图片特征',
        operationId: 'updateImageFeatureUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'UpdateImageFeatureReq',
              $ref: '#/definitions/UpdateImageFeatureReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/label-config/add-category-label': {
      post: {
        tags: ['label-config-controller'],
        summary: '大类-新增',
        operationId: 'addCategoryLabelUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'AddOrUpdateCategoryLabelReq',
              $ref: '#/definitions/AddOrUpdateCategoryLabelReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/label-config/add-label': {
      post: {
        tags: ['label-config-controller'],
        summary: '小类-新增标签配置信息',
        operationId: 'addLabelUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'AddOrUpdateLabelReq',
              $ref: '#/definitions/AddOrUpdateLabelReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/label-config/add-label-version-set': {
      post: {
        tags: ['label-config-controller'],
        summary: '标签配置集-添加',
        operationId: 'addLabelVersionSetUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'AddLabelVersionSetReq',
              $ref: '#/definitions/AddLabelVersionSetReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/label-config/delete-label': {
      post: {
        tags: ['label-config-controller'],
        summary: '删除标签配置信息（大类 or 小类）',
        operationId: 'deleteLabelUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'DeleteLabelReq',
              $ref: '#/definitions/DeleteLabelReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/label-config/delete-label-version-set': {
      post: {
        tags: ['label-config-controller'],
        summary: '标签配置集-删除',
        operationId: 'deleteLabelVersionSetUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'DeleteImageFeatureConfigReq',
              $ref: '#/definitions/DeleteImageFeatureConfigReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/label-config/get-all-label-version': {
      get: {
        tags: ['label-config-controller'],
        summary: '获取所有标签版本信息',
        operationId: 'getAllLabelVersionUsingGET',
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«List«LabelVersionVo»»',
              $ref: '#/definitions/Response«List«LabelVersionVo»»',
            },
          },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: true,
      },
      post: {
        tags: ['label-config-controller'],
        summary: '标签配置集-获取所有标签版本信息',
        operationId: 'getAllLabelVersionUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'GetAllLabelVersionReq',
              $ref: '#/definitions/GetAllLabelVersionReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«List«LabelVersionVo»»',
              $ref: '#/definitions/Response«List«LabelVersionVo»»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/label-config/get-label-config': {
      post: {
        tags: ['label-config-controller'],
        summary: '获取标签配置信息',
        operationId: 'getLabelConfigUsingPOST_1',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'GetLabelConfigReq',
              $ref: '#/definitions/GetLabelConfigReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«LabelConfigVo»',
              $ref: '#/definitions/Response«LabelConfigVo»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/label-config/update-category-label': {
      post: {
        tags: ['label-config-controller'],
        summary: '大类-更新',
        operationId: 'updateCategoryLabelUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'AddOrUpdateCategoryLabelReq',
              $ref: '#/definitions/AddOrUpdateCategoryLabelReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/label-config/update-label': {
      post: {
        tags: ['label-config-controller'],
        summary: '小类-更新标签配置信息',
        operationId: 'updateLabelUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'AddOrUpdateLabelReq',
              $ref: '#/definitions/AddOrUpdateLabelReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/label-config/update-label-version-set': {
      post: {
        tags: ['label-config-controller'],
        summary: '标签配置集-更新',
        operationId: 'updateLabelVersionSetUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'UpdateLabelVersionSetReq',
              $ref: '#/definitions/UpdateLabelVersionSetReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/tagging/add-image-group-note': {
      post: {
        tags: ['tagging-controller'],
        summary: '给图片组添加评语',
        operationId: 'addImageGroupNoteUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'AddImageGroupNoteReq',
              $ref: '#/definitions/AddImageGroupNoteReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/tagging/change-image-tag-state': {
      post: {
        tags: ['tagging-controller'],
        summary: '修改图片标签是否打完状态',
        operationId: 'changeImageTagStateUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'ConfirmImageHaveTagReq',
              $ref: '#/definitions/ConfirmImageHaveTagReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/tagging/delete-tag-info': {
      post: {
        tags: ['tagging-controller'],
        summary: '删除单个标签信息',
        operationId: 'deleteTagInfoUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'DeleteTagInfoReq',
              $ref: '#/definitions/DeleteTagInfoReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: true,
      },
    },
    '/tagging/get-image-group-note': {
      post: {
        tags: ['tagging-controller'],
        summary: '获取图片组评语',
        operationId: 'getImageGroupNoteUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'GetImageGroupNoteReq',
              $ref: '#/definitions/GetImageGroupNoteReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«ImageGroupNoteVo»',
              $ref: '#/definitions/Response«ImageGroupNoteVo»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/tagging/get-image-info-page': {
      post: {
        tags: ['tagging-controller'],
        summary: '分页获取打标签的所有图片',
        operationId: 'getImageInfoPageUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'GetImagePageReq',
              $ref: '#/definitions/GetImagePageReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«PageHelperUtil«ImageInfoVo»»',
              $ref: '#/definitions/Response«PageHelperUtil«ImageInfoVo»»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/tagging/get-image-label-info': {
      post: {
        tags: ['tagging-controller'],
        summary: '获取图片的所有标签信息',
        operationId: 'getImageLabelInfoUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'GetImageLabelInfoReq',
              $ref: '#/definitions/GetImageLabelInfoReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«ImageLabelInfoVo»',
              $ref: '#/definitions/Response«ImageLabelInfoVo»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/tagging/save-all-tag-info': {
      post: {
        tags: ['tagging-controller'],
        summary: '保存整个图片的所有标签信息，条件更新，如果存在记录则不更新',
        operationId: 'saveAllTagInfoUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'SaveAllTageInfoReq',
              $ref: '#/definitions/SaveAllTageInfoReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: false,
      },
    },
    '/tagging/save-tag-info': {
      post: {
        tags: ['tagging-controller'],
        summary: '保存单个标签信息, 条件更新，如果存在记录则不更新',
        operationId: 'saveTagInfoUsingPOST',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              originalRef: 'SaveTagInfoReq',
              $ref: '#/definitions/SaveTagInfoReq',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              originalRef: 'Response«boolean»',
              $ref: '#/definitions/Response«boolean»',
            },
          },
          '201': { description: 'Created' },
          '401': { description: 'Unauthorized' },
          '403': { description: 'Forbidden' },
          '404': { description: 'Not Found' },
        },
        deprecated: true,
      },
    },
  },
  definitions: {
    AddImageFeatureConfigReq: {
      type: 'object',
      properties: {
        dataFormat: { type: 'string', description: '对应type的数据格式' },
        featureName: { type: 'string', description: '特征ID' },
        imageVersion: { type: 'string', description: '图片ID' },
        remark: { type: 'string', description: '备注' },
        type: { type: 'string', description: '类型' },
      },
      title: 'AddImageFeatureConfigReq',
    },
    AddImageGroupNoteReq: {
      type: 'object',
      properties: {
        describe: { type: 'string', description: 'describe' },
        imgGroup: { type: 'string', description: '图片人物组' },
        imgId: { type: 'integer', format: 'int64', description: '图片ID' },
        version: { type: 'string', description: 'version' },
      },
      title: 'AddImageGroupNoteReq',
    },
    AddLabelVersionSetReq: {
      type: 'object',
      properties: {
        imageVersion: { type: 'string', description: '图片数据集' },
        remark: { type: 'string', description: '备注' },
        versionSetName: { type: 'string' },
      },
      title: 'AddLabelVersionSetReq',
    },
    AddOrUpdateCategoryLabelReq: {
      type: 'object',
      properties: {
        categoryId: { type: 'integer', format: 'int32' },
        categoryName: { type: 'string' },
        color: { type: 'string' },
        remark: { type: 'string' },
        shortcutKey: { type: 'string' },
        version: { type: 'string' },
      },
      title: 'AddOrUpdateCategoryLabelReq',
    },
    AddOrUpdateLabelReq: {
      type: 'object',
      properties: {
        categoryName: { type: 'string' },
        className: { type: 'string' },
        color: { type: 'string' },
        id: { type: 'integer', format: 'int64' },
        remark: { type: 'string' },
        shortcutKey: { type: 'string' },
        version: { type: 'string' },
      },
      title: 'AddOrUpdateLabelReq',
    },
    AlgorithmImageReq: {
      type: 'object',
      properties: {
        imgId: { type: 'integer', format: 'int64', description: '图片ID' },
        modelEnum: {
          type: 'string',
          description: '需要调用的模型类型',
          enum: ['BLOOD', 'FLUORECYTE'],
        },
      },
      title: 'AlgorithmImageReq',
    },
    CategoryItemVo: {
      type: 'object',
      properties: {
        categoryId: { type: 'integer', format: 'int32' },
        categoryName: { type: 'string' },
        classItemVoList: {
          type: 'array',
          items: {
            originalRef: 'ClassItemVo',
            $ref: '#/definitions/ClassItemVo',
          },
        },
        color: { type: 'string' },
        id: { type: 'integer', format: 'int64' },
        remark: { type: 'string' },
        shortcutKey: { type: 'string' },
      },
      title: 'CategoryItemVo',
    },
    ClassItemVo: {
      type: 'object',
      properties: {
        abnormalEnum: { type: 'string' },
        classId: { type: 'integer', format: 'int32' },
        className: { type: 'string' },
        color: { type: 'string' },
        id: { type: 'integer', format: 'int64' },
        remark: { type: 'string' },
        shortcutKey: { type: 'string' },
      },
      title: 'ClassItemVo',
    },
    ConfirmImageHaveTagReq: {
      type: 'object',
      properties: {
        imgId: { type: 'integer', format: 'int64', description: '图片ID' },
        state: { type: 'boolean', description: '图片状态' },
      },
      title: 'ConfirmImageHaveTagReq',
    },
    DeleteImageFeatureConfigReq: {
      type: 'object',
      properties: {
        id: { type: 'integer', format: 'int64', description: 'id' },
      },
      title: 'DeleteImageFeatureConfigReq',
    },
    DeleteLabelReq: {
      type: 'object',
      properties: {
        categoryId: { type: 'integer', format: 'int32' },
        classId: { type: 'integer', format: 'int32' },
        version: { type: 'string' },
      },
      title: 'DeleteLabelReq',
    },
    DeleteTagInfoReq: {
      type: 'object',
      properties: {
        categoryId: {
          type: 'integer',
          format: 'int32',
          description: '标签类编号',
        },
        classId: { type: 'integer', format: 'int32', description: '标签编号' },
        coordinateX: { type: 'number', description: 'x' },
        coordinateY: { type: 'number', description: 'y' },
        height: { type: 'number', description: 'height' },
        imgId: { type: 'integer', format: 'int64', description: '图片ID' },
        width: { type: 'number', description: 'width' },
      },
      title: 'DeleteTagInfoReq',
    },
    FeatureDataItem: {
      type: 'object',
      properties: {
        id: { type: 'integer', format: 'int64' },
        value: { type: 'string' },
      },
      title: 'FeatureDataItem',
    },
    FeatureItem: {
      type: 'object',
      properties: {
        dataFormat: { type: 'string' },
        featureName: { type: 'string' },
        id: { type: 'integer', format: 'int64' },
        remark: { type: 'string' },
        type: { type: 'string' },
        valid: { type: 'boolean' },
        value: { type: 'string' },
      },
      title: 'FeatureItem',
    },
    FeatureVo: {
      type: 'object',
      properties: {
        featureList: {
          type: 'array',
          items: {
            originalRef: 'FeatureItem',
            $ref: '#/definitions/FeatureItem',
          },
        },
      },
      title: 'FeatureVo',
    },
    File: {
      type: 'object',
      properties: {
        absolute: { type: 'boolean' },
        absoluteFile: { originalRef: 'File', $ref: '#/definitions/File' },
        absolutePath: { type: 'string' },
        canonicalFile: { originalRef: 'File', $ref: '#/definitions/File' },
        canonicalPath: { type: 'string' },
        directory: { type: 'boolean' },
        executable: { type: 'boolean' },
        file: { type: 'boolean' },
        freeSpace: { type: 'integer', format: 'int64' },
        hidden: { type: 'boolean' },
        lastModified: { type: 'integer', format: 'int64' },
        name: { type: 'string' },
        parent: { type: 'string' },
        parentFile: { originalRef: 'File', $ref: '#/definitions/File' },
        path: { type: 'string' },
        readable: { type: 'boolean' },
        totalSpace: { type: 'integer', format: 'int64' },
        usableSpace: { type: 'integer', format: 'int64' },
        writable: { type: 'boolean' },
      },
      title: 'File',
    },
    GetAllLabelVersionReq: {
      type: 'object',
      properties: {
        imageVersion: { type: 'string', description: '图片数据集' },
      },
      title: 'GetAllLabelVersionReq',
    },
    GetImageFeatureConfigReq: {
      type: 'object',
      properties: { imageVersion: { type: 'string', description: '图片ID' } },
      title: 'GetImageFeatureConfigReq',
    },
    GetImageFeatureReq: {
      type: 'object',
      properties: {
        imageVersion: { type: 'string', description: '图片版本' },
        imgId: { type: 'integer', format: 'int64', description: '图片ID' },
      },
      title: 'GetImageFeatureReq',
    },
    GetImageGroupNoteReq: {
      type: 'object',
      properties: {
        imgGroup: { type: 'string', description: '图片人物组' },
        imgId: { type: 'integer', format: 'int64', description: '图片ID' },
        version: { type: 'string', description: '图片人物组' },
      },
      title: 'GetImageGroupNoteReq',
    },
    GetImageLabelInfoReq: {
      type: 'object',
      properties: {
        imgId: { type: 'integer', format: 'int64', description: '图片ID' },
        needHistory: { type: 'boolean', description: '是否需要加载历史数据' },
      },
      title: 'GetImageLabelInfoReq',
    },
    GetImagePageReq: {
      type: 'object',
      properties: {
        imgGroup: { type: 'string', description: '图片分组' },
        labelState: { type: 'boolean', description: '图片打标签的状态' },
        order: { type: 'string' },
        orderStatement: { type: 'string' },
        page: { type: 'integer', format: 'int32' },
        rows: { type: 'integer', format: 'int32' },
        sort: { type: 'string' },
        start: { type: 'integer', format: 'int32' },
        version: { type: 'string', description: '图片数据集版本' },
      },
      title: 'GetImagePageReq',
    },
    GetLabelConfigReq: {
      type: 'object',
      properties: {
        imageVersion: { type: 'string', description: '图片数据集版本' },
        version: { type: 'string', description: '标签分组，标签版本' },
      },
      title: 'GetLabelConfigReq',
    },
    HistoryItem: {
      type: 'object',
      properties: {
        imageLabels: {
          type: 'array',
          items: {
            originalRef: 'ImageLabelItemVo',
            $ref: '#/definitions/ImageLabelItemVo',
          },
        },
        timestamp: { type: 'integer', format: 'int64' },
      },
      title: 'HistoryItem',
    },
    ImageFeatureVo: {
      type: 'object',
      properties: {
        featureMap: {
          type: 'object',
          additionalProperties: { type: 'boolean' },
        },
      },
      title: 'ImageFeatureVo',
    },
    ImageGroupNoteVo: {
      type: 'object',
      properties: { describe: { type: 'string' } },
      title: 'ImageGroupNoteVo',
    },
    ImageGroupVo: {
      type: 'object',
      properties: {
        groupName: { type: 'string' },
        haveTagNum: { type: 'integer', format: 'int32' },
        noTagNum: { type: 'integer', format: 'int32' },
        totalNum: { type: 'integer', format: 'int32' },
      },
      title: 'ImageGroupVo',
    },
    ImageInfoVo: {
      type: 'object',
      properties: {
        id: { type: 'integer', format: 'int64' },
        imgSrcName: { type: 'string' },
        imgUrl: { type: 'string' },
        labelNum: { type: 'integer', format: 'int32' },
        labelState: { type: 'boolean' },
        lockState: { type: 'string', enum: ['FREE', 'LOCKED', 'OWNED'] },
      },
      title: 'ImageInfoVo',
    },
    ImageLabelInfoVo: {
      type: 'object',
      properties: {
        algorithmLabels: {
          type: 'array',
          items: {
            originalRef: 'ImageLabelItemVo',
            $ref: '#/definitions/ImageLabelItemVo',
          },
        },
        historyItems: {
          type: 'array',
          items: {
            originalRef: 'HistoryItem',
            $ref: '#/definitions/HistoryItem',
          },
        },
        imageLabels: {
          type: 'array',
          items: {
            originalRef: 'ImageLabelItemVo',
            $ref: '#/definitions/ImageLabelItemVo',
          },
        },
        imgExt: { type: 'string', description: '图片扩展字段' },
        imgId: { type: 'integer', format: 'int64' },
        imgSrcName: { type: 'string' },
        imgUrl: { type: 'string' },
      },
      title: 'ImageLabelInfoVo',
    },
    ImageLabelItemVo: {
      type: 'object',
      properties: {
        categoryId: {
          type: 'integer',
          format: 'int32',
          description: '标签类编号',
        },
        classId: { type: 'integer', format: 'int32', description: '标签编号' },
        coordinateX: { type: 'number', description: 'x' },
        coordinateY: { type: 'number', description: 'y' },
        height: { type: 'number', description: 'height' },
        labelExt: {
          type: 'integer',
          format: 'int64',
          description: '标签类扩展',
        },
        time: { type: 'integer', format: 'int64', description: 'time' },
        width: { type: 'number', description: 'width' },
      },
      title: 'ImageLabelItemVo',
    },
    ImageVersionVo: {
      type: 'object',
      properties: {
        haveTagNum: { type: 'integer', format: 'int32' },
        imageGroupVoList: {
          type: 'array',
          items: {
            originalRef: 'ImageGroupVo',
            $ref: '#/definitions/ImageGroupVo',
          },
        },
        noTagNum: { type: 'integer', format: 'int32' },
        totalNum: { type: 'integer', format: 'int32' },
        version: { type: 'string' },
      },
      title: 'ImageVersionVo',
    },
    InputStream: { type: 'object', title: 'InputStream' },
    LabelConfigVo: {
      type: 'object',
      properties: {
        categoryItemVoList: {
          type: 'array',
          items: {
            originalRef: 'CategoryItemVo',
            $ref: '#/definitions/CategoryItemVo',
          },
        },
        version: { type: 'string' },
      },
      title: 'LabelConfigVo',
    },
    LabelVersionVo: {
      type: 'object',
      properties: { remark: { type: 'string' }, version: { type: 'string' } },
      title: 'LabelVersionVo',
    },
    LoginReq: {
      type: 'object',
      properties: {
        email: { type: 'string', description: 'email' },
        password: { type: 'string', description: 'password' },
      },
      title: 'LoginReq',
    },
    ModifyUserInfoReq: {
      type: 'object',
      properties: {
        newPassword: { type: 'string' },
        oldPassword: { type: 'string' },
      },
      title: 'ModifyUserInfoReq',
    },
    'PageHelperUtil«ImageInfoVo»': {
      type: 'object',
      properties: {
        list: {
          type: 'array',
          items: {
            originalRef: 'ImageInfoVo',
            $ref: '#/definitions/ImageInfoVo',
          },
        },
        page: { type: 'integer', format: 'int32' },
        pageSize: { type: 'integer', format: 'int32' },
        pageTotal: { type: 'integer', format: 'int32' },
        total: { type: 'integer', format: 'int64' },
      },
      title: 'PageHelperUtil«ImageInfoVo»',
    },
    RefreshImageLabelReq: {
      type: 'object',
      properties: {
        imageId: { type: 'integer', format: 'int64', description: 'imgId' },
      },
      title: 'RefreshImageLabelReq',
    },
    Resource: {
      type: 'object',
      properties: {
        description: { type: 'string' },
        file: { originalRef: 'File', $ref: '#/definitions/File' },
        filename: { type: 'string' },
        inputStream: {
          originalRef: 'InputStream',
          $ref: '#/definitions/InputStream',
        },
        open: { type: 'boolean' },
        readable: { type: 'boolean' },
        uri: { originalRef: 'URI', $ref: '#/definitions/URI' },
        url: { originalRef: 'URL', $ref: '#/definitions/URL' },
      },
      title: 'Resource',
    },
    'Response«FeatureVo»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: { originalRef: 'FeatureVo', $ref: '#/definitions/FeatureVo' },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«FeatureVo»',
    },
    'Response«ImageFeatureVo»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: {
          originalRef: 'ImageFeatureVo',
          $ref: '#/definitions/ImageFeatureVo',
        },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«ImageFeatureVo»',
    },
    'Response«ImageGroupNoteVo»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: {
          originalRef: 'ImageGroupNoteVo',
          $ref: '#/definitions/ImageGroupNoteVo',
        },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«ImageGroupNoteVo»',
    },
    'Response«ImageLabelInfoVo»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: {
          originalRef: 'ImageLabelInfoVo',
          $ref: '#/definitions/ImageLabelInfoVo',
        },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«ImageLabelInfoVo»',
    },
    'Response«LabelConfigVo»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: {
          originalRef: 'LabelConfigVo',
          $ref: '#/definitions/LabelConfigVo',
        },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«LabelConfigVo»',
    },
    'Response«List«FeatureItem»»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: {
          type: 'array',
          items: {
            originalRef: 'FeatureItem',
            $ref: '#/definitions/FeatureItem',
          },
        },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«List«FeatureItem»»',
    },
    'Response«List«ImageVersionVo»»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: {
          type: 'array',
          items: {
            originalRef: 'ImageVersionVo',
            $ref: '#/definitions/ImageVersionVo',
          },
        },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«List«ImageVersionVo»»',
    },
    'Response«List«LabelVersionVo»»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: {
          type: 'array',
          items: {
            originalRef: 'LabelVersionVo',
            $ref: '#/definitions/LabelVersionVo',
          },
        },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«List«LabelVersionVo»»',
    },
    'Response«PageHelperUtil«ImageInfoVo»»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: {
          originalRef: 'PageHelperUtil«ImageInfoVo»',
          $ref: '#/definitions/PageHelperUtil«ImageInfoVo»',
        },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«PageHelperUtil«ImageInfoVo»»',
    },
    'Response«UserInfo»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: { originalRef: 'UserInfo', $ref: '#/definitions/UserInfo' },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«UserInfo»',
    },
    'Response«boolean»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: { type: 'boolean' },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«boolean»',
    },
    'Response«long»': {
      type: 'object',
      properties: {
        code: { type: 'string' },
        data: { type: 'integer', format: 'int64' },
        message: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
      title: 'Response«long»',
    },
    SaveAllTageInfoReq: {
      type: 'object',
      properties: {
        imgExt: { type: 'string', description: '图片扩展字段' },
        imgId: { type: 'integer', format: 'int64', description: '图片ID' },
        labelItemVos: {
          type: 'array',
          description: '所有标签',
          items: {
            originalRef: 'ImageLabelItemVo',
            $ref: '#/definitions/ImageLabelItemVo',
          },
        },
      },
      title: 'SaveAllTageInfoReq',
    },
    SaveImageFeatureReq: {
      type: 'object',
      properties: {
        featureList: {
          type: 'array',
          description: '图片特征',
          items: {
            originalRef: 'FeatureDataItem',
            $ref: '#/definitions/FeatureDataItem',
          },
        },
        imageId: { type: 'integer', format: 'int64', description: '图片ID' },
      },
      title: 'SaveImageFeatureReq',
    },
    SaveTagInfoReq: {
      type: 'object',
      properties: {
        categoryId: {
          type: 'integer',
          format: 'int32',
          description: '标签类编号',
        },
        classId: { type: 'integer', format: 'int32', description: '标签编号' },
        coordinateX: { type: 'number', description: 'x' },
        coordinateY: { type: 'number', description: 'y' },
        height: { type: 'number', description: 'height' },
        imgId: { type: 'integer', format: 'int64', description: '图片ID' },
        width: { type: 'number', description: 'width' },
      },
      title: 'SaveTagInfoReq',
    },
    SignReq: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
        roles: { type: 'array', items: { type: 'string' } },
      },
      title: 'SignReq',
    },
    URI: {
      type: 'object',
      properties: {
        absolute: { type: 'boolean' },
        authority: { type: 'string' },
        fragment: { type: 'string' },
        host: { type: 'string' },
        opaque: { type: 'boolean' },
        path: { type: 'string' },
        port: { type: 'integer', format: 'int32' },
        query: { type: 'string' },
        rawAuthority: { type: 'string' },
        rawFragment: { type: 'string' },
        rawPath: { type: 'string' },
        rawQuery: { type: 'string' },
        rawSchemeSpecificPart: { type: 'string' },
        rawUserInfo: { type: 'string' },
        scheme: { type: 'string' },
        schemeSpecificPart: { type: 'string' },
        userInfo: { type: 'string' },
      },
      title: 'URI',
    },
    URL: {
      type: 'object',
      properties: {
        authority: { type: 'string' },
        content: { type: 'object' },
        defaultPort: { type: 'integer', format: 'int32' },
        deserializedFields: {
          originalRef: 'URLStreamHandler',
          $ref: '#/definitions/URLStreamHandler',
        },
        file: { type: 'string' },
        host: { type: 'string' },
        path: { type: 'string' },
        port: { type: 'integer', format: 'int32' },
        protocol: { type: 'string' },
        query: { type: 'string' },
        ref: { type: 'string' },
        serializedHashCode: { type: 'integer', format: 'int32' },
        userInfo: { type: 'string' },
      },
      title: 'URL',
    },
    URLStreamHandler: { type: 'object', title: 'URLStreamHandler' },
    UpdateImageFeatureConfigReq: {
      type: 'object',
      properties: {
        dataFormat: { type: 'string', description: '对应type的数据格式' },
        featureName: { type: 'string', description: '特征ID' },
        id: { type: 'integer', format: 'int64', description: 'id' },
        remark: { type: 'string', description: '备注' },
        type: { type: 'string', description: '类型' },
      },
      title: 'UpdateImageFeatureConfigReq',
    },
    UpdateImageFeatureReq: {
      type: 'object',
      properties: {
        imageFeatures: {
          type: 'array',
          description: 'image features',
          items: { type: 'string' },
        },
        imgId: { type: 'integer', format: 'int64', description: '图片ID' },
      },
      title: 'UpdateImageFeatureReq',
    },
    UpdateLabelVersionSetReq: {
      type: 'object',
      properties: {
        id: { type: 'integer', format: 'int64' },
        remark: { type: 'string' },
      },
      title: 'UpdateLabelVersionSetReq',
    },
    UserInfo: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        roles: { type: 'array', items: { type: 'string' } },
        token: { type: 'string' },
        uid: { type: 'integer', format: 'int64' },
        wsToken: { type: 'string' },
      },
      title: 'UserInfo',
    },
  },
};
