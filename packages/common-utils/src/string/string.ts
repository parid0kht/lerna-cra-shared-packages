import { IPerson, TName } from "@dashboard/common-types";

export const shorten = (value: string): string => {
  if (!value) return "";
  return value;
};

export const append = (value: string): string => {
  if (!value) return "";
  return `${value} is appended!`;
};

export const getPerson = (name: TName): IPerson => {
  return {
    name,
  };
};
