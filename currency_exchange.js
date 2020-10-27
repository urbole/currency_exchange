let currencyusdbuy = 28.1;
let currencyusdsale = 28.5;
let currencyeurobuy = 33.15;
let currencyeurosale = 33.67;
let currencyplnbuy = 7.03;
let currencyplnsale = 7.4;

const usdbuy = document.getElementById('usdbuy');
const usdsale = document.getElementById('usdsale');
const eurobuy = document.getElementById('eurobuy');
const eurosale = document.getElementById('eurosale');
const plnbuy = document.getElementById('plnbuy');
const plnsale = document.getElementById('plnsale');

usdbuy.innerText = currencyusdbuy;
usdsale.innerText = currencyusdsale;
eurobuy.innerText = currencyeurobuy;
eurosale.innerText = currencyeurosale;
plnbuy.innerText = currencyplnbuy;
plnsale.innerText = currencyplnsale;

function buyUsd() {
	inputvalue = document.getElementById('sumbuyusd').value;
	message = inputvalue * currencyusdbuy;
	document.getElementById('resultbuyusd').innerHTML = message.toFixed(2) + "<span> UAH</span>";
}

function saleUsd() {
	inputvalue = document.getElementById('sumsaleusd').value;
	message = inputvalue * currencyusdsale;
	document.getElementById('resultsaleusd').innerHTML = message.toFixed(2) + "<span> UAH</span>";
}

function buyEuro() {
	inputvalue = document.getElementById('sumbuyeuro').value;
	message = inputvalue * currencyeurobuy;
	document.getElementById('resultbuyeuro').innerHTML = message.toFixed(2) + "<span> UAH</span>";
}

function saleEuro() {
	inputvalue = document.getElementById('sumsaleeuro').value;
	message = inputvalue * currencyeurosale;
	document.getElementById('resultsaleeuro').innerHTML = message.toFixed(2) + "<span> UAH</span>";
}

function buyPln() {
	inputvalue = document.getElementById('sumebaypln').value;
	message = inputvalue * currencyplnbuy;
	document.getElementById('resultbuypln').innerHTML = message.toFixed(2) + "<span> UAH</span>";
}

function salePln() {
	inputvalue = document.getElementById('sumsalepln').value;
	message = inputvalue * currencyplnsale;
	document.getElementById('resultsalepln').innerHTML = message.toFixed(2) + "<span> UAH</span>";
}