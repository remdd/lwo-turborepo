export function formatCurrency(
  amount: number,
  currency: string = "GBP",
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    ...options,
  }).format(amount);
}
