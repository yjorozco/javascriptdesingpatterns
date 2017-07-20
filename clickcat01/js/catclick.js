

var elem = document.getElementById('cat');
var counter = 0;
var counter1 = 0;
var catName="saladino";
var catName1="saladino";
elem.addEventListener('click', function(){
   counter++;
   var counterElement = document.getElementById('click1');
   var name = document.getElementById('name1');
   counterElement.innerHTML = counter;
   name.innerHTML = catName;
}, false);

var elem1 = document.getElementById('cat2');

elem1.addEventListener('click', function(){
   counter1++;
   var counterElement1 = document.getElementById('click2');
   var name1 = document.getElementById('name2');
   counterElement1.innerHTML = counter1;
   name1.innerHTML = catName1;
}, false);


