import { validateEmail, calculateNap } from "./utils";


test("validateEmail returns false for non-emails", () => {
  expect(validateEmail(undefined)).toBe(false);
  expect(validateEmail(null)).toBe(false);
  expect(validateEmail("")).toBe(false);
  expect(validateEmail("not-an-email")).toBe(false);
  expect(validateEmail("n@")).toBe(false);
});

test("validateEmail returns true for emails", () => {
  expect(validateEmail("kody@example.com")).toBe(true);
});

test("calculateNap", () => {
  expect(calculateNap(8, undefined)).toBe("20-45 minutes");
  expect(calculateNap(9, undefined)).toBe("60-90 minutes");
  expect(calculateNap(14, undefined)).toBe("90-120 minutes");
  expect(calculateNap(17, undefined)).toBe("120-150 minutes");
  expect(calculateNap(21, undefined)).toBe("150-180 minutes");
  expect(calculateNap(28, undefined)).toBe("150-270 minutes");
});
