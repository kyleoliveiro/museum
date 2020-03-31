import museumConfig from '@@/tests/fixtures/museum.config.json';
import museum from '@';

describe('museum', () => {
  it('can get token values in js', () => {
    const theme = museum.createTheme(museumConfig);
    expect(theme.spacing.xs).toEqual(4);
  });
});
