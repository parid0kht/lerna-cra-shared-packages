export const getUTC = (): Date => {
  return new Date();
};

export const getDate = (): any => {
  return {
    date: new Date(),
    iso: "this is the iso string",
  };
};
