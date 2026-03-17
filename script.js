setInterval(tick, 100);
let saveSpanTimeout;
//take variables from storage and define them as variables in the script when loading page
let geekAmount = Number(localStorage.getItem("geekAmount"));
let amountId0 = Number(localStorage.getItem("amountId0"));
let amountId1 = Number(localStorage.getItem("amountId1"));
let amountId2 = Number(localStorage.getItem("amountId2"));
let amountId3 = Number(localStorage.getItem("amountId3"));
let amountId4 = Number(localStorage.getItem("amountId4"));
const menus = document.querySelectorAll(".changeableMenu");
	for(i = 0;i<menus.length;i++){
		if(menus[i] !== document.getElementById(name+"Menu")){
			menus[i].style.visibility = "hidden";
		}
	}
const savedValues = [
	{name:"geekAmount",value:0},
	{name:"amountId0",value:0},
	{name:"amountId1",value:0},
	{name:"amountId2",value:0},
	{name:"amountId3",value:1},
	{name:"amountId4",value:1}
]
tedAppearTimeout = setTimeout(testTed, Math.floor(Math.random() * (1800000 - 300000) ) + 300000);
//legacy function that I will keep in until I can fix the bug it makes. for some reason removing it breaks the news ticker.
function testTed(){
	document.getElementById("test1").style.visibility = 'visible';
	tedTimeout = setTimeout(tedSteal, 5000);
}
function geekClick() {
	console.log(Math.pow((1*Math.pow(1.15, amountId0))*amountId3,0.95+(amountId4/20)));
	geekAmount += Math.pow((1*Math.pow(1.15, amountId0))*amountId3,amountId4);
}
//here we go...
function setPrice(id){
	//localStorage.setItem("amountId2",1);
	const priceInfo = [
		{price:25,increase:1.25},
		{price:50,increase:1.2},
		{price:200,increase:1.5},
		{price:100,increase:2},
		{price:50000,increase:2.5}
	]
	itemAmount = localStorage.getItem("amountId" + id);
	if(id != 4 && id != 3){
		itemAmount++;
	}
	let temp = 0;
	for (let i = itemAmount; i>1;i-=1){
		temp+=1;
	}
	console.log(temp);
	let finalPrice = priceInfo[id].price * Math.pow(priceInfo[id].increase,temp);
	if(id == 4){
		let costDisplay = document.getElementById("costDisplay" + id);
		costDisplay.innerHTML = (Number(finalPrice).toFixed(2));
		let amountDisplay = document.getElementById("amountDisplay" + id);
		amountDisplay.innerHTML = (Number(0.95+itemAmount/20).toFixed(2));
	}
	else{
		let costDisplay = document.getElementById("costDisplay" + id);
		costDisplay.innerHTML = (Number(finalPrice).toFixed(2));
		let amountDisplay = document.getElementById("amountDisplay" + id);
		amountDisplay.innerHTML = (Number(localStorage.getItem("amountId" + id)));
	}
	return finalPrice;
}
function buyItem(id){
	price = setPrice(id);
	itemAmount = localStorage.getItem("amountId" + id);
	if(geekAmount>=price) {
		itemAmount++;
		geekAmount -= price;
	}
	if(id == 4){
		let amountDisplay = document.getElementById("amountDisplay" + id);
		amountDisplay.innerHTML = (Number(itemAmount/20).toFixed(2));
		amountId4 =  0.95+(itemAmount/20);
	}
	else{
		let amountDisplay = document.getElementById("amountDisplay" + id);
		amountDisplay.innerHTML = (Number(itemAmount).toFixed(2));
		eval("amountId" + id + '= ' + itemAmount + ';');
	}
	localStorage.setItem("amountId" + id,itemAmount);
	setPrice(id);
}
//sets values if theyre empty when page loads,sets base elements
//placement of text will be standardized with one function and IDs if possible
function pageLoad(){
	for(i = 0;i<savedValues.length;i++){
		console.log(i);
		if ( !localStorage.getItem(savedValues[i].name)) {
		localStorage.setItem(savedValues[i].name, savedValues[i].value);
		}
	}
	for(i=0;i<5;i++){
		setPrice(i);
	}
	clockFunction();
}
//adds points per every tick (100ms),values are divided by 10 to symbolize per second increases
function tick() {
	geekAmount += Math.pow(((((1*amountId1) + (3*amountId2))/10)*amountId3),0.95+(amountId4/20));
    document.getElementById("amountDisplay").innerHTML = (Number(geekAmount).toFixed(2));
}
function saveTick() {
	localStorage.setItem("geekAmount", geekAmount);
}

