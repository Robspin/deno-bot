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
