setInterval(imageMove, 750);
setInterval(tick, 100);
let tedTimeout;
let tedAppearTimeout;
let saveSpanTimeout;
//take variables from storage and define them as such when loading page
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
let temp = 0;
for (let i = power; i>1;i-=0.05){
	temp++;
}
powerCost = 50000 * Math.pow(2.5,temp);
tedAppearTimeout = setTimeout(testTed, Math.floor(Math.random() * (1800000 - 300000) ) + 300000);
//moves teds face by calculating page/container size and image position,then gives random new position
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
//makes ted visible and gives user 5 second to click him
function testTed(){
	document.getElementById("test1").style.visibility = 'visible';
	tedTimeout = setTimeout(tedSteal, 5000);
}
//if user fails to click,this function takes 25% of their points
function tedSteal(){
	geekAmount = Number(localStorage.getItem("geekAmount"));
	geekAmount *= 0.75;
	localStorage.setItem("geekAmount", geekAmount);
	document.getElementById("test1").style.visibility = 'hidden';
	tedAppearTimeout = setTimeout(testTed, Math.floor(Math.random() * (1800000 - 300000) ) + 300000);
}
//when ted is clicked the timeout is cleared and a new random timer for his appearance is set
function tedStop(){
	clearTimeout(tedTimeout);
	document.getElementById("test1").style.visibility = 'hidden';
	tedAppearTimeout = setTimeout(testTed, Math.floor(Math.random() * (1800000 - 300000) ) + 300000);
}
function geekClick() {
	geekAmount += Math.pow((1*Math.pow(1.15, upgradeAmount)),power);
}
//upgrades click efficiency
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
//adds an auto generator at base speed of 1 point per second before upgrades
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
//adds an auto generator at base speed of 3 points per second before upgrades
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
//adds a multiplier to all stats besides click,will be removed for global multiplier in future
//dont forget to remove it vro
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
//raises all point gain sources to certain power,first try at not hardcoding costs

