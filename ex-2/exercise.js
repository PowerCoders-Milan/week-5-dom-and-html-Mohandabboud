function getAttributes() {
    var rel = document.querySelector("a").getAttribute("rel");
    var href = document.querySelector("a").getAttribute("href");
    var type = document.querySelector("a").getAttribute("type");
    var hreflang = document.querySelector("a").getAttribute("hreflang");
    var target = document.querySelector("a").getAttribute("target");
    console.log("The value of the rel attribute of the link is : " + rel +".");
    console.log("The value of the href attribute of the link is : " + href +".");
    console.log("The value of the type attribute of the link is : " + type+".");
    console.log("The value of the hreflang attribute of the link is : " + hreflang +".");
    console.log("The value of the target attribute of the link is : " + target +".");
}
