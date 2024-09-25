document.getElementById('donate-btn') .addEventListener('click', function (event){
    //console.log('add money button clicked');
    const addMoney = getInputField('amount')
    const addmyMoney = showvalue('wallet')  
    const adddonatedMoney = showvalue('noakhali-dona')   
    if(isNaN(addMoney)||addMoney<=0||addMoney>addmyMoney){
        alert('Failed to add money');
        document.getElementById('amount').value='';
        return;
    }
    else{
        my_modal_5.showModal();
        document.getElementById('amount').value='';
    }  
    const new_myMoney = addmyMoney - addMoney ;
    const new_donatedmoney = addMoney + adddonatedMoney; 
    document.getElementById('wallet').innerText = new_myMoney;
    document.getElementById('noakhali-dona').innerText = new_donatedmoney;
   
    //time display
    const div=document.createElement('div');
   div.classList.add('bg-white','border-solid','border-2','p-3','card','m-2' )
  div.innerHTML= `
    <p class="font-bold"> ${addMoney} Taka is Donated for famine-2021 at Feni,Bangladesh</p>
    <br>
   <p>${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'full' })}</p>
  `; 
  document.getElementById('history').appendChild(div);

})

 
document.getElementById('feni-btn') .addEventListener('click', function (event){
    //console.log('add money button clicked');
    const addMoney1 = getInputField('amount1')
    const addmyMoney1 = showvalue('wallet')  
    const adddonatedMoney1 = showvalue('feni')   
    if(isNaN(addMoney1)||addMoney1<=0||addMoney1>addmyMoney1|| typeof addMoney1 !=='number' ){
        alert('Failed to add money');
        document.getElementById('amount1').value='';
        return;
    }
    else{
        my_modal_5.showModal();
        document.getElementById('amount1').value='';
    }   
    const new_myMoney1 = addmyMoney1 - addMoney1 ;
    const new_donatedmoney1 = addMoney1 + adddonatedMoney1; 
    document.getElementById('wallet').innerText = new_myMoney1;
    document.getElementById('feni').innerText = new_donatedmoney1; 

       //time display
       const div=document.createElement('div');
       div.classList.add('bg-white','border-solid','border-2','p-3','card','m-2' )
      div.innerHTML= `
        <p class="font-bold"> ${addMoney1} Taka is Donated for Flood Relief at Feni,Bangladesh</p>
        <br>
       <p>${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'full' })}</p>
      `; 
      document.getElementById('history').appendChild(div);

})
document.getElementById('aid-btn') .addEventListener('click', function (event){
    //console.log('add money button clicked');
    const addMoney2 = getInputField('amount2')
    const addmyMoney2 = showvalue('wallet')  
    const adddonatedMoney2 = showvalue('aid')   
    if(isNaN(addMoney2)||addMoney2<=0||addMoney2>addmyMoney2|| typeof addMoney2 !=='number' ){
        alert('Failed to add money');
        document.getElementById('amount2').value='';
        return;
       
    }
    else{
        my_modal_5.showModal();
        document.getElementById('amount2').value='';
    }   
    const new_myMoney2 = addmyMoney2 - addMoney2 ;
    const new_donatedmoney2 = addMoney2 + adddonatedMoney2; 
    document.getElementById('wallet').innerText = new_myMoney2;
    document.getElementById('aid').innerText = new_donatedmoney2; 

       //time display
       const div=document.createElement('div');
       div.classList.add('bg-white','border-solid','border-2','p-3','card' , 'm-2')
      div.innerHTML= `
        <p class="font-bold"> ${addMoney2} Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh</p>
        <br>
       <p>${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'full' })}</p>
      `; 
      document.getElementById('history').appendChild(div);

})
 