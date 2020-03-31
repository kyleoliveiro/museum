import convertThemeKeys from '.';

describe('convertThemeKeys', () => {
  it('converts top-level keys in a theme object based on supplied tokenMap', () => {
    const theme = {
      spacing: {
        xs: 4,
        lg: 64,
      },
    };

    expect(
      convertThemeKeys(theme, {
        spacing: 'gaps',
        xs: 'extrasmall', // this should not be converted
      })
    ).toMatchObject({
      gaps: {
        xs: 4,
        lg: 64,
      },
    });
  });

  it('returns original theme object if no token keys matched those in tokenMap', () => {
    const theme = {
      spacing: {
        xs: 4,
        lg: 64,
      },
    };

    expect(convertThemeKeys(theme)).toMatchObject({
      spacing: {
        xs: 4,
        lg: 64,
      },
    });
  });
});
