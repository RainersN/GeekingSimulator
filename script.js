function geekClick() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAmount = Number(localStorage.getItem("upgradeAmount"));
	let power = Number(localStorage.getItem("power"));
	geekAmount += Math.pow((1*Math.pow(1.15, upgradeAmount)),power);
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
	let upgradeDisplay = document.getElementById("upgradeDisplay");
    upgradeDisplay.innerHTML = (upgradeAmount);
	let costDisplay = document.getElementById("costDisplay");
    costDisplay.innerHTML = (" Upgrade cost: " + Number(upgradeCost).toFixed(2));
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
	let upgradeAutoGeekDisplay = document.getElementById("upgradeAutoGeekDisplay");
    upgradeAutoGeekDisplay.innerHTML = (upgradeAutoAmount);
	let costAutoGeekDisplay = document.getElementById("costAutoGeekDisplay");
    costAutoGeekDisplay.innerHTML = (" Upgrade cost: " + Number(upgradeAutoCost).toFixed(2));
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
	let upgradeAutoGeekDisplayV2 = document.getElementById("upgradeAutoGeekDisplayV2");
    upgradeAutoGeekDisplayV2.innerHTML = (upgradeAutoV2Amount);
	let costAutoGeekDisplayV2 = document.getElementById("costAutoGeekDisplayV2");
    costAutoGeekDisplayV2.innerHTML = (" Upgrade cost: " + Number(upgradeAutoV2Cost).toFixed(2));
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
	let tickspeedDisplay = document.getElementById("tickspeedDisplay");
    tickspeedDisplay.innerHTML = (" Tickspeed: " + Number(tickspeed).toFixed(2));
	let costTickDisplay = document.getElementById("costTickDisplay");
    costTickDisplay.innerHTML = (" Upgrade cost: " + Number(tickCost).toFixed(2));
}
function upgradePower() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let power = Number(localStorage.getItem("power"));
	let temp = power;
	let powerCost = 50000;
	for (let temp = power; temp>1;temp-=0.05){
		powerCost *= 2.5;
	}
	if(geekAmount>=powerCost) {
		power += 0.05;
		geekAmount -= powerCost;
		localStorage.setItem("geekAmount", geekAmount);
	}
	for (let temp = power; temp>1;temp-=0.05){
		powerCost *= 2.5;
	}
    localStorage.setItem("power", power);
	let powerDisplay = document.getElementById("powerDisplay");
    powerDisplay.innerHTML = (" GeekPoints Power^: " + Number(power).toFixed(2));
	let costPowerDisplay = document.getElementById("costPowerDisplay");
    costPowerDisplay.innerHTML = (" Upgrade cost: " + Number(powerCost).toFixed(2));
}
function setNewAmount() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
    let amountDisplay = document.getElementById("amountDisplay");
    amountDisplay.innerHTML = ("GeekPoints™: " + Number(geekAmount).toFixed(2));
}
function pageLoad(){
	if ( !localStorage.getItem("geekAmount")) {
		localStorage.setItem("geekAmount", 0);
	}
	if ( !localStorage.getItem("upgradeAmount")) {
		localStorage.setItem("upgradeAmount", 0);
	}
	if ( !localStorage.getItem("upgradeCost")) {
		localStorage.setItem("upgradeCost", 25);
	}
	if ( !localStorage.getItem("upgradeAutoAmount")) {
		localStorage.setItem("upgradeAutoAmount", 0);
	}
	if ( !localStorage.getItem("upgradeAutoCost")) {
		localStorage.setItem("upgradeAutoCost", 50);
	}
	if ( !localStorage.getItem("upgradeAutoV2Amount")) {
		localStorage.setItem("upgradeAutoV2Amount", 0);
	}
	if ( !localStorage.getItem("upgradeAutoV2Cost")) {
		localStorage.setItem("upgradeAutoV2Cost", 200);
	}
	if ( !localStorage.getItem("tickspeed")) {
		localStorage.setItem("tickspeed", 1);
	}
	if ( !localStorage.getItem("tickCost")) {
		localStorage.setItem("tickCost", 100);
	}
	if ( !localStorage.getItem("power")) {
		localStorage.setItem("power", 1);
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
	let power = Number(localStorage.getItem("power"));
	let powerCost = 50000;
	for (let temp = power; temp>1;temp-=0.05){
		powerCost *= 2.5;
	}
	let upgradeDisplay = document.getElementById("upgradeDisplay");
    upgradeDisplay.innerHTML = (upgradeAmount);
	let costDisplay = document.getElementById("costDisplay");
    costDisplay.innerHTML = (" Upgrade cost: " + Number(upgradeCost).toFixed(2));
	let upgradeAutoGeekDisplay = document.getElementById("upgradeAutoGeekDisplay");
    upgradeAutoGeekDisplay.innerHTML = (upgradeAutoAmount);
	let costAutoGeekDisplay = document.getElementById("costAutoGeekDisplay");
    costAutoGeekDisplay.innerHTML = (" Upgrade cost: " + Number(upgradeAutoCost).toFixed(2));
	let upgradeAutoGeekDisplayV2 = document.getElementById("upgradeAutoGeekDisplayV2");
    upgradeAutoGeekDisplayV2.innerHTML = (upgradeAutoV2Amount);
	let costAutoGeekDisplayV2 = document.getElementById("costAutoGeekDisplayV2");
    costAutoGeekDisplayV2.innerHTML = (" Upgrade cost: " + Number(upgradeAutoV2Cost).toFixed(2));
	let tickspeedDisplay = document.getElementById("tickspeedDisplay");
    tickspeedDisplay.innerHTML = (" Tickspeed: " + Number(tickspeed).toFixed(2));
	let costTickDisplay = document.getElementById("costTickDisplay");
    costTickDisplay.innerHTML = (" Upgrade cost: " + Number(tickCost).toFixed(2));
	let powerDisplay = document.getElementById("powerDisplay");
    powerDisplay.innerHTML = (" GeekPoints Power^: " + Number(power).toFixed(2));
	let costPowerDisplay = document.getElementById("costPowerDisplay");
    costPowerDisplay.innerHTML = (" Upgrade cost: " + Number(powerCost).toFixed(2));
}
setInterval(tick, 100);
function tick() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAutoAmount = Number(localStorage.getItem("upgradeAutoAmount"));
	let upgradeAutoV2Amount = Number(localStorage.getItem("upgradeAutoV2Amount"));
	let tickspeed = Number(localStorage.getItem("tickspeed"));
	let power = Number(localStorage.getItem("power"));
	geekAmount += Math.pow(((((1*upgradeAutoAmount) + (3*upgradeAutoV2Amount))/10)*tickspeed),power);
	localStorage.setItem("geekAmount", geekAmount);
	setNewAmount();
}
function reset() {
	localStorage.setItem("geekAmount", 0);
	localStorage.setItem("upgradeAmount", 0);
	localStorage.setItem("upgradeCost", 25);
	localStorage.setItem("upgradeAutoAmount", 0);
	localStorage.setItem("upgradeAutoCost", 50);
	localStorage.setItem("upgradeAutoV2Amount", 0);
	localStorage.setItem("upgradeAutoV2Cost", 200);
	localStorage.setItem("tickspeed", 1);
	localStorage.setItem("tickCost", 100);
	localStorage.setItem("power", 1);
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAmount = Number(localStorage.getItem("upgradeAmount"));
	let upgradeCost = Number(localStorage.getItem("upgradeCost"));
	let upgradeAutoAmount = Number(localStorage.getItem("upgradeAutoAmount"));
	let upgradeAutoCost = Number(localStorage.getItem("upgradeAutoCost"));
	let upgradeAutoV2Amount = Number(localStorage.getItem("upgradeAutoV2Amount"));
	let upgradeAutoV2Cost = Number(localStorage.getItem("upgradeAutoV2Cost"));
	let tickspeed = Number(localStorage.getItem("tickspeed"));
	let tickCost = Number(localStorage.getItem("tickCost"));
	let power = Number(localStorage.getItem("power"));
	let upgradeAutoGeekDisplay = document.getElementById("upgradeAutoGeekDisplay");
    upgradeAutoGeekDisplay.innerHTML = (upgradeAutoAmount);
	let costAutoGeekDisplay = document.getElementById("costAutoGeekDisplay");
    costAutoGeekDisplay.innerHTML = (" Upgrade cost: " + Number(upgradeAutoCost).toFixed(2));
	let upgradeAutoGeekDisplayV2 = document.getElementById("upgradeAutoGeekDisplayV2");
    upgradeAutoGeekDisplayV2.innerHTML = (upgradeAutoV2Amount);
	let costAutoGeekDisplayV2 = document.getElementById("costAutoGeekDisplayV2");
    costAutoGeekDisplayV2.innerHTML = (" Upgrade cost: " + Number(upgradeAutoV2Cost).toFixed(2));
	let tickspeedDisplay = document.getElementById("tickspeedDisplay");
    tickspeedDisplay.innerHTML = (" Tickspeed: " + Number(tickspeed).toFixed(2));
	let costTickDisplay = document.getElementById("costTickDisplay");
    costTickDisplay.innerHTML = (" Upgrade cost: " + Number(tickCost).toFixed(2));
	let powerDisplay = document.getElementById("powerDisplay");
    powerDisplay.innerHTML = (" GeekPoints Power^: " + Number(power).toFixed(2));
	let powerCost = 50000;
	for (let temp = power; temp>1;temp-=0.05){
		powerCost *= 2.5;
	}
	let costPowerDisplay = document.getElementById("costPowerDisplay");
    costPowerDisplay.innerHTML = (" Upgrade cost: " + Number(powerCost).toFixed(2));
	let amountDisplay = document.getElementById("amountDisplay");
    amountDisplay.innerHTML = ("GeekPoints™: " + Number(geekAmount).toFixed(2));
}