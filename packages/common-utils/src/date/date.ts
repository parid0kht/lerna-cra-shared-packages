import { CommonTypes } from "@dashboard/common-types";
export const getUTC = (): Date => {
  return new Date();
};

export const getDate = (): CommonTypes.TAdjoeDate => {
  return {
    date: new Date(),
    iso: "this is the iso string",
  };
};
