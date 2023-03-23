document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector("#submit").disabled=true;
    document.querySelector("#task").onkeyup=()=>{
        if(document.querySelector("#task").value.length>0){
            document.querySelector("#submit").disabled=false;
        }
        else{
            document.querySelector("#submit").disabled=true;
        }
    }
    let count=0;
    if(!localStorage.getItem('count')){
        localStorage.setItem('count',0)
    }
    function counter(){
        let count=localStorage.getItem('count');
        count++;
        document.querySelector("#countDisplay").innerHTML=count;
        localStorage.setItem('count',count);

    }
    document.querySelector("#count").onclick=counter;
    document.querySelector("#countDisplay").innerHTML=localStorage.getItem('count');
        
    
    
    
    
    document.querySelector("form").onsubmit=()=>{
        const task=document.querySelector("#task").value;
        const li=document.createElement("li");
        li.innerHTML=task;
        document.querySelector("#tasks").append(li);
        document.querySelector("#task").value="";
        document.querySelector("#submit").disabled=true;
        return false;
    }

})