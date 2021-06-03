var canvas=document.getElementById("my");
var ctx=canvas.getContext("2d");
var color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(400,400,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mycanvas);
function mycanvas(e)
{
    xpos=e.clientX-canvas.offsetLeft;
    ypos=e.clientY-canvas.offsetTop;
    circle(xpos,ypos);
}
function circle(xpos,ypos)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(xpos,ypos,40,0,2*Math.PI);
    ctx.stroke(); 
}