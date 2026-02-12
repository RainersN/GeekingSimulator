setInterval(imageMove, 750);
setInterval(tick, 100);
let tedTimeout;
let tedAppearTimeout;
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
tedAppearTimeout = setTimeout(testTed, Math.floor(Math.random() * (1800000 - 300000) ) + 300000);
function imageMove(){
	var element1 = document.getElementById("test1");
	var containerTed = document.getElementById("containerTed");
    var positionInfo = element1.getBoundingClientRect();
    var imgHeight = positionInfo.height;
    var imgWidth = positionInfo.width;


    var screenWidth = containerTed.offsetWidth;
    var screenHeight = containerTed.offsetHeight;
    var imgLeft = Math.floor(Math.random() * (screenWidth - imgWidth));
    var imgTop= Math.floor(Math.random() * (screenHeight - imgHeight)) + (window.innerHeight - screenHeight);
	//console.log(screenHeight);
	//console.log(imgLeft);
	//console.log(imgTop);
    document.getElementById("test1").style.top = imgTop+"px";
    document.getElementById("test1").style.left = imgLeft+"px";
}
function testTed(){
	document.getElementById("test1").style.visibility = 'visible';
	tedTimeout = setTimeout(tedSteal, 5000);
}
function tedSteal(){
	let geekAmount = Number(localStorage.getItem("geekAmount"));
	geekAmount *= 0.75;
	localStorage.setItem("geekAmount", geekAmount);
	document.getElementById("test1").style.visibility = 'hidden';
	tedAppearTimeout = setTimeout(testTed, Math.floor(Math.random() * (1800000 - 300000) ) + 300000);
}
function tedStop(){
	clearTimeout(tedTimeout);
	document.getElementById("test1").style.visibility = 'hidden';
	tedAppearTimeout = setTimeout(testTed, Math.floor(Math.random() * (1800000 - 300000) ) + 300000);
}
function geekClick() {
	geekAmount += Math.pow((1*Math.pow(1.15, upgradeAmount)),power);
}
function upgradeGeekClick() {
	if(geekAmount>=upgradeCost) {
		upgradeAmount++;
		geekAmount -= upgradeCost;
		upgradeCost *=1.25
	}
	let upgradeDisplay = document.getElementById("upgradeDisplay");
    upgradeDisplay.innerHTML = (upgradeAmount);
	let costDisplay = document.getElementById("costDisplay");
    costDisplay.innerHTML = (" Upgrade cost: " + Number(upgradeCost).toFixed(2));
}
function upgradeAutoGeekClick() {
	if(geekAmount>=upgradeAutoCost) {
		upgradeAutoAmount++;
		geekAmount -= upgradeAutoCost;
		upgradeAutoCost *=1.20
	}
	let upgradeAutoGeekDisplay = document.getElementById("upgradeAutoGeekDisplay");
    upgradeAutoGeekDisplay.innerHTML = (upgradeAutoAmount);
	let costAutoGeekDisplay = document.getElementById("costAutoGeekDisplay");
    costAutoGeekDisplay.innerHTML = (" Upgrade cost: " + Number(upgradeAutoCost).toFixed(2));
}
function upgradeAutoGeekClickV2() {
	if(geekAmount>=upgradeAutoV2Cost) {
		upgradeAutoV2Amount++;
		geekAmount -= upgradeAutoV2Cost;
		upgradeAutoV2Cost *=1.5
	}
	let upgradeAutoGeekDisplayV2 = document.getElementById("upgradeAutoGeekDisplayV2");
    upgradeAutoGeekDisplayV2.innerHTML = (upgradeAutoV2Amount);
	let costAutoGeekDisplayV2 = document.getElementById("costAutoGeekDisplayV2");
    costAutoGeekDisplayV2.innerHTML = (" Upgrade cost: " + Number(upgradeAutoV2Cost).toFixed(2));
}
function upgradeTickspeed() {
	if(geekAmount>=tickCost) {
		tickspeed *= 1.1;
		geekAmount -= tickCost;
		tickCost *=2
	}
	let tickspeedDisplay = document.getElementById("tickspeedDisplay");
    tickspeedDisplay.innerHTML = (" Tickspeed: " + Number(tickspeed).toFixed(2));
	let costTickDisplay = document.getElementById("costTickDisplay");
    costTickDisplay.innerHTML = (" Upgrade cost: " + Number(tickCost).toFixed(2));
}
function upgradePower() {
	let temp = power;
	let powerCost = 50000;
	for (let temp = power; temp>1;temp-=0.05){
		powerCost *= 2.5;
	}
	if(geekAmount>=powerCost) {
		power += 0.05;
		geekAmount -= powerCost;
	}
	for (let temp = power; temp>1;temp-=0.05){
		powerCost *= 2.5;
	}
	let powerDisplay = document.getElementById("powerDisplay");
    powerDisplay.innerHTML = (" GeekPoints Power^: " + Number(power).toFixed(2));
	let costPowerDisplay = document.getElementById("costPowerDisplay");
    costPowerDisplay.innerHTML = (" Upgrade cost: " + Number(powerCost).toFixed(2));
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
function tick() {
	geekAmount += Math.pow(((((1*upgradeAutoAmount) + (3*upgradeAutoV2Amount))/10)*tickspeed),power);
    document.getElementById("amountDisplay").innerHTML = ("GeekPoints™: " + Number(geekAmount).toFixed(2));
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
	let powerCost = 50000;
	for (let temp = power; temp>1;temp-=0.05){
		powerCost *= 2.5;
	}
	let costPowerDisplay = document.getElementById("costPowerDisplay");
    costPowerDisplay.innerHTML = (" Upgrade cost: " + Number(powerCost).toFixed(2));
	let amountDisplay = document.getElementById("amountDisplay");
    amountDisplay.innerHTML = ("GeekPoints™: " + Number(geekAmount).toFixed(2));
}
function save(){
	localStorage.setItem("geekAmount", geekAmount);
	localStorage.setItem("upgradeAmount", upgradeAmount);
	localStorage.setItem("upgradeCost", upgradeCost);
	localStorage.setItem("upgradeAutoAmount", upgradeAutoAmount);
	localStorage.setItem("upgradeAutoCost", upgradeAutoCost);
	localStorage.setItem("upgradeAutoV2Amount", upgradeAutoV2Amount);
	localStorage.setItem("upgradeAutoV2Cost", upgradeAutoV2Cost);
	localStorage.setItem("tickspeed", tickspeed);
	localStorage.setItem("tickCost", tickCost);
	localStorage.setItem("power", power);
}
function newNewsPicker(){
	document.getElementById("textScroll").remove();
	const createSpan = document.createElement('span');
	createSpan.className = "text-scroll";
	createSpan.id = "textScroll";
	document.getElementById("textRow").appendChild(createSpan);
	const news = [
	  "Have you ever kicked pears with your life on the line? This is called dark pear psychology....",
	  "Removed album? Jews. Bad weather? Jews. Bad grades because you played brawl stars 24/7 in class? You better believe it's the Jews.",
	  "Epstein Epstein Epstein Epstein Epstein Epstein Epstein Epstein Epstein Epstein Epstein Epstein Epstein Epstein Epstein Epstein Epstein",
	  "Tumšzilais evaņģēlijs tweaking ngl. Tell me how some green police academy graduate just went in for a top 10 Kai Cenat aura moment and 1v3'ed the head of a racketeering gang. Bro who is you to be dodging bullets walking straight forward",
	  "BREAKING NEWS - Multiple houses have been found damaged overnight. Those affected say that strange holes have appeared all around both the inside and outside of their buildings. This incident has produced so-called 'Hole Houses',and the damages are calculated to be in the millions. More at 6.",
	  "Title: The Case Against the Frenzy Auto Shotgun in Fortnite: Overpowered and Unfair In the competitive landscape of Fortnite, the balance of weaponry is crucial to ensuring a fair and enjoyable experience for all players. However, certain weapons, such as the Frenzy Auto Shotgun, have emerged as contentious points due to their overpowered nature, tilting the scales of fairness and creating frustration among players."
	];
	const newsLength = [
	  17,
	  23,
	  17,
	  42,
	  47,
	  64
	];
	let newsRandomElement = Math.floor(Math.random() * news.length);
	let wordCount = newsLength[newsRandomElement];
	console.log(news[newsRandomElement]);
	document.getElementById("textScroll").innerHTML = news[newsRandomElement];
	document.getElementById("textScroll").style.animationDuration = (wordCount + "s");
	document.getElementById("textScroll").style.transform = "translateX(-100%)";
	setTimeout(newNewsPicker,Number(wordCount) * 1000);
}
newNewsPicker();
setTimeout(save,60000);