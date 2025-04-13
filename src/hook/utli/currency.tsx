export const UseCurrencyConverter = () => {
    
    const convertCurrency = (value: number, currency = 'AOA') => {
        return new Intl.NumberFormat('pt-AO', {
            style: 'currency',
            currency: currency,
        }).format(value);
    };

    return {convertCurrency}
}