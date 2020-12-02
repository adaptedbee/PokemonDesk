const toCapitalizeFirstLetter = (inputString: string): string => {
  return inputString[0].toUpperCase() + inputString.slice(1).toLowerCase();
};

export default toCapitalizeFirstLetter;
