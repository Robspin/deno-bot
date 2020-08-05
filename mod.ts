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
   // marginData.symbols.filter(d => d.isMarginTradingAllowed).map(s => s.symbol);

   log.info(
      JSON.stringify(
         marginData.symbols
            .filter((d: any) => d.isMarginTradingAllowed)
            .map((s: any) => s.symbol)
      )
   );
}

getMarginSymbols();
