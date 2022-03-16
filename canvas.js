
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//vertical lines
for(let x=0;x<=c.width;x+=5)
{
    ctx.moveTo(x, 0);
    ctx.lineTo(x,c.height);
    ctx.stroke();
    


}
//ctx.moveTo(0, 0);
//ctx.lineTo(200, 100);
//ctx.stroke();
console.log(c.height);
console.log(c.width);
