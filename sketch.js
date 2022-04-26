function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  
  numObjects = map(mouseX, 0, width, 10, 100);
  
  for(let i = 0; i <= numObjects; i++){
    let r = map(i, 0, numObjects, 0, 360);
    let size = map(i, 0, numObjects, 500, width);
    
    noFill();
    push();
    translate(width/2, height/2);
    
    rotate(radians(r));
    rect(0,0,size,size);
    pop();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  setup()

}