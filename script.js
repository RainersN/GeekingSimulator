function geekClick() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAmount = Number(localStorage.getItem("upgradeAmount"));
	geekAmount = (Number(geekAmount) + 1*Math.pow(1.15, upgradeAmount));
    localStorage.setItem("geekAmount", geekAmount);
	setNewAmount();
}
function upgradeGeekClick() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAmount = Number(localStorage.getItem("upgradeAmount"));
	let upgradeCost = Number(localStorage.getItem("upgradeCost"));
	if(geekAmount>=upgradeCost) {
		upgradeAmount++;
		geekAmount -= upgradeCost;
		localStorage.setItem("geekAmount", geekAmount);
		upgradeCost *=1.25
		localStorage.setItem("upgradeCost", upgradeCost);
	}
    localStorage.setItem("upgradeAmount", upgradeAmount);
	setNewAmount();
}
function upgradeAutoGeekClick() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAutoAmount = Number(localStorage.getItem("upgradeAutoAmount"));
	let upgradeAutoCost = Number(localStorage.getItem("upgradeAutoCost"));
	if(geekAmount>=upgradeAutoCost) {
		upgradeAutoAmount++;
		geekAmount -= upgradeAutoCost;
		localStorage.setItem("geekAmount", geekAmount);
		upgradeAutoCost *=1.20
		localStorage.setItem("upgradeAutoCost", upgradeAutoCost);
	}
    localStorage.setItem("upgradeAutoAmount", upgradeAutoAmount);
	setNewAmount();
}
function upgradeAutoGeekClickV2() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAutoV2Amount = Number(localStorage.getItem("upgradeAutoV2Amount"));
	let upgradeAutoV2Cost = Number(localStorage.getItem("upgradeAutoV2Cost"));
	if(geekAmount>=upgradeAutoV2Cost) {
		upgradeAutoV2Amount++;
		geekAmount -= upgradeAutoV2Cost;
		localStorage.setItem("geekAmount", geekAmount);
		upgradeAutoV2Cost *=1.5
		localStorage.setItem("upgradeAutoV2Cost", upgradeAutoV2Cost);
	}
    localStorage.setItem("upgradeAutoV2Amount", upgradeAutoV2Amount);
	setNewAmount();
}
function upgradeTickspeed() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let tickspeed = Number(localStorage.getItem("tickspeed"));
	let tickCost = Number(localStorage.getItem("tickCost"));
	if(geekAmount>=tickCost) {
		tickspeed *= 1.1;
		geekAmount -= tickCost;
		localStorage.setItem("geekAmount", geekAmount);
		tickCost *=2
		localStorage.setItem("tickCost", tickCost);
	}
    localStorage.setItem("tickspeed", tickspeed);
	setNewAmount();
}
function setNewAmount() {
	if ( !localStorage.getItem("geekAmount") || !localStorage.getItem("upgradeAmount") || !localStorage.getItem("upgradeCost") || !localStorage.getItem("upgradeAutoAmount") || !localStorage.getItem("upgradeAutoCost") || !localStorage.getItem("upgradeAutoV2Amount") || !localStorage.getItem("upgradeAutoV2Cost") || !localStorage.getItem("tickspeed") || !localStorage.getItem("tickCost")) {
		localStorage.setItem("geekAmount", 0);
		localStorage.setItem("upgradeAmount", 0);
		localStorage.setItem("upgradeCost", 25);
		localStorage.setItem("upgradeAutoAmount", 0);
		localStorage.setItem("upgradeAutoCost", 50);
		localStorage.setItem("upgradeAutoV2Amount", 0);
		localStorage.setItem("upgradeAutoV2Cost", 200);
		localStorage.setItem("tickspeed", 1);
		localStorage.setItem("tickCost", 100);
	}
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAmount = Number(localStorage.getItem("upgradeAmount"));
	let upgradeCost = Number(localStorage.getItem("upgradeCost"));
	let upgradeAutoAmount = Number(localStorage.getItem("upgradeAutoAmount"));
	let upgradeAutoCost = Number(localStorage.getItem("upgradeAutoCost"));
	let upgradeAutoV2Amount = Number(localStorage.getItem("upgradeAutoV2Amount"));
	let upgradeAutoV2Cost = Number(localStorage.getItem("upgradeAutoV2Cost"));
	let tickspeed = Number(localStorage.getItem("tickspeed"));
	let tickCost = Number(localStorage.getItem("tickCost"));
    let amountDisplay = document.getElementById("amountDisplay");
    amountDisplay.innerHTML = Number(geekAmount).toFixed(2);
	let upgradeDisplay = document.getElementById("upgradeDisplay");
    upgradeDisplay.innerHTML = (" Times upgraded: " + upgradeAmount);
	let costDisplay = document.getElementById("costDisplay");
    costDisplay.innerHTML = (" Upgrade cost: " + Number(upgradeCost).toFixed(2));
	let upgradeAutoGeekDisplay = document.getElementById("upgradeAutoGeekDisplay");
    upgradeAutoGeekDisplay.innerHTML = (" Times upgraded: " + upgradeAutoAmount);
	let costAutoGeekDisplay = document.getElementById("costAutoGeekDisplay");
    costAutoGeekDisplay.innerHTML = (" Upgrade cost: " + Number(upgradeAutoCost).toFixed(2));
	let upgradeAutoGeekDisplayV2 = document.getElementById("upgradeAutoGeekDisplayV2");
    upgradeAutoGeekDisplayV2.innerHTML = (" Times upgraded: " + upgradeAutoV2Amount);
	let costAutoGeekDisplayV2 = document.getElementById("costAutoGeekDisplayV2");
    costAutoGeekDisplayV2.innerHTML = (" Upgrade cost: " + Number(upgradeAutoV2Cost).toFixed(2));
	let tickspeedDisplay = document.getElementById("tickspeedDisplay");
    tickspeedDisplay.innerHTML = (" Tickspeed: " + tickspeed);
	let costTickDisplay = document.getElementById("costTickDisplay");
    costTickDisplay.innerHTML = (" Upgrade cost: " + Number(tickCost).toFixed(2));
}
setInterval(tick, 100);
function tick() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAutoAmount = Number(localStorage.getItem("upgradeAutoAmount"));
	let upgradeAutoV2Amount = Number(localStorage.getItem("upgradeAutoV2Amount"));
	let tickspeed = Number(localStorage.getItem("tickspeed"));
	geekAmount += (((1*upgradeAutoAmount) + (3*upgradeAutoV2Amount))/10)*tickspeed;
	localStorage.setItem("geekAmount", geekAmount);
	setNewAmount();
}
function reset() {
	localStorage.removeItem("geekAmount");
	setNewAmount();
}