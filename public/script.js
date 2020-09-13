const binanceSocket = new WebSocket(
   'wss://stream.binance.com:9443/ws/btcusdt@ticker'
);

binanceSocket.onmessage = e => {
   // console.log(e.data);
   const message = JSON.parse(e.data);
   console.log(message.c);
   setTimeout(() => {
      const currentPrice = document.getElementById('current-price');
      currentPrice.innerHTML = `${message.c}`;
   }, 0);
};

function loadAccount() {
   return fetch('/account')
      .then(accountResponse => accountResponse.json())
      .then(accData => {
         setTimeout(() => {
            const test = document.getElementById('account-data');
            test.innerHTML += `
               <h1>BTC: ${accData[0].free}<h1/>
               <h1>ETH: ${accData[1].free}<h1/>
            `;
         }, 0);
      });
}

loadAccount();
