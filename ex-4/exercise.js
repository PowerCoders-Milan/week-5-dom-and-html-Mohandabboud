/* function removecolor() {
    let parent = document.querySelector("#colorSelect");
    let child = parent.querySelector("option");
    console.log(child)
    parent.removeChild(child);

} */

/* function removecolor() {
    let parent = document.querySelector("#colorSelect");
   
    if (select = parent[0]) {
    parent.removeChild(parent[0]);}
    else {parent.removeChild(parent[1]);}
} */

function removecolor() {
    let element = document.querySelector("#colorSelect option:checked");
    if (element) element.remove();

}

