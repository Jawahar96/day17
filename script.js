let element=document.createElement('pg');
element1=document.getElementById('class');

element.setAttribute('class','settimeout');
document.body.append(element);


setTimeout(()=>{
    
    console.log("10");
    

},1000)

setTimeout(()=>{
   
    console.log("9");

},2000)

setTimeout(()=>{

    console.log("8");

},3000)

setTimeout(()=>{
    
    console.log("7");

},4000)
setTimeout(()=>{
  
    console.log("6");

},5000)

setTimeout(()=>{
 
    console.log("5");

},6000)

setTimeout(()=>{
   
    console.log("4");

},7000)

setTimeout(()=>{
    
    console.log("3");
    

},8000)

setTimeout(()=>{
    
    console.log("2");
    
},9000)



setTimeout(function setTimeout(){
    
    element.innerHTML="Happy Independance day";
    

},9000)