// taken from w3schools
function clockFunction() {
  var countDownDate = new Date("Apr 1, 2026 22:00:00").getTime();
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("uiClock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("uiClock").innerHTML = "It's never coming";
  }
}
setInterval(clockFunction,1000);
//resets values
function reset() {
	for(i = 0;i<savedValues.length-1;i++){
		localStorage.setItem(savedValues[i].name, savedValues[i].value);
		eval("amountId" + i + '= ' + savedValues[i+1].value + ';');
	}
	for(i = 0;i<savedValues.length;i++){
		localStorage.setItem(savedValues[i].name, savedValues[i].value);
	}
	geekAmount = 0;
    document.getElementById("amountDisplay").innerHTML = (Number(geekAmount).toFixed(2));
	for(i=0;i<5;i++){
		setPrice(i);
	}
}
//saves the game
//also adds a span element to signify that game has indeed been saved,so users know page is responding
/*
//"I WILL RETURN!",says the save function,knowing damn well I won't be adding the ultimate save string any time soon
function save(){
	clearTimeout(saveSpanTimeout);
	saveSpanTimeout = setTimeout(deleteSpanText,5000);
	localStorage.setItem("geekAmount", geekAmount);
	for (i=0;i<5;i++){
		console.log(eval("amountId"+i));
		localStorage.setItem(savedValues[i].name,eval("amountId"+i));
	}
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
*/
//picks random news ticker content from array,matches with length from second array to make animation length. works by deleting and adding new spans for smooth transition experience and so it doesnt change mid-transition (took a while to fix,even though its a simple concept,I guess it took a moment to realize)
//I should really just merge the arrays into one single array that has objects storing both the content and length (or just content,length can be calculated). leaving for fix later,sorry future me
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
	  "BREAKING NEWS - Local kebab shop reportedly using non-standard and even human meat in their products! SIA GeekKebab has been caught catching pigeons by students of Geek University,who state that they saw workers in the all too well-known outfit of GeekKebab using a bow to shoot the poor birds out of the sky. The avians were apparently stacked in a box and brought back to the fast food location through the back-door. However,more shocking is the confession of a former student who used to live on campus of Geek University,who has stated that GeekKebab used to offer a special discount for customers who brought in large batches of meat. The anonymous ex-student said as follows - 'I mean,it was horrible! I remember one time when a student went missing. Everyone walked past their dorm room and it smelled like shit,I mean like something was rotting in there. But then one day it just got...better. Quite the opposite happened at the kebab place however. The meat they put in the kebabs tasted so horrible for around a month. One of my friends who I dont talk to anymore was rrally hyped about going and he paid next to nothing when he visited it for some reason. I stopped going after that,it gave me a bad vibe.'",
	  "'And also if you could stop writing 'death to pedophiles' on all the whiteboards,that would be great. Promoting violence is so vulgar.' 'But don't all pedophiles deserve to die?' 'Nonsense! Nobody deserves to die.' 'How peaceful of you...'",
	  "I can write whatever I want here so I'll recommend a game to actually play (we both know this is a shit project that I'm doing to maybe have a home-grown clicker game for playing at school,so the quality is so-so). Have you heard of...drumroll please...Class of '09? It's so peak. Please play it if you haven't. The humor is quite vulgar but it's peak. Very very peak. Nicole is the best,death to the desciple of Epstein,Mr.Counselor.",
	  "'Uhhhh...nonāc Neretas krustcelēs,neskaties atpakaļ. Also hellhive iznāks pēc 3 sekundēm. If I see one more limboegg reference I'm cancelling all hellhive development,creating a situation where limboegg can't exist.' - Aimens 'Netanyahu' Vēveris",
	  "The UI update is coming very soon,infact it's actually bundled together with another product that's gonna come out soon,sort of a 2 in 1 deal. The UI update is coming packaged with Hellhive and LimboEgg 3. This has been confirmed by Aimens Vēveris,who mentioned that his favorite part of development was writing Limboegg 3's story.",
	  "Freude, schöner Götterfunken, Tochter aus Elysium, Wir betreten feuertrunken, Himmlische, den Heiligtum. Deine Zauber binden wieder, Was die Mode streng geteilt, Alle Menschen werden Brüder, Wo dein sanfter Flügel weilt.  Seid umschlungen Millionen! Diesen Kuß der ganzen Welt! Brüder - überm Sternenzelt Muß ein lieber Vater wohnen.  Wem der große Wurf gelungen, Eines Freundes Freund zu sein, Wer ein holdes Weib errungen, Mische seinen Jubel ein! Ja - wer auch nur eine Seele Sein nennt auf dem Erdenrund! Und wer's nie gekonnt, der stehle Weinend sich aus diesem Bund! ",
	  "Drei Pfeile zerspalten wie Blitze die Nacht Wo bist du, du Lump, der den Freund umgebracht? National? National? National? So schreist du der nur sich selbst anerkennt Uns alle beschimpft und Verräter nennt National? Dich Lüge trifft der erste Strahl Flieg, Pfeil, triff, Hammer Rote Fahnen, wehet ins Land Eiserne Front! Eiserne Front! Eiserne Front! Flieg, Pfeil, triff, Hammer unsrеr Hand Flieg, Pfeil, triff, Hammer Rotе Fahnen, wehet ins Land Eiserne Front! Eiserne Front! Eiserne Front! Flieg, Pfeil, triff, Hammer unsrer Hand Drei Pfeile zerspalten wie Blitze die Nacht Wo bist du, du Schuft, der den Diebstahl gemacht? Sozialist? Sozialist? Sozialist? So nennst du dich, der mit den Reichen paktiert Dem Hohenzollernsohn hast du dich alliiert Sozialist? Dich Lüge trifft der zweite Strahl Flieg, Pfeil, triff, Hammer Rote Fahnen, wehet ins Land Eiserne Front! Eiserne Front! Eiserne Front! Flieg, Pfeil, triff, Hammer unsrer Hand Flieg, Pfeil, triff, Hammer Rote Fahnen, wehet ins Land Eiserne Front! Eiserne Front! Eiserne Front! Flieg, Pfeil, triff, Hammer unsrer Hand Drei Pfeile zerspalten wie Blitze die Nacht Wo bist du, du Pest, die sich ausgedacht? Pg! Pg! Pg! Du dienst nur als Vorspann dem Schlotbaron Er zahlt dir dicke Gelder, Million um Million Pg! Dich Lüge trifft der dritte Strahl Flieg, Pfeil, triff, Hammer Rote Fahnen, wehet ins Land Eiserne Front! Eiserne Front! Eiserne Front! Flieg, Pfeil, triff, Hammer unsrer Hand Flieg, Pfeil, triff, Hammer Rote Fahnen, wehet ins Land Eiserne Front! Eiserne Front! Eiserne Front! Flieg, Pfeil, triff, Hammer unsrer Hand"
	];
	let newsRandomElement = Math.floor(Math.random() * news.length);
	let wordCount = news[newsRandomElement].length/8;
	if(wordCount < 20){
		wordCount += 10;
	}
	console.log(news[newsRandomElement]);
	console.log(wordCount);
	document.getElementById("textScroll").innerHTML = news[newsRandomElement];
	document.getElementById("textScroll").style.animationDuration = (wordCount + "s");
	document.getElementById("textScroll").style.transform = "translateX(-100%)";
	setTimeout(newNewsPicker,Number(wordCount) * 1000);
}
function changeMenuItem(name){
	const menus = document.querySelectorAll(".changeableMenu");
	for(i = 0;i<menus.length;i++){
		if(menus[i] !== document.getElementById(name+"Menu")){
			menus[i].style.visibility = "hidden";
		}
	}
	if(document.getElementById(name+"Menu").style.visibility == "hidden"){
			document.getElementById(name+"Menu").style.visibility = "visible";
		}
		else{
		document.getElementById(name+"Menu").style.visibility = "hidden";
	}
}
newNewsPicker();
//setInterval(save,60000);
setInterval(saveTick,1000);
//Thank you,but we were occupied by the bad saving logic for 10 long years,and we have not forgotten how terrible that is.