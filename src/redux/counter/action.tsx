export const TANG = "TANG";
export const GIAM = "GIAM";
export const RESET = "RESET";
export const TANG2 = "TANG2";
export const GIAM2 = "GIAM2";

export const upNumber = {
  type: TANG
};
export const downNumber = {
  type: GIAM
};
export const reset = {
  type: RESET
};
export const upNumberInput = (payload: any) => ({
  type: TANG2,
  payload
})
export const downNumberInput = (payload: any) => ({
  type: GIAM2,
  payload
})
