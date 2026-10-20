import { describe, test, expect } from "vitest";
import { totalRecaudado, totalPorCategoria } from "../src/ventas";

describe("Agregación con reduce", () => {
  test("reduce suma el total recaudado de las ventas pagadas", () => {
    expect(totalRecaudado).toBe(225000);
  });
    test("reduce agrupa el total recaudado por categoría", () => {
    expect(totalPorCategoria).toEqual({ libros: 57000, tecnologia: 168000 });
  });
});