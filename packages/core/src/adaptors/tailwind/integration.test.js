import resolveConfig from 'tailwindcss/resolveConfig';
import museumConfig from '@@/tests/fixtures/museum.config.json';
import tailwindAdaptor from '.';

describe('tailwindAdaptor', () => {
  it('can get token values in js', () => {
    const tailwindConfig = {
      theme: tailwindAdaptor.theme(museumConfig),
      plugins: [tailwindAdaptor.plugin],
    };

    const { theme } = resolveConfig(tailwindConfig);
    expect(theme.spacing.xs).toEqual(4);
  });
});
