export type Venta = {
  producto: string;
  categoria: "libros" | "tecnologia";
  importe: number;
  pagada: boolean;
};

export const ventas: Venta[] = [
  { producto: "Libro TypeScript", categoria: "libros", importe: 25000, pagada: true },
  { producto: "Mouse", categoria: "tecnologia", importe: 18000, pagada: true },
  { producto: "Teclado", categoria: "tecnologia", importe: 45000, pagada: false },
  { producto: "Libro Clean Code", categoria: "libros", importe: 32000, pagada: true },
  { producto: "Monitor", categoria: "tecnologia", importe: 150000, pagada: true },
  { producto: "Auriculares", categoria: "tecnologia", importe: 28000, pagada: false }
];

export const ventasPagadas = ventas.filter(venta => venta.pagada);

export const importesPagados = ventasPagadas.map(venta => venta.importe);

export const productosTecnologicosPagados = ventas
  .filter(venta => venta.categoria === "tecnologia" && venta.pagada)
  .map(venta => venta.producto);

export const totalRecaudado = importesPagados.reduce((acumulado, importe) => acumulado + importe, 0);

export const totalPorCategoria = ventasPagadas.reduce(
  (acumulado, venta) => ({
    ...acumulado,
    [venta.categoria]: (acumulado[venta.categoria] ?? 0) + venta.importe,
  }),
  {} as Record<string, number>
);

export const ventaMayorImporte = ventas.reduce((mayor, venta) =>
  venta.importe > mayor.importe ? venta : mayor
);