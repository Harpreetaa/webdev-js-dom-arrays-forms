// IIFE
(function(){
    // code starts here
    document.getElementById("myHeading").innerHTML = "harpreet";
    document.querySelector("nav ul li").setAttribute("class", "currentPage");
    document.getElementById("myTestEvent").onclick = function(){
        console.info("hi");
    }

    // code ends here
})(); 
