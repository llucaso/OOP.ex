function Telefon(marka, cena, kolor, bateria) {
	this.marka = marka;	
	this.cena = cena;
	this.kolor = kolor;
	this.bateria = bateria;
};

Telefon.prototype.chargingCounter = function() {
	var czasLadowania = this.bateria / 240;
	console.log("Czas ładowania to " + czasLadowania + " jednostek.");
};

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
};

var iPhone6s = new Telefon("Apple", 2250, "srebrny", 3500);	
var SamsungGalaxyS6 = new Telefon("Samsung", 1700, "czerwony", 2500);
var OnePlusOne = new Telefon("OnePlus", 500, "czarny", 1500);

iPhone6s.printInfo();
iPhone6s.chargingCounter();