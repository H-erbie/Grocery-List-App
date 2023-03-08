var inbox = document.querySelector('.inbox');
var add = document.querySelector('.add');
var err = document.querySelector('.err');
var groce = document.querySelector('.groce');
var txts = document.querySelectorAll('.text');
var newDivs = document.querySelectorAll('.groce-item');


    inbox.value = '';
    //display input with 'Enter key'
    inbox.addEventListener('keydown', (event) => {
        if(event.key == 'Enter'){
            if(inbox.value == ''){
            err.innerHTML = 'Inbox is empty!';
            inbox.style.outline = '1px solid red';
            err.style.color = 'red';
        }
            else{
                addGroce(inbox.value);
            }
        }
    })
    //display input when add button is clicked
    add.addEventListener('click', () => {
        if(inbox.value == ''){
            err.innerHTML = 'Inbox is empty!';
            inbox.style.outline = '1px solid red';
            err.style.color = 'red';
        }
            else{
                addGroce(inbox.value);
            }
    })

addGroce = (num) => {
    err.innerHTML = '';
    inbox.style.outline = 'none';
    var newDiv = document.createElement('div');
    var butCon = document.createElement('div');
    var txt = document.createElement('div');
    var del = document.createElement('i');
    var edd = document.createElement('i');
    txt.textContent = '- ' + num;
    newDiv.className = 'groce-item';
    butCon.className = 'but-con';
    txt.className = 'text';
    del.className = 'fa-sharp fa-solid fa-trash';
    edd.className = 'fa-solid fa-pen';
    newDiv.appendChild(txt);
    butCon.appendChild(del);
    butCon.appendChild(edd)
    groce.appendChild(newDiv);
    newDiv.appendChild(butCon);
    inbox.value = '';
    
    //click on completed list to strike through
    newDiv.addEventListener('click', () => {
        if(txt.style.textDecoration != 'line-through'){
            txt.style.textDecoration = 'line-through'
        }
        else{
            txt.style.textDecoration = 'none'
        }
    })
    var dels = document.querySelectorAll('.del');
    //click to delete
    del.addEventListener('click', () => {
    if(txt.style.textDecoration == 'line-through'){
        txt.style.textDecoration = 'line-through'
    }
    else if(txt.style.textDecoration != 'line-through'){
        txt.style.textDecoration = 'none'
    }
    newDiv.remove();
})
    //click to edit
    edd.addEventListener('click', () => {
        var splc = txt.textContent.slice(2);
            inbox.value = splc;
            newDiv.remove();
    })
}

