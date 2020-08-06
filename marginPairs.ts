import * as log from 'https://deno.land/std/log/mod.ts';

async function getMarginSymbols() {
   log.info('Dowloading Margin Data...');

   const response = await fetch('https://api.binance.com/api/v3/exchangeInfo', {
      method: 'GET'
   });

   if (!response.ok) {
      log.warning('Problem downloading margin data.');
      throw new Error('Failed to download margin data.');
   }

   const marginData = await response.json();

   return marginData.symbols
      .filter((d: any) => d.isMarginTradingAllowed)
      .map((s: any) => s.symbol);
}

const getMarketCount = (symbols: Array<string>) => {
   return symbols.reduce((a: any, d: string) => {
      const market = d.slice(-3).includes('SD') ? d.slice(-4) : d.slice(-3);
      if (!a[market]) {
         a[market] = 0;
      }
      a[market]++;
      return a;
   }, {});
};

getMarginSymbols()
   .then(k => {
      console.log(k);
      console.log(getMarketCount(k));
   })
   .catch(err => console.log(err));
