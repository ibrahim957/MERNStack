
let input = document.getElementById("myInput");
let date= document.getElementById("date");
let list = document.getElementById("list");

let to_do_list =[];

let setting = {weekday:"long",month:"short",day:"numeric"}
let today = new Date();

date.innerHTML=today.toLocaleDateString("en-US",setting)

function newElement()
{
    let txt=input.value;
    if(txt.lenght!=0)
        addToDo(txt)
	else
		alert("You must write something!");
    input.value="";
}

function addToDo(txt){
	let obj={
	data : `${txt}`,
	strike : 0
	};
    to_do_list.push(obj);

    let position = "beforeend"
    let text=`  <li class="item" >
                    <p>
                        ${txt}
						<button type="button" class="pull-right" onclick="edit(${to_do_list.length-1})"> Edit </button>
                        <button type="button" class="link pull-right" onclick="delete_item(${to_do_list.length-1})">  <i class="fa fa-remove"></i></button>
                        <button type="button" class="link pull-right" onclick="check_item(${to_do_list.length-1})"> <i class="fa fa-strikethrough"></i> </button>
                    </p>
                </li>`
        list.insertAdjacentHTML(position,text)
}

function rebuild()
{
    let position = "beforeend"
    let text = ''
    list.innerHTML = ''
    to_do_list.forEach(function(item,index){
		if(item.strike == 0)
			text= `  <li class="item" >
                       <p>
                            ${item.data}
							<button type="button" class="pull-right" onclick="edit(${index})"> Edit </button>
                            <button type="button" class="pull-right" onclick="delete_item(${index})">  <i class="fa fa-remove"></i></button>
                            <button type="button" class="pull-right" onclick="check_item(${index})"> <i class="fa fa-strikethrough"></i> </button>
                        </p>
                    </li>`
		else
			text= `  <li class="item" >
                        <p>
                            <del>${item.data}</del>
							<button type="button" class="pull-right" onclick="edit(${index})"> Edit </button>
                            <button type="button" class="pull-right" onclick="delete_item(${index})">  <i class="fa fa-remove"></i></button>
                            <button type="button" class="pull-right" onclick="check_item(${index})"> <i class="fa fa-strikethrough"></i> </button>
                        </p>
                    </li>`
        list.insertAdjacentHTML(position,text)
      })
}

function delete_item(index)
{ 
    to_do_list.splice(index,1);
    rebuild();
}

function check_item(index)
{
    
	to_do_list[index].strike= !to_do_list[index].strike;
	rebuild();
}



document.addEventListener("keyup",function(){
    if(event.keyCode==13){
        let txt=input.value;
        if(txt)
            addToDo(txt)
		else
			alert("You must write something!");
        input.value="";
    }

})
function edit(index)
{
	input.value=`${to_do_list[index].data}`;
	delete_item(index)
}

