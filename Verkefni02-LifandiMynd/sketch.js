// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(1535,750);
    fill(0);
    framerate(10);
}
  function draw(){
      background(0,0,240);
    //teiknaEldfjall
      beginShape();
      fill(15)
      vertex(765-200,750);
      vertex(765-50,300);
      vertex(765+50,300);
      vertex(765+200,750);
      endShape();

      beginShape();
      fill(15);
      vertex(765.5-50,300);
      vertex(765.5,300-200);
      vertex(765.5+50,300)
      endShape();
}
