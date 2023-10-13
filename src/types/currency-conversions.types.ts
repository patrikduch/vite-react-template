/**
 * `CurrencyConversionTransaction` interface.
 * 
 * @interface
 * @description Represents a transaction that involves the conversion of an amount from one currency to USD.
 * 
 * @property {number} originalAmount - The amount of money in the original currency that is subject to conversion.
 * @property {string} originalCurrency - The original currency of the amount being converted. This should be a valid currency code (e.g., 'USD', 'EUR').
 * @property {number} usdAmount - The amount of money in USD after conversion from the original currency.
 * 
 * @example
 * ```typescript
 * const transaction: CurrencyConversionTransaction = {
 *   originalAmount: 100,
 *   originalCurrency: 'EUR',
 *   usdAmount: 115
 * };
 * ```
 */
export interface CurrencyConversionTransaction {
    originalAmount: number;
    originalCurrency: string;
    usdAmount: number;
}

/**
 * `ExchangeRates` interface.
 * 
 * @interface
 * @description Represents a mapping of currency codes to their exchange rates relative to USD.
 * 
 * @property {number} [key] - The exchange rate of a currency relative to USD. The key should be a valid currency code.
 * 
 * @example
 * ```typescript
 * const rates: ExchangeRates = {
 *   EUR: 1.15,
 *   JPY: 110
 * };
 * ```
 */
export interface ExchangeRates {
    [key: string]: number;
}