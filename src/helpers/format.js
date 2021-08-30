import currency from 'currency.js';

export const rub = (value) => {
    return (currency(value.toFixed(3), {
        pattern: `# !`,
        symbol: '₽',
    }).format().replace('.', ','));
};