var currentstep=0
tab(currentstep)
function tab(n){
    var tabs=document.getElementsByClassName("tab");
    var prevbtn=document.getElementById("prevBtn");
    //var nextbtn=document.getElementById("nextBtn");
    tabs[n].style.display="block";
    if(n==0){
        prevbtn.style.display="none";
    }
    else{
        prevbtn.style.display="inline";
    }
    if(n==(tab.length-1)){
        document.getElementById("nextBtn").innerHTML="Submit"
    }
    else{
        document.getElementById("nextBtn").innerHTML="NEXT"
    }
}
function next(n){
    var tabs=document.getElementsByClassName("tab");
    if(n==1 && !valid()) return false;
    tabs[currentstep].style.display="none";
    currentstep=currentstep+n;
    if(currentstep>=tabs.length-1){
        document.getElementById("regform").submit()
        return false
    }
    tab(currentstep)
}
function valid(){
    var tabs=document.getElementsByClassName("tab");
    var input=tabs[currentstep].getElementsByTagName("input");
    var valid=true,i;
for(i=0;i<input.length;i++){
    if(input[i].value==""){
        valid=false;
        input[i].className+="invalid";
    }
}
if(valid){
        console.log("success")
}
else{
    console.log("false")
}
return valid;
}