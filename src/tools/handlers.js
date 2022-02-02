export const productAmountHandler = (changeState, val) => {
  if (val > 0)
    return changeState((prev) => {
      if (prev !== 10) return prev + val;
      return 10;
    });
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

export const addProductHandler = (object, item, setState, productAmount) => {
  const matchedObject = object.find((i) => i.id === item.id);
  let totalAmount = productAmount;
  if (matchedObject) {
    totalAmount += matchedObject.amount;
    const newArr = [...object];
    const index = newArr.indexOf(matchedObject);
    if (index > -1) {
      newArr.splice(index, 1);

      setState(newArr);
    }
  }
  setState((prev) => {
    return [
      ...prev,
      {
        id: item.id,
        name: item.name,
        price: item.price,
        amount: totalAmount,
        img: item.imageOne,
      },
    ];
  });
};

export const deleteItemHandler = (id, object, setState) => {
  const matchedObject = object.find((i) => i.id === id);
  if (matchedObject) {
    const arr = [...object];
    const index = arr.indexOf(matchedObject);
    if (index > -1) {
      arr.splice(index, 1);

      setState(arr);
    }
  }
};

export const checkoutValidationHandler = (
  progress,
  setState,
  state,
  setProgress
) => {
  // name validation
  if (progress === "validation") {
    if (state.name === "")
      return setState((prev) => {
        return { ...prev, name: "Is Required" };
      });
    if (!state.name.match(/^[a-zA-Z]+$/)) {
      return setState((prev) => {
        return { ...prev, name: "Should Contain Only Letters" };
      });
    }
    setState((prev) => {
      return { ...prev, name: "" };
    });
    //   adress validation
    if (state.adress === "")
      return setState((prev) => {
        return { ...prev, adress: "Is Required" };
      });
    setState((prev) => {
      return { ...prev, adress: "" };
    });
    //   phone validation
    if (state.phone === "")
      return setState((prev) => {
        return { ...prev, phone: "Is Required" };
      });
    if (!state.phone.match(/^\d+/))
      return setState((prev) => {
        return { ...prev, phone: "Should Contain Only Numbers" };
      });
    setState((prev) => {
      return { ...prev, phone: "" };
    });
    setProgress("order");
  }
};

export const editItemAmountHandler = (items, data, val, setState) => {
  const matchedObject = items.find((i) => i.id === data.id);
  let productCount = Number(data.amount) + val;
  if (matchedObject) {
    const newArr = [...items];
    const index = newArr.indexOf(matchedObject);
    matchedObject.amount = productCount;
    if (index > -1) {
      newArr.splice(index, 1, matchedObject);

      setState(newArr);
    }
  }
};
