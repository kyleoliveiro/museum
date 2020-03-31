import createTheme from '.';

describe('createTheme', () => {
  it('accepts museum config object and returns a map of token names to values', () => {
    const museumConfig = {
      tokens: [
        {
          name: 'spacing',
          tokens: [
            {
              name: 'xs',
              value: 4,
            },
            {
              name: 'lg',
              value: 64,
            },
          ],
        },
      ],
    };

    expect(createTheme(museumConfig)).toMatchObject({
      spacing: {
        xs: 4,
        lg: 64,
      },
    });
  });

  it('supports nested tokens', () => {
    const museumConfig = {
      tokens: [
        {
          name: 'colors',
          tokens: [
            {
              name: 'primary',
              tokens: [
                {
                  name: 'dark',
                  tokens: [
                    {
                      name: '200',
                      value: 'lightblue',
                    },
                    {
                      name: '400',
                      value: 'blue',
                    },
                    {
                      name: '600',
                      value: 'darkblue',
                    },
                  ],
                },
                {
                  name: 'light',
                  tokens: [
                    {
                      name: '200',
                      value: 'lightgreen',
                    },
                    {
                      name: '400',
                      value: 'green',
                    },
                    {
                      name: '600',
                      value: 'darkgreen',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(createTheme(museumConfig)).toMatchObject({
      colors: {
        primary: {
          dark: {
            200: 'lightblue',
            400: 'blue',
            600: 'darkblue',
          },
          light: {
            200: 'lightgreen',
            400: 'green',
            600: 'darkgreen',
          },
        },
      },
    });
  });
});
