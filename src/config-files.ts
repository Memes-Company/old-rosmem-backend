export const CONFIG_FILES = [
  `./config/.env.${process.env.NODE_ENV || 'production'}`,
  './config/.env.default',
];
