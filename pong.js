// CANVAS ELEMENTOS
const canvas = document.getElementById("pong");

// CANVAS CONTEXTO
const ctx = canvas.getContext('2d');

// BOLA
const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 7,
    velocityX : 5,
    velocityY : 5,
    speed : 7,
    color : "RED"
}

// RAQUETE ESQUERDA
const user = {
    x : 25, // left side of canvas
    y : (canvas.height - 100)/2, // -100 the height of paddle
    width : 13,
    height : 80,
    score : 0,
    color : "GREY"
}

// RAQUETE DIREITA
const com = {
    x : canvas.width - 25, // - width of paddle
    y : (canvas.height - 100)/2, // -100 the height of paddle
    width : 13,
    height : 80,
    score : 0,
    color : "GREY"
}

// CENTRO
const net = {
    x : (canvas.width - 2)/2,
    y : 8,
    height : 10,
    width : 12,
    color : "GREY"
}

// RETANGULO
function drawRect(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

// CIRCULO
function drawArc(x, y, r, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}

// MOUSE
canvas.addEventListener("mousemove", getMousePos);

function getMousePos(evt){
    let rect = canvas.getBoundingClientRect();
    
    user.y = evt.clientY - rect.top - user.height/2;
}

// RESET BOLA PONTOS
function resetBall(){
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.velocityX = -ball.velocityX;
    ball.speed = 7;
}

// CENTRO2
function drawNet(){
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

// TEXTO
function drawText(text,x,y){
    ctx.fillStyle = "#FFF";
    ctx.font = "42px fantasy";
    ctx.fillText(text, x, y);
}

// DESENHOS
function render(){
    
    // CANVAS
    drawRect(0, 0, canvas.width, canvas.height, "#000");
    
    // SCORE ESQUERDA
    drawText(user.score,canvas.width/4,canvas.height/5);
    
    // SCORE DIREITA
    drawText(com.score,3*canvas.width/4,canvas.height/5);
    
    // CENTRO
    drawNet();
    
    // DESENHO RAQUETE ESQUERDA
    drawRect(user.x, user.y, user.width, user.height, user.color);
    
    // DESENHO RAQUETE DIREITA
    drawRect(com.x, com.y, com.width, com.height, com.color);
    
    // DESENHO BOLA
    drawArc(ball.x, ball.y, ball.radius, ball.color);
}
function game(){
    update();
    render();
}

let framePerSecond = 50;
let loop = setInterval(game,1000/framePerSecond);

