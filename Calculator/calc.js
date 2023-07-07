const input=document.getElementById('input'),equal=document.getElementById('equal'),clear=document.getElementById('clear'),
allButton=document.querySelectorAll('button');
for (let button of allButton) {
    button.addEventListener('click', (e)=>{
        let buttonText=e.target.innerText;
        if(buttonText=='X') buttonText = 'x' 
        input.value+=buttonText 
        equal.addEventListener('click',()=>{ inputs = input.value;
            if (inputs.includes('x'))inputs =inputs.replace('x', '*')
            input.value = eval(inputs);
        })
    })
}
clear.addEventListener('click',()=>input.value=' ')