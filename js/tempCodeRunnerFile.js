document.getElementById('feni-btn') .addEventListener('click', function (event){
    //console.log('add money button clicked');
    const addMoney1 = getInputField('amount1')
    const addmyMoney1 = showvalue('wallet')  
    const adddonatedMoney1 = showvalue('feni')   
    if(isNaN(addMoney1)||addMoney1<=0||addMoney1>addmyMoney1|| typeof addMoney1 !=='number' ){
        alert('Failed to add money');
        return;
    }
    else{
        my_modal_5.showModal();
    }   
    const new_myMoney1 = addmyMoney1 - addMoney1 ;
    const new_donatedmoney1 = addMoney1 + adddonatedMoney1; 
    document.getElementById('wallet').innerText = new_myMoney1;
    document.getElementById('feni').innerText = new_donatedmoney1; 

})