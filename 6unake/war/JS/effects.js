/**
 * Javascript-ga lehel muudatuste tegemine vastusena kasutaja tegevustele*
 */

function mUp(obj) // lisa minu riiulisse nupp
{

	if (obj.value === "Eemalda minu riiulist!") {
		obj.style.backgroundColor = "#A2CC00";
		obj.value = "Lisa minu riiulisse!";
		window.alert("Raamat riiulist eemaldatud.");
	} else {
		obj.value = "Eemalda minu riiulist!";
		obj.style.backgroundColor = "#D94A38";
		window.alert("Raamat riiulisse lisatud.");

	}
}

function contact(obj) // ümbrikupildi suuruse muutmine
{
	obj.style.width = "110px";
}

function contactOut(obj) {
	obj.style.width = "100px";
}

function searchFocus(x) // otsi välja taustavärvi muutmine
{
	x.style.background = "#FFCC66";
}

function loseFocus(x) // otsi välja taustavärvi muutmine
{
	x.style.background = "white";
}

function searchOver(obj) // otsingunupp ja logo
{
	obj.style.color = "black";

}

function searchOut(obj) // otsingunupp
{
	obj.style.color = "white";

}

function bookOver(obj) // raamatu pilt
{
	obj.style.border = "1px solid black";

}

function bookOut(obj) // raamatu pilt
{
	obj.style.border = "1px solid transparent";

}

function picChanger() // headeri piltide vahetamine
{

	setInterval("picChanger2()", 10000);
}

function picChanger2() {
	if (document.getElementById("pic").src.split("/").pop() === "kook.jpg") {
		document.getElementById("pic").src = "images/salat.jpg";
	} else {
		document.getElementById("pic").src = "images/kook.jpg";
	}

}
