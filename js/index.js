let total = 0;

function add(target){
    const selectedItemContainer = document.getElementById('selected-items')
    const applyBtn = document.getElementById('apply-btn')
    const makePurchesBtn = document.getElementById('make-purches-btn')

    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    
    total = parseInt(total) + parseInt(price);
  
    const firstTotal = document.getElementById('total');
    firstTotal.innerText=total.toFixed(2);

    if(total>=200){
        applyBtn.disabled = false;
        makePurchesBtn.disabled = false;

    }
    else if(total>0){
        makePurchesBtn.disabled = false;
    }

}

function reload(){
    location.reload();
}