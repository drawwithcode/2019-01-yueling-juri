function setup() {
  createCanvas(windowWidth,windowHeight)
  background(3,28,252);
  angleMode(DEGREES);

  frameRate(12);
}

function draw() {

  //line
  push();
  noFill();
  stroke('#f9b693');
  translate(width/2,height/2);

  //rotate
  stroke('#f9b693');
  line(100,-100,cos(frameCount*3)*200,sin(frameCount*3)*200);
  pop();

  if (frameCount == 240) {
    noLoop();
  }
}
