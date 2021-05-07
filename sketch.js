var peopleCount = 0;
function preload(){
  bg = loadImage("background.jpg");
} 
function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  form1 = new Form();
  form1.display();
  user = new User();
  user.getPeopleCount();
}
function draw() {
  background(255,255,255);  
  console.log(peopleCount);
  if(peopleCount){
    form1.display();
  }
  //image(bg,0,0,windowWidth,windowHeight);
}
