import { resolve as nodeResolver } from 'eslint-import-resolver-node'
import { transform } from 'babel-plugin-env-loader'

export const interfaceVersion = 2;

export const resolve = (source, file, config) => {
  let transformed = source;
  try {
    transformed = transform({
      development: 'dev',
      production: 'prod'
    }, undefined, source, file);
  } catch (err) {}

  return nodeResolver(transformed, file, config);
};
