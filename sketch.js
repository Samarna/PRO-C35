function setup() {
  createCanvas(windowWidth,windowHeight);
  form1 = new Form();
}
function preload(){
  bg = loadImage("background.jpg");
}
function draw() {
  background(255,255,255);  
  form1.display();
  image(bg,0,0,windowWidth,windowHeight);
}