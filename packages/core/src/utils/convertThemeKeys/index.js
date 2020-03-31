export default (museumTheme, tokenMap = {}) => {
  if (!Object.entries(tokenMap).length) return museumTheme;
  return Object.entries(museumTheme).reduce((theme, [key, value]) => {
    const newKey = Object.keys(tokenMap).includes(key) ? tokenMap[key] : key;
    theme[newKey] = value;
    return theme;
  }, {});
};
