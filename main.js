var canvas= document.getElementById ("canvas1")
var ctx= canvas.getContext("2d")
car_width = 100; 
car_height = 180; 
background_image = "parkingLot.jpg" 
car_image = "car2.png"; 
car_x = 10; 
car_y = 10;

function add(){
background_imgTag = new Image(); 
background_imgTag.onload = uploadBackground; 
background_imgTag.src = background_image;

car_imgTag = new Image(); 
car_imgTag.onload = uploadCar(); 
car_imgTag.src = car_image;
}

function uploadBackground(){
ctx.drawImage(background_imgTag, 0, 0, 800, 600);
}

function uploadCar(){
ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
var keypress= e.keyCode;
console.log (keypress);

if (keypress=="37"){
left();
}
if (keypress=="38"){
up();
}

if (keypress=="39"){
right();
}
if (keypress=="40"){
down();
}
}

function up(){
if (car_y>=0){
car_y=car_y-10;
console.log (car_y);
uploadBackground();
uploadCar();
}
}

function down(){
if (car_y<=500){
car_y=car_y+10;
console.log (car_y);
uploadBackground();
uploadCar();
}
}

function left(){
if (car_x>=0){
car_x=car_x-10;
console.log (car_x);
uploadBackground();
uploadCar();
}
}

function right(){
if (car_x<=700){
car_x=car_x+10;
console.log (car_x);
uploadBackground();
uploadCar();
}
}
