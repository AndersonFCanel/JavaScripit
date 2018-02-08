var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {

    lis[i].addEventListener("click", function() {

        console.log(this.textContent);
    });
}


/*
var ul = document.querySelector("ul");

ul.addEventListener("click", function(event) {

    console.log(event.target.textContent);
});
 */
