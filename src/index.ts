export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b + 1;
};

export * from './core/models/index';
export * from './core/use-case/index';
