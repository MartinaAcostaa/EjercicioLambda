import { describe, test, expect } from "vitest";
import { totalRecaudado } from "../src/ventas";

describe("Agregación con reduce", () => {
  test("reduce suma el total recaudado de las ventas pagadas", () => {
    expect(totalRecaudado).toBe(225000);
  });
});