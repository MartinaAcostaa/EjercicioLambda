import { describe, test, expect } from "vitest";
import { totalRecaudado, totalPorCategoria, ventaMayorImporte, cantidadPendientes, importePendiente } from "../src/ventas";

describe("Agregación con reduce", () => {
  test("reduce suma el total recaudado de las ventas pagadas", () => {
    expect(totalRecaudado).toBe(225000);
  });
  test("reduce agrupa el total recaudado por categoría", () => {
    expect(totalPorCategoria).toEqual({ libros: 57000, tecnologia: 168000 });
  });
  test("reduce encuentra la venta de mayor importe", () => {
    expect(ventaMayorImporte.producto).toBe("Monitor");
    expect(ventaMayorImporte.importe).toBe(150000);
  });
  test("filter cuenta las ventas pendientes de pago", () => {
    expect(cantidadPendientes).toBe(2);
  });
  test("filter y reduce suman el importe pendiente de cobro", () => {
    expect(importePendiente).toBe(73000);
  });
});