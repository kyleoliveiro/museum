import tokenArrayToMap from '.';

describe('tokenArrayToMap', () => {
  it('accepts an array of museum token objects and returns a map of token names to values', () => {
    const tokenArray = [
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
    ];

    expect(tokenArrayToMap(tokenArray)).toMatchObject({
      spacing: {
        xs: 4,
        lg: 64,
      },
    });
  });

  it('supports nested tokens', () => {
    const tokenArray = [
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
    ];

    expect(tokenArrayToMap(tokenArray)).toMatchObject({
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

  it('throws error if it was not given an array', () => {
    const invalidInputs = [undefined, null, false, 0, '', {}];

    invalidInputs.forEach((value) => {
      expect(() => {
        tokenArrayToMap(value);
      }).toThrow();
    });
  });
});
