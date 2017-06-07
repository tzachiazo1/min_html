const symbols = [
  'MSFT',
  'AAPL',
  'GOOG',
  'CSCO',
  'ORCL',
  'INTC',
  'WIX',
  'AMZN',
  'EBAY',
  'DELL',
  'QCOM',
  'YHOO'
];

const list = () => symbols;

const add = symbol => {
  if (symbols.indexOf(symbol) > -1) {
    throw 'Cannot save the same stock twice';
  }

  symbols.push(symbol);
};

const remove = symbol => {
  const index = symbols.indexOf(symbol)
  if (index === -1) {
    throw 'Symbol to remove was not found';
  }

  symbols.splice(index, 1);
}

exports.default = {
  list,
  add,
  remove
};