//this is cursed,there's gotta be a better way to do this
//anything but having 2 if statements... (maybe I can make a function that gets called in a loop per ID and automatically sets price?)
function upgradePower() {
	if(geekAmount>=powerCost) {
		power += 0.05;
		geekAmount -= powerCost;
	}
	let temp = 0;
	for (let i = power; i>1;i-=0.05){
		temp++;
		console.log(temp);
	}
	powerCost = 50000 * Math.pow(2.5,temp);
	console.log(powerCost);
	let powerDisplay = document.getElementById("powerDisplay");
    powerDisplay.innerHTML = (" GeekPoints Power^: " + Number(power).toFixed(2));
	let costPowerDisplay = document.getElementById("costPowerDisplay");
    costPowerDisplay.innerHTML = (" Upgrade cost: " + Number(powerCost).toFixed(2));
}
//sets values if theyre empty when page loads,sets base elements
//placement of text will be standardized with one function and IDs if possible
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
	geekAmount = Number(localStorage.getItem("geekAmount"));
	upgradeAmount = Number(localStorage.getItem("upgradeAmount"));
	upgradeCost = Number(localStorage.getItem("upgradeCost"));
	upgradeAutoAmount = Number(localStorage.getItem("upgradeAutoAmount"));
	upgradeAutoCost = Number(localStorage.getItem("upgradeAutoCost"));
	upgradeAutoV2Amount = Number(localStorage.getItem("upgradeAutoV2Amount"));
	upgradeAutoV2Cost = Number(localStorage.getItem("upgradeAutoV2Cost"));
	tickspeed = Number(localStorage.getItem("tickspeed"));
	tickCost = Number(localStorage.getItem("tickCost"));
	power = Number(localStorage.getItem("power"));
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
//adds points per every tick (100ms),values are divided by 10 so symbolize per second increases
function tick() {
	geekAmount += Math.pow(((((1*upgradeAutoAmount) + (3*upgradeAutoV2Amount))/10)*tickspeed),power);
    document.getElementById("amountDisplay").innerHTML = ("GeekPoints™: " + Number(geekAmount).toFixed(2));
}
//resets values...array update coming soon + 2 weeks
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
	geekAmount = Number(localStorage.getItem("geekAmount"));
	upgradeAmount = Number(localStorage.getItem("upgradeAmount"));
	upgradeCost = Number(localStorage.getItem("upgradeCost"));
	upgradeAutoAmount = Number(localStorage.getItem("upgradeAutoAmount"));
	upgradeAutoCost = Number(localStorage.getItem("upgradeAutoCost"));
	upgradeAutoV2Amount = Number(localStorage.getItem("upgradeAutoV2Amount"));
	upgradeAutoV2Cost = Number(localStorage.getItem("upgradeAutoV2Cost"));
	tickspeed = Number(localStorage.getItem("tickspeed"));
	tickCost = Number(localStorage.getItem("tickCost"));
	power = Number(localStorage.getItem("power"));
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
//saves the game
//also adds a span element to signify that game has indeed been saved,so users know page is responding
function save(){
	clearTimeout(saveSpanTimeout);
	saveSpanTimeout = setTimeout(deleteSpanText,5000);
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
	if (document.getElementById("saveText") !== null) {
		document.getElementById("saveText").remove();
    }
	const createTextSpan = document.createElement('span');
	createTextSpan.id = "saveText";
	document.getElementById("resetContainer").appendChild(createTextSpan);
	document.getElementById("saveText").innerHTML = "SAVED!";
}
//deletes span text if exists,is triggered by timeout,which is also autocleared every save to make smooth span fadeout
function deleteSpanText(){
	if (document.getElementById("saveText") !== null) {
		document.getElementById("saveText").remove();
	}
}
//picks random news ticker content from array,matches with length from second array to make animation length. works by deleting and adding new spans for smooth transition experience and so it doesnt change mid-transition (took a while to fix,even though its a simple concept,I guess it took a moment to realize)
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
	  "Title: The Case Against the Frenzy Auto Shotgun in Fortnite: Overpowered and Unfair In the competitive landscape of Fortnite, the balance of weaponry is crucial to ensuring a fair and enjoyable experience for all players. However, certain weapons, such as the Frenzy Auto Shotgun, have emerged as contentious points due to their overpowered nature, tilting the scales of fairness and creating frustration among players.",
	  "Yo,who are these players bro? Who the fuck is Dixon-Bonner? Maycock,Smallwood...-who are these?! Goldaniga! WHO IS GOLDANIGA?! Bro get the-nah hell nah man,I'm never letting you play FIFA with my account. Niga...WHO IS NIGA? WHY IS EVERYBODY NAMED N****? Bendová. Who the fuck? Zúñiga...Oh hell nah. Dickmann...WHO ARE THESE? Gayret...Cummings and Nigg,like what the fuck-dick. *disbelief*",
	  " Hallo meine Zeitungsleser! Sveici jūs šajā vakarā! Laikraksta topšanas laikā notika negaidīts uzbrukums no Rīgas Līča teritorijas midgetiem takā info varbūt nebūs tik daudz kā parasti. Nesen tikka uzzināti Latviešu valodas PD rezultāti kas varēja pārsteigt labā un nevisai ziņā. Var apgalvot to ka skolotājs pastrādāja!  PURVCIEMA BURVJI!?!? Svētdien ejot pa Zemitānu tiltu redzēju jocīgu skatu. Divi džeki mežiņa kaut ko tup. Drīzumā viens no džekiem sāka puļīt dūmus (Es biju ahujā). Otrs džeks sāka full sprintā maukt prom. Takā pēc šis situācijas es varu apgalvot ka Purvciems ir mistiska vieta un kaut kur jābūt mistiskajam apburtajam kokam. DARINŠ JĀMĪL Darbiņi ir Programmēšanā un Angļu valodā kā arī Matemātīka. (Praktiskais līdz 19.10 un Uzdevumiņi grāmatā un Dariņš kladē.) IZMAIŅAS!?!? Rītā rāda ka būs 2 pāri ar angļu valodu no rīta. Nav zināms cik pattiesa info bet tad jau redzēs. ATGĀDINĀJUMS!!! Sagatavojat pd burtnīcas matemātikā! Tā tauta uz šodienu viss man pašam te citas problēmas uzrodās. Midgeti tika cauri aizsradzības slāņiem tulīt man jau pie durvīm klauvē tāka es eju pizģīt viņus. Novēlu jauku atlikušo vakaru.",
	  "Hallo meine Zeitungsleser! Labs vakars tauta! Šoreiz izdevums vēlāk nekā parasti (ar ko negadās) īsumā ši nedēļa tāda viegla baiki darīt neko nevjadzēja. Šodien mūs sporta skolotājs piespida mums atbalstīt mūsu big big kačoku novērojot ar dieva doto spēju (redzi) novērot kā dzelz stienis veica vienmērīgi paatrinātu vertikālu kustību uz augšu (fizikas skolotājs sajūsmā) un lika aplaudēt svara celšanas sacensībās. Ja nesekoja līdzi sodijums bija N. (L Žani skill issue)  FIZIKAS SKOLOTĀJA DARBIŅŠ. Darījām fizikas skolotāja praktisko darbiņu sastībā ar elastību. Cerēsim ka viņam celītis būs pietiekoši elastīgs, lai izturētu visu uzlikto slodzi. Aimena (akmeņa) jaunā jaukt-lente!  A(i/k)mens cepa savu mixtape. (jaukt-lente) Sola tīrāko fire (uguni), jo cepa digti un laikam nenodedzināja. (par laimi) Takā nāksies gadīt kad uz palodzes beidzot atdzisīs un varēsim to izbaudīt.  Skolotāja kraikase!!! Nesan tika nopludināts kontroversiāls videomateriāls kurā redzama skolotāja kraikase! Tas ir ļoti traki un parāda skolotāja kungu neprofesionālā gaismā. Bet mums tagat ir visas iespējas blackmailot viņu pieprasot augstākas atzīmes, bet to vel nolemsim. Klases pasākums! Diemžēl pasākums tiek pārcelts uz 20 decembri, bet labā puse ir tāda ka jums ir vairāk laiks sagatavoties 'Skolas eine Zeitung viktorīnai' un man būs vairāk laika sagatavot sarežģītākus jautājumus. Dzejolīši Pie LV skolotāja skaitijām pantiņus priekš atzīmītēm. Tā arī nesagaidijām sniega dziesma 2 tikai sniega dziemsa 1 tika skandināta. (Tā ir kā ir) Baigi nav ko vel stāstīt tākā būs īsais raksts. Novēlu jums jauku atlikušo vakaru! ",
	  "Hallo meine Zeitungsleser! Šis ir speciāls izdevums dēļ esošajiem apstākļiem! Jūs varbūt nepamanijāt bet skolā pazuda elektrība!1!!11!! Tas ir ļoti traģisks gadijums, jo iekšā esošie cilvēki ir iespundēti dēļ automātisko durvju nesadarbošanos ar mūsu tautiešiem. Ir izveidojušās vairākas teorijas par elektrības pazušanas iemeslu. Viena no teorijām kura tiek bāzēta uz aculiecinieku apstiprinājumiem kura stāsta par 5. kursa elektriķiem kuri piedzērušies aizčāpoja uz elektrības skapi un izvilka trīs rezistorus. Sakot vel ka skolotāja kungs 'dandžen meistars' būdams varens elektriķis aizgāja sadeva 3. kursniekiem pa UTP un STP (Ultimate Taukaino Pakausi, Sasvidušo Tesmeņu Pieri)  Skolotājs savāca rezistorus un aizgāja uz savu dandženu tur pētīt, bet tie nezināmu apstākļu dēļ pazuda. Bet skolotāja kungam izdevās sataisīt elektrību RTK gaismām. (Līdz ar to tumsā nesēžam.) Tomēr daži saka ka rezistorud savāca Šmara, ******,******,*******. Iespējams ka katram bija savs iemesls. iemēram Šmarai varbūt viņas birojā vajadzēja, ****** to grasijās savā kambarī novietot, ****** rezistoru savāca lai nodotu TolmetTM un nopirktu velvienu 0,3 L Trīsgraudu, lai lāpitu 'большая большая поха.' Un ****** ganjau paņēma, lai ātrāk varētu vairoties ar pingvīna izdzimteni vārda Linuxis, bet kur gan palika pēdējais rezistors nav skaidrs, bet klaiņo baumas ka viss var aiziet līdz audzināšanas stundai. ****** komentē: 'Jā tieši tā!' bet to gan mēs vel redzēsim. Tā gan ir populārākā teorija skolas iemītnieku starpā.  Tomēr es vēlētos izvirzīt savu teoriju, ka elektrības pazušana ir tieši saistīta ar RLT (Rīgas līča teritorijas) midžetiem un to meģinājumiem sabotēt mūsu valsti un valsts inteleģenci. Es to secinu pēc to iepriekšējiem uzbrukumuiem, kas bija tieši saistīti ar infrastruktūru un lūk velviens piemērs!  Sakarā ar to es pasludinu veikt lielākas represijas pret RLT un to dalībniekiem. Pēc ****** astroloģiskajām prognozēm midžetu aktivitāte palielināsies ar Maija pienākšanu. Ar šo arī beigsies šis spec-izdevums novēlu jums jauku atlikušo dienu. Honorable mention: Gatavs saņemt muguras šāvienus vol1 > Gatavs saņemt muguras šāvienus vol2",
	  "Es runāju ar draugiem pie datora,bet es apklusu,jo man palika auksti. Es paskatījos pa labi,un redzēju,ka manai mājai bija liels caurums sienā. Izgāju pa to ārā un redzēju aku. Piegāju tai tuvāk,bet paslīdēju uz kakas (futbola atsauce). Es iekritu akā un atradu mazu,maģisku lādīti. Izmantojot Aimena divu pirkstu paņēmienu es to atvēru,un iekšā atradu mazu lapiņu. Tas bija nosūtījums pēc paracetamola. Diemžēl,elektriskā strāva no pazemes līnijām man iespēra,un es pamodos slimnīcā. Dakteris man paziņoja,ka atrodos Panamā,slimnīcā uz pakalna. Es iedzēru kafiju ar pienu un uzēdu putru,un padomāju par savu zirgu,kas man palikās mājās. Tagad jau tas visticamāk stāvētu saulrietā.",
	  "Nereta. Bedre kurā varētu nahuj nomirt Mēru par alu pat var uzpirkt Vieta kas no nedzīvā izsūks dzīvi Un Aimenu paņems ar sevi līdzi. Copyright owned by Dmitrijs Borodins SIA.",
	  "I have just recieved the most WONDERFUL news! My friends work at a big company and they're developing this game,right? Big project and all,so they've been at it for a while. And I heard that they're finally releasing it! Yeah,there's 30 hours of content over multiple areas with crazy good art and shit. The name? It's called HellHive,bro. HellHive is releasing tommorow!",
	  "Y'know,I was going to write down a dream I've had,but when I went to check my half-assed dream journal I found that none of them should be made public,besides like this one and another one. So here you go. I was playing TF2 with a friend,right? Chilling and having fun,then he says to turn my volume up. I do just that and my fucking alarm sounds. You've got to be fucking kidding me.",
	  "BREAKING NEWS - Our brave field reporters have visited a small town in Sēlija and confirmed the disturbing fact that nothing of interest has happened in Nereta.",
	  "BREAKING NEWS - Weather forecast predicts another week of -25 degrees C once again. Unfortunately for everyone who planned to leave their housing next week,it's going to be another week of -20 to -25 degrees celsius. This marks the 5th week in a row where temperatures have stayed below -15 degrees and is a historic high,or should we say low,on the amount of time that cold has been sustained for this long. Thankfully,scientists are trying to make it just a bit warmer,and they will be running a set of 400 GeekStation 4s to release enough warmth to bring the scale up by 8 degrees.",
	  "BREAKING NEWS - Man overdoses on energy drinks. A man by the name of Pans Talons has overdosed on energy drinks after allegedly buying 20 of them on sale and chugging them right before a lecture. While everything seemed fine at first,he complained of chest pains to his fellow students minutes before collapsing from a heart attack. An ambulance arrived shortly after and managed to resuscitate him,and he is currently staying at GeekCity Central Hospital. We also have a short comment available from Mr.Pans Talons himself - 'Yeah,I mean...The drink...-The energy drinks we're really cheap,man. Do you know how much 90..-no,80 cents is? I just had to buy them,man. I had to.'",
	  "BREAKING NEWS - Man stabbed on tram. Today at 10:42pm a man was taking tram route 1B,when someone reportedly approached him and stabbed him. Thankfully other passengers were able to help fight off the attacker and called an ambulance for the wounded passenger. The attacker has been arrested for police and is awaiting trial. The injured man has survived the attack,however has currently declined to comment. However,this marks the 12th attack this hour,an all-time low for today.",
	  "BREAKING NEWS - Students of Geek University have started a week of demolition. Those participating have stated that they are just having fun,however employees tell a different story. All across the university and especially in the restroom one might find just rubble - kicked down doors and holes in walls,broken faucets and wet floors. There have also been reports of a 'snus mountain' being constructed in a secret location thearized by anonymous tips to be the elevator,which is currently broken due to someone having destroyed the electrical system of the university.",
	  "BREAKING NEWS - All-out war declared between Geek University dorms and local homeless shelter! Sticks and stones may break ones bones,but airsoft pistols poke out eyes this week as students at Geek University dorms have begun a war against the homeless shelter right across the street. There has historically already been a conflict between these 2 establishments,however one of the homeless folks got into a verbal argument with a student when asking for spare change,which the student took as a reason to brag about being poor himself. After the homeless man tried explaining how the student isn't actually that bad off,more students from the dorm came over to help their comrade out. Eventually a large crowd managed to gather,after which they started throwing around rocks and bottles from the ground. The small riot led to 5 injured,however that wasn't the end to it. As the days have gone by,students have begun shooting homeless people walking along the street with airsoft pistols from their windows,while the homeless people have retalliated by trashing the dorms and breaking windows. Multiple fist-fights have also been reported,and the police is considering a curfew and temporary on-site officers to help calm the situation. Both sides have unfortunately refused to comment.",
	  "BREAKING NEWS - Local kebab shop reportedly using non-standard and even human meat in their products! SIA GeekKebab has been caught catching pigeons by students of Geek University,who state that they saw workers in the all too well-known outfit of GeekKebab using a bow to shoot the poor birds out of the sky. The avians were apparently stacked in a box and brought back to the fast food location through the back-door. However,more shocking is the confession of a former student who used to live on campus of Geek University,who has stated that GeekKebab used to offer a special discount for customers who brought in large batches of meat. The anonymous ex-student said as follows - 'I mean,it was horrible! I remember one time when a student went missing. Everyone walked past their dorm room and it smelled like shit,I mean like something was rotting in there. But then one day it just got...better. Quite the opposite happened at the kebab place however. The meat they put in the kebabs tasted so horrible for around a month. One of my friends who I dont talk to anymore was rrally hyped about going and he paid next to nothing when he visited it for some reason. I stopped going after that,it gave me a bad vibe.'"
	];
	const newsLength = [
	  17,
	  23,
	  17,
	  42,
	  47,
	  64,
	  56,
	  175,
	  232,
	  305,
	  99,
	  30,
	  66,
	  78,
	  27,
	  108,
	  119,
	  79,
	  92,
	  212,
	  200
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
setInterval(save,60000);
//idea i had while writing comments
//writing it down here so i dont forget,fingers crossed this is deleted soon enough due to successful implementation
//in short,each upgrade (very useful in the future) has its own ID attached to it in the HTML side,which is then fed into a price array for fetching base prices
//upgrade amounts can then be fed into loop that calculates price using upgrade amount,thus removing need to save prices
//same can also be applied for max amounts,its all one big loop with saved values in arrays
//thank you for the tip teach,saving is gonna be declutered this way,and thats not even what you intended

//me from 45 minutes later - ive gotta get that array bro the power function proved it
//20 minutes later - fuck the power function. unfortunetely its the stepping stone for removing cost amounts from saving and making the big functions