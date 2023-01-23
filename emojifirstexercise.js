/*This emoji is a pretty common emoji that is rolling its' eyes at something, the expression is very neutral and it looks bored. */
background(255, 255, 255);

let x = 200;
let y = 250;
const sentence = "I'm a programmer 👩🏽‍💻";

// The body of the emoji, aka the face color and shape
fill(245, 210, 23);
ellipse(x, y, 250);

// The whites of the eyes
fill(255, 255, 255);
ellipse(x - 50, y - 20, 75);
ellipse(x + 50, y - 20, 75);

// The black pupils in the eyes
fill(0, 0, 0);
ellipse(x - 50, y - 40, 20);
ellipse(x + 50, y - 40, 20);

//the mouth
fill(80, 80, 80);
rect(x - 50, y + 40, 100, 20, 10);

//speech bubble
fill(255, 255, 255);
beginShape();
vertex(x + 100, y - 130);
vertex(x + 110, y - 150);
vertex(x + 30, y - 150);
bezierVertex(x - 10, y - 150, x - 10, y - 200, x + 30, y - 200);
vertex(x + 240, y - 200);
bezierVertex(x + 280, y - 200, x + 280, y - 150, x + 240, y - 150);
vertex(x + 130, y - 150);
endShape(CLOSE);

fill(0, 0, 0);
textSize(20);
text(sentence, 250, 80);
