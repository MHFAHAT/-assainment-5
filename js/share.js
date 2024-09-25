function getInputField (id){
    const inputValue = document.getElementById(id).value;
    const addMoney = parseFloat(inputValue);  
    return addMoney;
}
function showvalue(id){
    const inputValue = document.getElementById(id).innerText;
    const addMoney = parseFloat(inputValue);  
    return addMoney;
}
  const btn_clour =document.getElementById('History-btn');
  const btn_clour2 =document.getElementById(' donate-btn');
  const card = document.getElementById('cards'); 
  const detail = document.getElementById('history');

  btn_clour2.addEventListener('click' ,function (){
    btn_clour2.classList.add( "bg-donate-green")
    btn_clour.classList.remove("bg-donate-green") 
    card.classList.remove("hidden")
    detail.classList.add("hidden")
     
})
btn_clour.addEventListener('click' ,function (){
   
     btn_clour.classList.add( "bg-donate-green")
     btn_clour2.classList.remove("bg-donate-green")  
     card.classList.add("hidden")
     detail.classList.remove("hidden"); 
      
   

})
