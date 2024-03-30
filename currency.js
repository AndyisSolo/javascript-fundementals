// Currency data ---------------------------------------------------------

export const getCurrencyConversionData = async () => {
  const headers = new Headers();
  headers.append("apikey", "<INSERT YOUR API KEY>");
  const options = {
    method: "GET",
    redirect: 'follow',
    headers
  };
  const response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=USD`, options);
  if(!response.ok) {
    throw new Error("Cannot fetch currency data.");
  }
return await response.json()

const getSalary = (amountUSD, currency) => {
  const amount = (currency === "USD") ? amountUSD : amountUSD * currencyData.rates[currency];
  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  });
  return formatter.format(amount);
}
