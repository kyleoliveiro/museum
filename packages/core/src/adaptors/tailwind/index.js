import convertThemeKeys from '@/utils/convertThemeKeys';
import createTheme from '@/utils/createTheme';
import defaultOptions from './options';
import plugin from './plugin';

export default {
  plugin,
  theme: (theme, options = defaultOptions) => {
    return convertThemeKeys(createTheme(theme), options.mapTokens);
  },
};
