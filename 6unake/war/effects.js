/**
 Javascript-ga lehel muudatuste tegemine vastusena kasutaja tegevustele* 
 */

function mUp(obj) //lisa minu riiulisse nupp
{

 if (obj.value === "Eemalda minu riiulist!" ){
 		obj.style.backgroundColor="#A2CC00";
        obj.value = "Lisa minu riiulisse!";
}
 else{
        obj.value = "Eemalda minu riiulist!";
        obj.style.backgroundColor="#D94A38";

}
}

function contact(obj) //ümbrikupildi suuruse muutmine
{
 		obj.style.width="110px";
}

function contactOut(obj)
{
 		obj.style.width="100px";
}



function searchFocus(x) //otsi välja taustavärvi muutmine
{
x.style.background="yellow";
}

function loseFocus(x) //otsi välja taustavärvi muutmine
{
x.style.background="white";
}