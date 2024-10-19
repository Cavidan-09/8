// // let list = document.querySelector("ul")
// // console.log(list);
// // console.log(list.parentElement)
// // console.log(list.previousElementSibling);
// // console.log(list.children);
// // console.log(list.firstElementChil
// // list.classList.add(".item")\









// const cryptoData = [
//     { name: "Bitcoiin", ticker: "BTC", price: 9685, change: 2.83 },
//     { name: "Eferium", ticker: "ETH", price: 210.5, change: 6.17 },
//     { name: "Ripl", ticker: "XRP", price: 0.2812, change: -2.47 },
//     { name: "Bitcoin Cash", ticker: "BCH", price: 441.4, change: 5.01 },
//     { name: "Bitcoin SV", ticker: "BSV", price: 303.17, change: 5.53 },
//     { name: "Лайткоин", ticker: "LTC", price: 74.935, change: 4.25 },
//     { name: "Tether", ticker: "USDT", price: 0.9994, change: -0.01 },
//     { name: "EOS", ticker: "EOS", price: 4.6161, change: 3.15 },
//     { name: "Binance Coin", ticker: "BNB", price: 19.824, change: 3.82 },
//     { name: "Cardano", ticker: "ADA", price: 0.060389, change: 2.93 },
//     { name: "Tezos", ticker: "XTZ", price: 2.1247, change: -6.12 },
//     { name: "Эфириум Классик", ticker: "ETC", price: 12.5988, change: 4.09 },
//     { name: "Stellar", ticker: "XLM", price: 0.07034, change: 4.10 },
//     { name: "Monero", ticker: "XMR", price: 79.523, change: 3.45 },
//     { name: "TRON", ticker: "TRX", price: 0.020881, change: 5.21 }
// ];



// function displayCryptoData() {
//     const tableBody = document.querySelector('#cryptoTable tbody');

//     cryptoData.forEach(crypto => {
//         const row = document.createElement('tr');
        
//         const nameCell = document.createElement('td');
//         nameCell.textContent = crypto.name;
//         row.appendChild(nameCell);

//         const tickerCell = document.createElement('td');
//         tickerCell.textContent = crypto.ticker;
//         row.appendChild(tickerCell);

//         const priceCell = document.createElement('td');
//         priceCell.textContent = crypto.price;
//         row.appendChild(priceCell);

//         const changeCell = document.createElement('td');
//         changeCell.textContent = `${crypto.change}%`;
//         changeCell.classList.add(crypto.change >= 0 ? 'positive' : 'negative');
//         row.appendChild(changeCell);

//         tableBody.appendChild(row);
//     });
// }


// window.onload = displayCryptoData;




=============================






// const buttons = document.querySelectorAll('.shopping-list button');


// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     button.style.color = 'lightgray';
//   });
// });


// document.addEventListener('keydown', (event) => {
//     // Check if the pressed key is 'Enter'
//     if (event.key === 'Enter') {
//       console.log('ENTER');
//     }
//   });
  






const form = document.getElementById('commentForm');


form.addEventListener('submit', (event) => {

  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

 
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Comment:', comment);
});
