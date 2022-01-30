export const productAmountHandler = (changeState, val) => {
  if (val > 0) return changeState((prev) => prev + val);
  changeState((prev) => {
    if (prev === 0) return 0;
    return prev + val;
  });
};

export const swapImageHandler = (changeState, val) => {
  if (val > 0)
    return changeState((prev) => {
      if (prev === 4) return 4;
      return prev + val;
    });
  return changeState((prev) => {
    if (prev === 1) return 1;
    return prev + val;
  });
};
