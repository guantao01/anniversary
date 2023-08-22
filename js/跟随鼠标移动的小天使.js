document.addEventListener("mousemove",function(e){
    // 获取e.pageX,e.pageY
    let x = e.pageX
    let y = e.pageY
    document.querySelector("#img_angel").style.left = (x-40) + "px"
    document.querySelector("#img_angel").style.top = (y-35) + "px"
})
document.addEventListener("contextmenu",function(e){
    e.preventDefault()  //阻止默认行为(阻止右键菜单出现)
})
document.addEventListener("selectstart",function(e){
    e.preventDefault()  //阻止文档中的文字被选中
})