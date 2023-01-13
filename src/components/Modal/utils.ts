let nextModalId = 0;

export const generateModalId = () => {
  nextModalId += 1;
  nextModalId %= 50000;
  return nextModalId;
};

export const NOOP = () => {};
