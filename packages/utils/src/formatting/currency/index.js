"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = formatCurrency;
function formatCurrency(amount, currency = "GBP", options) {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency,
        ...options,
    }).format(amount);
}
