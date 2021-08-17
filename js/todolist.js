if (localStorage.getItem("list")==null) {
    create({
        "id":[],
        "title": [],
        "desc":[]
    });
}else{
    refresh();
}
function create(obj){localStorage.setItem("list",JSON.stringify(obj))}

function refresh(){
    let data = localStorage.getItem("list");
    let object = JSON.parse(data)
    let len = object.id.length;
    let html = ""
    for(i=0;i<len;i++){
        html = html + `<div class="item">
            <p>${object.id[i]}. ${object.title[i]} &nbsp;-&nbsp; 
                <span>
                    ${object.desc[i]}
                </span>
            </p>
            <button class="btn-item" onclick="remove('${i}')">
                <i class="fas fa-times"></i>
            </button>
        </div>`;
    }
    document.getElementById('list').innerHTML = html;
}

function add(){
    let title = document.getElementById('formT').value;
    let desc  = document.getElementById('formD').value;
    
    document.getElementById('formT').value ="";
    document.getElementById('formD').value ="";

    let len = title.length;
    let space = false;
    for(i=0;i<len;i++){if(title[i]!==" "){space=true;}}
    
    if(title!="" && space){
        let data = localStorage.getItem("list");
        let object = JSON.parse(data)
        let len = object.id.length;
        //first
        if (len===0) {
            object.id.push(1);
            object.title.push(title);
            object.desc.push(desc);
        } else {
            object.id.push(len+1);
            object.title.push(title);
            object.desc.push(desc);  
        }
        create(object);
        refresh();
    }
}

function remove(count){
    let data = localStorage.getItem("list");
    let object = JSON.parse(data)
    let len = object.id.length;

    delete object.id[count];
    let newObj ={
        "id":[],
        "title":[],
        "desc":[]
    };
    find =false 

    for(i=0;i<len;i++){
        ID = object.id[i];
        TITLE = object.title[i];
        DESC = object.desc[i];
        if(object.id[i]!==undefined){
            if(!find){
                newObj.id.push(ID);
                newObj.title.push(TITLE);
                newObj.desc.push(DESC);
            }else{
                newObj.id.push(ID-1);
                newObj.title.push(TITLE);
                newObj.desc.push(DESC);
            }
        }
        else{
            find=true;
        }
    }
    create(newObj);
    refresh();
}

console.log(localStorage)