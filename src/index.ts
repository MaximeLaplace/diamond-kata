//   const lines = ["  *", " ***", "*****", " ***", "  *"];

/*

0 0 * 0 0
* * * * *
* * * * *
* * * * *
* * * * *

*/

type SpaceOrStar = "*" | " ";
type Line = SpaceOrStar[];

const getMiddleLineIndex = (n: number): number => (n - 1) / 2;

const getEquivalentIndex =
  (n: number) =>
  (index: number): number =>
    n - 1 - index;

export const generateTopLine =
  (n: number) =>
  (index: number): Line => {
    if (index === getMiddleLineIndex(n)) {
      return new Array(n).fill("*");
    }

    return [" ", ...generateTopLine(n - 2)(index), " "];
  };

const generateLine = (n: number) => (index: number) => {
  if (index > getMiddleLineIndex(n)) {
    return generateTopLine(n)(getEquivalentIndex(n)(index));
  }

  return generateTopLine(n)(index);
};

export const diamond = (n: number): Line[] => {
  return [...new Array(n)].map((_, index) => index).map(generateLine(n));
};
