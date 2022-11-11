
function Logout(){
    alert("Are you sure to exit the website and back to Home Page ? ");
}

var w=document.querySelectorAll('.wrong');
for(var i=0 ; i<w.length;i++){
    w[i].style.color="red";
}
var r=document.querySelectorAll('.right');
for(var i=0 ; i<r.length;i++){
    r[i].style.color="green";
}