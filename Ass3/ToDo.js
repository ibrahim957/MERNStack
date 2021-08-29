
let input = document.getElementById("myInput");
let date= document.getElementById("date");
let list = document.getElementById("list");

let to_do_list =[],ind=0;

let setting = {weekday:"long",month:"short",day:"numeric"}
let today = new Date();

date.innerHTML=today.toLocaleDateString("en-US",setting)

var listt = document.querySelector('ul');
listt.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement()
{
    let txt=input.value;
    if(txt)
        addToDo(txt)
    input.value="";
}

function addToDo(txt){
    to_do_list.push(txt);
    
    let position = "beforeend"
    let text=`  <li class="li">
                    <p>${txt}
                    <button type="close" onclick="delete_item(${to_do_list.length-1})"> Delete </button></p>
                </li>`
        list.insertAdjacentHTML(position,text)
}

function rebuild()
{
    let position = "beforeend"
    list.innerHTML = ''
    to_do_list.forEach(function(item,index){
        let text=`  <li class="item">
                    <p>${item}
                    <button type="close" onclick="delete_item(${index})"> Delete </button></p>
                </li>`
        list.insertAdjacentHTML(position,text)
      })
}

function delete_item(index)
{
    to_do_list.splice(index,1);
    rebuild()
}



document.addEventListener("keyup",function(){
    if(event.keyCode==13){
        let txt=input.value;
        if(txt)
            addToDo(txt)
        input.value="";
    }

})

