var lastscroll=0
var navbar=document.getElementsByClassName("header")[0];
window.addEventListener("scroll",function(){
    var scrollTop=window.pageYOffset || document 
    .documentElement.scrollTop;
    if(scrollTop>lastscroll)
    {
        navbar.style.top="-90px";
    }else{
        navbar.style.top="0px";
    }
    lastscroll=scrollTop
})


function displaynone()
{
    document.getElementById("notice").style.display="none";
}