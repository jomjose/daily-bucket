var w=window.innerWidth,
    h=window.innerHeight,
    p=[],
    margin=1,
    delta=4,
    radius=10;
c.width=w;
c.height=h;
var ctx=c.getContext('2d');
var last=h/2;
for(var i=0; i<w; i+=margin){
  p.push(last=last+(Math.random()*margin*2-margin)|0);
}
ctx.fillStyle='rgba(0, 0, 0, 0.1)';
ctx.strokeStyle='rgba(0, 0, 200, 0.1)';
function render(){
  ctx.fillRect(0, 0, w, h);
  for(var i=0; i<p.length; ++i){
    ctx.beginPath();
    ctx.arc(i*margin, p[i], radius, 0, Math.PI*2);
    ctx.stroke();
    ctx.closePath();
  }
}
function anim(){
  window.requestAnimationFrame(anim);
  var last=p[0];
  for(var i=0; i<p.length; ++i){
    last=p[i]=last+(Math.random()*delta)-delta/2;
  }
  render();
}
anim();
