background(55, 55, 55);

//hair back
fill(122, 81, 32);
noStroke();
rect(145, 190, 50, 160);
rect(305, 190, 50, 160);

//hoodie body
fill(230, 220, 225);
noStroke();
rect(170, 330, 157, 90);
beginShape();
vertex(170, 330);
bezierVertex(155, 325, 150, 330, 140, 350);
bezierVertex(157, 360, 160, 355, 170, 360);
endShape();
beginShape();
vertex(325, 330);
bezierVertex(340, 325, 345, 330, 355, 350);
bezierVertex(350, 355, 335, 370, 325, 360);
endShape();
rect(140, 350, 30, 70);
rect(325, 350, 30, 70);

//hoodie shade
fill(180, 180, 180);
noStroke();
ellipse(197, 323, 60);
ellipse(297, 323, 60);
beginShape();
vertex(210, 330);
bezierVertex(240, 360, 260, 360, 290, 310);
bezierVertex(280, 400, 220, 400, 210, 325);
endShape();

//hoodie
fill(230, 220, 225);
ellipse(200, 320, 60);
ellipse(300, 320, 60);

//neck
fill(226, 191, 156);
noStroke();
rect(220, 300, 60, 50);
ellipse(250, 350, 60, 10);

//hoodie
fill(230, 220, 225);
noStroke();
beginShape();
vertex(210, 310);
bezierVertex(240, 360, 260, 360, 290, 310);
bezierVertex(280, 400, 220, 400, 210, 310);
endShape();

//head
fill(246, 206, 168);
noStroke();
ellipse(250, 200, 200, 225);

//holes for hoodie
fill(130, 130, 130);
ellipse(210, 330, 10);
ellipse(290, 330, 10);
fill(200, 200, 200);
ellipse(210, 330, 5);
ellipse(290, 330, 5);

//string for hoodie
fill(190, 190, 190);
rect(209, 330, 3, 70);
rect(289, 330, 3, 70);

//birthmark
fill(122, 90, 40);
ellipse(325, 210, 5);

//hair
push();
translate(200, 140);
rotate(0.8);
fill(122, 81, 32);
ellipse(0, 0, 70, 150);
pop();
push();
translate(300, 140);
rotate(2.4);
fill(122, 81, 32);
ellipse(0, 0, 70, 150);
pop();

//ears
fill(246, 206, 168);
ellipse(150, 213, 22, 35);
ellipse(350, 214, 22, 35);
beginShape();
fill(226, 191, 156);
vertex(150, 205);
bezierVertex(140, 210, 150, 215, 150, 225);
endShape();
beginShape();
fill(226, 191, 156);
vertex(350, 205);
bezierVertex(360, 210, 350, 215, 350, 225);
endShape();

//eyes
fill(0, 0, 0);
ellipse(210, 208, 40);
ellipse(290, 208, 40);

fill(255, 255, 255);
ellipse(210, 210, 40);
ellipse(290, 210, 40);
fill(26, 95, 0);
ellipse(207, 210, 25);
ellipse(287, 210, 25);
fill(0, 0, 0);
ellipse(207, 210, 15);
ellipse(287, 210, 15);
fill(255, 255, 255);
ellipse(210, 204, 9);
ellipse(290, 204, 9);

//nose
fill(226, 191, 156);
stroke(226, 191, 156);
strokeWeight(3);
line(248, 220, 240, 250);
line(240, 250, 256, 250);

//mouth
noFill();
beginShape();
vertex(220, 270);
bezierVertex(230, 280, 270, 280, 280, 270);
endShape();
fill(246, 206, 168);
beginShape();
vertex(275, 265);
bezierVertex(274, 270, 282, 275, 286, 275);
endShape();
