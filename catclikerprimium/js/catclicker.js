// clear the screen for testing
document.body.innerHTML = '';

var nums = ["gato1","gato2","gato3","gato4","gato5"];
var counters = [0,0,0,0,0];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];
    var counter = 0;
    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy,counter) {
        return function() {          

            var img = document.createElement("img");
            img.setAttribute("src", "images/"+numCopy+".jpg");
            img.setAttribute("height", "768");
            img.setAttribute("width", "1024");
            img.setAttribute("alt", "Super Cat");
            img.addEventListener('click', (function(counter) {
                 return function() {   
                    counter++;
                    var profile = document.getElementById("profile");
                    profile.textContent = "counter: "+counter;  
                }            
            })(counter));      
            var cat = document.getElementById("cat");
            while (cat.firstChild) cat.removeChild(cat.firstChild);
            cat.appendChild(img);
            var profile = document.getElementById("profile");
            profile.textContent = "";  

        };
    })(num, counter));

    document.body.appendChild(elem);
};
