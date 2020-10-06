var Box = document.getElementById("box")
var Bt_left = document.getElementById("left")
var Bt_right = document.getElementById("right")
var jsLI=document.getElementsByTagName("li")
var jsPic=document.getElementById("pic")
jsLI[0].style.backgroundColor = "red"
var currontPage = 1
function start() {
    currontPage++
    change()}
var t = setInterval(start,1000)
function change() {
    if (currontPage==5){
        currontPage=1
    }else if (currontPage==0){
        currontPage=4
    }
    jsPic.src="imgs/"+currontPage+".jpg"
    //将小点颜色重新变为灰色
    for (var i=0;i<jsLI.length;i++){
        jsLI[i].style.backgroundColor = "#aaa"
    }
    jsLI[currontPage - 1].style.backgroundColor = "red"//将当前小点变成红色
}
//鼠标移动事件
Box.addEventListener("mouseover",overFun)
function overFun() {
    //停止计时器
    clearInterval(t)
    Bt_left.style.display="block"
    Bt_right.style.display="block"
}
Box.addEventListener("mouseout",outFun)
function outFun() {
    //重启计时器
    t=setInterval(start,1000)
    Bt_left.style.display="none"
    Bt_right.style.display="none"
}
//鼠标移到箭头上，箭头颜色变深
Bt_left.addEventListener("mouseover",deep)
Bt_right.addEventListener("mouseover",deep)
function deep() {
    Bt_right.style.backgroundColor="rgba(0,0,0,0.8)"
    Bt_left.style.backgroundColor="rgba(0,0,0,0.8)"
}
//鼠标移到箭头上，箭头颜色变浅
Bt_left.addEventListener("mouseout",lightColour)
Bt_right.addEventListener("mouseout",lightColour)
function lightColour() {
    Bt_right.style.backgroundColor="rgba(0,0,0,0.2)"
    Bt_left.style.backgroundColor="rgba(0,0,0,0.2)"
}
//箭头点击事件
Bt_right.addEventListener("click",function () {
    currontPage++
    change()
})
Bt_left.addEventListener("click",function () {
    currontPage--
    change()
})
//鼠标移动到小圆点切换图片
for (var n =0;n<jsLI.length;n++) {
    jsLI[n].Index = n + 1
    jsLI[n].addEventListener("mouseover", function () {
        currontPage = parseInt(this.Index)
        change()
    })

}