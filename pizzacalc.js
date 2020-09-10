document.write('<br> lieve de jong')
document.write('<br> klas MBIAO20A5')

document.write('<br>')

document.write('<br> prijs per stuk');
document.write('<br> pizza small : €5.50');
document.write('<br> pizza medium : €7.50');
document.write('<br> pizza large : €9.50');

document.write('<br>')


var piet = prompt ("hoeveel small pizza's wilt u bestellen");
var jan = prompt ("hoeveel medium pizza's wilt u bestellen");
var klaas = prompt ("hoeveel large pizza's wilt u bestellen");

const pricesmall = 5.50;
const pricemedium = 7.50;
const pricelarge = 9.50;

document.write('<br> u wilt totaal');

document.write("<br> u wilt " + piet+ " small pizza's ");
document.write("<br> u wilt " + jan + " medium pizza's ");
document.write("<br> u wilt " + klaas + " large pizza's "); 

document.write ('<br>') 

document.write ('<br> uw totaal bedrag =') 

var uitslagSMALL = piet * pricesmall;
var uitslagmedium = jan * pricemedium;
var uitslaglarge = klaas * pricelarge;
var totaal = uitslagSMALL + uitslagmedium + uitslaglarge


document.write('<br> betalen pizza small = €' + uitslagSMALL);
document.write('<br> betalen pizza medium = €' +  uitslagmedium);
document.write('<br> betalen pizza large = €' + uitslaglarge);

document.write ('<br>') 

document.write('<br> betalen totaal = €' + totaal);