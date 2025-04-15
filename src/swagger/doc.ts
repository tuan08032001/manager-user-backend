import swaggerJsDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();

const swaggerDefinition = {
  info: {
    title: 'API',
    version: '1.0.0',
  },
  host: process.env.API_HOST,
  basePath: '/api',
  tags: [
    {
      name: 'CURRENT USER',
    },
    {
      name: 'PASSWORD',
    },
    {
      name: 'SESSION',
    },
    {
      name: 'STATISTIC',
    },
    {
      name: 'REGISTRATION',
    },
    {
      name: 'USER',
    },
    {
      name: 'VERIFICATION',
    },
  ],
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      schema: 'bearer',
      name: 'Authorization',
      in: 'header',
      prefix: 'Bearer ',
    },
  },
  definitions: {},
};

const options = {
  swaggerDefinition,
  explorer: true,
  apis: ['**/*.ts'],
};
export default swaggerJsDoc(options);
