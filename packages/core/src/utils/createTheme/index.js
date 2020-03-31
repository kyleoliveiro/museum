import tokenArrayToMap from '@/utils/tokenArrayToMap';

export default (museumConfig) => {
  return tokenArrayToMap(museumConfig.tokens);
};
