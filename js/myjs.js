let myheader = document.querySelector("#header");

myHeader.addEventListener ('click', doSomething);

function doSomething (){
    //console.log("clicked");
    myheader.classlist.toggle('awesome');
}
