export const CONFIG_FILES = [
  `./config/.env.${process.env.NODE_ENV || 'development'}`,
  './config/.env.default',
];
