const tokenArrayToMap = (tokens) => {
  if (!Array.isArray(tokens)) {
    throw new Error(
      `Expected an array of token objects. Got: ${JSON.stringify(tokens)}`
    );
  }

  return tokens.reduce((tokenMap, token) => {
    // Support nested tokens
    if ('tokens' in token) token.value = tokenArrayToMap(token.tokens);

    tokenMap[token.name] = token.value;
    return tokenMap;
  }, {});
};

export default tokenArrayToMap;
