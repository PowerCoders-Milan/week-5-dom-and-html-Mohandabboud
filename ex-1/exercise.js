// Use this function that is linked to the button to change the background


  function set_background() {
    var p1 = document.querySelectorAll("p")[0];
    p1.style.backgroundColor = "red";
    var p2 = document.querySelectorAll("p")[1];
    p2.style.backgroundColor = "blue";
    var p3 = document.querySelectorAll("p")[2];
    p3.style.backgroundColor = "green";
    } 

    // 2nd way

    function set_background() {
        var p1 = document.getElementsByTagName("p")[0];
        p1.style.backgroundColor = "yellow";
        console.log(p1);
        var p2 = document.getElementsByTagName("p")[1];
        console.log(p2.textContent);
        p2.style.backgroundColor = "pink";
        console.log(p2);
        var p3 = document.getElementsByTagName("p")[2];
        p3.style.backgroundColor = "red";
        console.log(p3);
        }
