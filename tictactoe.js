let box1=document.getElementById("1");
let box2=document.getElementById("2");
let box3=document.getElementById("3");
let box4=document.getElementById("4");
let box5=document.getElementById("5");
let box6=document.getElementById("6");
let box7=document.getElementById("7");
let box8=document.getElementById("8");
let box9=document.getElementById("9");
let res=document.getElementById("res")
let btn=document.getElementById("btn")
let item=1
let clearBoard=()=>{
    box1.textContent=""
    box2.textContent="" 
    box3.textContent=""
    box4.textContent=""
    box5.textContent=""
    box6.textContent=""
    box7.textContent=""
    box8.textContent=""
    box9.textContent=""
}
btn.onclick=()=>{
    item=1
    res.textContent=""
    clearBoard()
}
let players={
    0:"player1",
    1:"player2"
}
let player1=document.getElementById("player1")
let player2=document.getElementById("player2")
player1.addEventListener("change",(event)=>{
    players[0]=player1.value
})
player2.addEventListener("change",(event)=>{
    players[1]=player2.value
})
let onCheck=()=>{
    if((box1.textContent==box2.textContent && box2.textContent==box3.textContent && box3.textContent!="")
        ||(box4.textContent==box5.textContent && box5.textContent==box6.textContent && box6.textContent!="")|| 
        (box7.textContent==box8.textContent && box8.textContent==box9.textContent && box9.textContent!="")|| 
        (box1.textContent==box4.textContent && box4.textContent==box7.textContent && box7.textContent!="")||
        (box2.textContent==box5.textContent && box5.textContent==box8.textContent && box8.textContent!="")||
        (box3.textContent==box6.textContent && box6.textContent==box9.textContent && box9.textContent!="")||
        (box1.textContent==box5.textContent && box5.textContent==box9.textContent && box9.textContent!="")||
        (box3.textContent==box5.textContent && box5.textContent==box7.textContent && box7.textContent!="")){
            if(item==0){
                res.style.color="green";
                res.textContent=players[0]+" Win!!"
            }
            else{
                res.style.color="green";
                res.textContent=players[1]+" Win!!"
            }
            return true
    }
    else if(box1.textContent!="" && box2.textContent!="" && box3.textContent!=""&& box4.textContent!=""
    && box5.textContent!=""&& box6.textContent!=""&& box7.textContent!=""&& box8.textContent!=""
    && box9.textContent!=""){
        res.style.color="yellow";
        res.textContent="It's a Tie!!"
        return true
    }
    return false
}
let click=(box)=>{
    let head=document.createElement("h1")
    if(box.textContent!=""){
        res.style.color="red";
        res.textContent="The box is Already filled!!"
        return
    }
    if(onCheck()===true){
        return
    }
    res.textContent=""
    if(item==1){
        box.textContent=""
        head.textContent="X"
        item=0
    }
    else{
        box.textContent=""
        head.textContent="O"
        item=1
    }
    head.style.fontSize="50px";
    box.appendChild(head)
} 
box1.onclick=()=>{
    click(box1)
    onCheck()
}
box2.onclick=()=>{
    click(box2)
    onCheck()
}
box3.onclick=()=>{
    click(box3)
    onCheck()
}
box4.onclick=()=>{
    click(box4)
    onCheck()
}
box5.onclick=()=>{
    click(box5)
    onCheck()
}
box6.onclick=()=>{
    click(box6)
    onCheck()
}
box7.onclick=()=>{
    click(box7)
    onCheck()
}
box8.onclick=()=>{
    click(box8)
    onCheck()
}
box9.onclick=()=>{
    click(box9)
    onCheck()
}
