import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities, theme, e }) => {
  const measureUtilities = Object.entries(theme.measure).reduce(
    (utilities, [tokenName, tokenValue]) => {
      utilities[`.${e(`measure-${tokenName}`)}`] = {
        maxWidth: tokenValue,
      };

      return utilities;
    },
    {}
  );

  addUtilities(measureUtilities);
});
