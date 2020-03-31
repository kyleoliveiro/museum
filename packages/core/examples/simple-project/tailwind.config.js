import museum from '@';
import museumConfig from './museum.config.json';

module.exports = {
  theme: museum.adaptors.tailwind.theme(museumConfig),
  plugins: [museum.adaptors.tailwind.plugin],
};
