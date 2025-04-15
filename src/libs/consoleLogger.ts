import { getLogger, configure } from 'log4js';

const config = {
  appenders: {
    inboundLogging: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%[[%X{requestType}][%d]%] %m',
      },
    },
    headerLogging: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%[[%X{requestType}][Headers]%] %m',
      },
    },
    parameterLogging: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%[[%X{requestType}][Parameters]%] %m',
      },
    },
    errorLogging: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%[[%X{requestType}][%p]%] %m',
      },
    },
  },
  categories: {
    default: { appenders: ['inboundLogging'], level: 'info' },
    inboundLogging: { appenders: ['inboundLogging'], level: 'info' },
    headerLogging: { appenders: ['headerLogging'], level: 'info' },
    parameterLogging: { appenders: ['parameterLogging'], level: 'info' },
    errorLogging: { appenders: ['errorLogging'], level: 'error' },
  },
};

configure(config);

export const getConsoleLogger = (category: any) => getLogger(category);
