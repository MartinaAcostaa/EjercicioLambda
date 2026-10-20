import { describe, test, expect } from "vitest";
import { ventas, ventasPagadas, importesPagados, productosTecnologicosPagados } from "../src/ventas";

describe("Filtrado y transformación", () => {
  test("filter obtiene solo las ventas pagadas", () => {
    expect(ventasPagadas.length).toBe(4);
    expect(ventasPagadas.every(venta => venta.pagada)).toBe(true);
  });

  test("map obtiene solo los importes de las ventas pagadas", () => {
    expect(importesPagados).toEqual([25000, 18000, 32000, 150000]);
  });

  test("lista los productos de tecnología pagados", () => {
    expect(productosTecnologicosPagados).toEqual(["Mouse", "Monitor"]);
  });

  test("no se modifica el arreglo original", () => {
    expect(ventas.length).toBe(6);
    expect(ventasPagadas).not.toBe(ventas);
    expect(ventas.filter(venta => !venta.pagada).length).toBe(2);
  });
});