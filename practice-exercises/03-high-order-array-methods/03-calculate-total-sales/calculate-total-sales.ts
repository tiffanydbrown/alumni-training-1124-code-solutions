type Product = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateTotalSalesWithTax(
  products: Product[],
  taxRate: number
): number {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const tax = (totalSales * taxRate) / 100;
  const totalSalesWithTax = totalSales + tax;

  return parseFloat(totalSalesWithTax.toFixed(2));
}
