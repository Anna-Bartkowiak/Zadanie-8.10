var zadanie810 = document.getElementsByClassName('button'); 
console.log(/*'zmienna zadanie810: '+ */zadanie810);
console.log('ilosc elementow w zm. zadanie810: ' + zadanie810.length);

var tyleRazyIleElementow = zadanie810.length;
console.log('zmienna tyleRazyIleElementow = zadanie810.length: ' + tyleRazyIleElementow);
for (var i=0; i<tyleRazyIleElementow; i++) {
	alert(zadanie810[i].innerText);
}