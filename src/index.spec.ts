import { diamond, generateTopLine } from "./index";

describe("generateLine function", () => {
  test("When dimension is 1 and line index is 0", () => {
    // GIVEN
    const dimension = 1;
    const lineIndex = 0;

    // WHEN
    const actual = generateTopLine(dimension)(lineIndex);

    // THEN
    const expected = ["*"];
    expect(actual).toEqual(expected);
  });

  test("Create middle line", () => {
    // GIVEN
    const dimension = 3;
    const lineIndex = 1;

    // WHEN
    const actual = generateTopLine(dimension)(lineIndex);

    // THEN
    const expected = ["*", "*", "*"];
    expect(actual).toEqual(expected);
  });

  test("Create line before middle", () => {
    // GIVEN
    const dimension = 3;
    const lineIndex = 0;

    // WHEN
    const actual = generateTopLine(dimension)(lineIndex);

    // THEN
    const expected = [" ", "*", " "];
    expect(actual).toEqual(expected);
  });

  test("Create line before middle - control", () => {
    // GIVEN
    const dimension = 5;
    const lineIndex = 1;

    // WHEN
    const actual = generateTopLine(dimension)(lineIndex);

    // THEN
    const expected = [" ", "*", "*", "*", " "];
    expect(actual).toEqual(expected);
  });

  test("Create line 0 when dimension is 5", () => {
    // GIVEN
    const dimension = 5;
    const lineIndex = 0;

    // WHEN
    const actual = generateTopLine(dimension)(lineIndex);

    // THEN
    const expected = [" ", " ", "*", " ", " "];
    expect(actual).toEqual(expected);
  });

  test("Create line 1 when dimension is 9", () => {
    // GIVEN
    const dimension = 9;
    const lineIndex = 1;

    // WHEN
    const actual = generateTopLine(dimension)(lineIndex);

    // THEN
    const expected = [" ", " ", " ", "*", "*", "*", " ", " ", " "];
    expect(actual).toEqual(expected);
  });

  test("Create line 1 when dimension is 9", () => {
    // GIVEN
    const dimension = 9;
    const lineIndex = 0;

    // WHEN
    const actual = generateTopLine(dimension)(lineIndex);

    // THEN
    const expected = [" ", " ", " ", " ", "*", " ", " ", " ", " "];
    expect(actual).toEqual(expected);
  });
});

describe("diamond function", () => {
  test("When n is 1, returns a diamond of dimension 1", () => {
    // GIVEN
    const n = 1;

    // WHEN
    const actual = diamond(n);

    // THEN
    const expected = [["*"]];
    expect(actual).toEqual(expected);
  });

  test("When n is 3, returns a diamond of dimension 3", () => {
    // GIVEN
    const n = 3;

    // WHEN
    const actual = diamond(n);

    // THEN
    const expected = [
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ];
    expect(actual).toEqual(expected);
  });

  test("When n is 5, returns a diamond of dimension 5", () => {
    // GIVEN
    const n = 5;

    // WHEN
    const actual = diamond(n);

    // THEN
    const expected = [
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", " "],
      [" ", " ", "*", " ", " "],
    ];
    console.log(actual);
    expect(actual).toEqual(expected);
  });
});
