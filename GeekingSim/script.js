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
function setNewAmount() {
	if ( !localStorage.getItem("geekAmount") || !localStorage.getItem("upgradeAmount") || !localStorage.getItem("upgradeCost") || !localStorage.getItem("upgradeAutoAmount") || !localStorage.getItem("upgradeAutoCost") ) {
		localStorage.setItem("geekAmount", 0);
		localStorage.setItem("upgradeAmount", 0);
		localStorage.setItem("upgradeCost", 25);
		localStorage.setItem("upgradeAutoAmount", 0);
		localStorage.setItem("upgradeAutoCost", 50);
	}
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAmount = Number(localStorage.getItem("upgradeAmount"));
	let upgradeCost = Number(localStorage.getItem("upgradeCost"));
	let upgradeAutoAmount = Number(localStorage.getItem("upgradeAutoAmount"));
	let upgradeAutoCost = Number(localStorage.getItem("upgradeAutoCost"));
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
}
setInterval(tick, 100);
function tick() {
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	let upgradeAutoAmount = Number(localStorage.getItem("upgradeAutoAmount"));
	geekAmount += ((1*upgradeAutoAmount)/10);
	localStorage.setItem("geekAmount", geekAmount);
	setNewAmount();
}