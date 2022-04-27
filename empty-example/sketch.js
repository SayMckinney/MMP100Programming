var size1=10 //variable for the size of the speeding ellipse and rectangle.

//--------------------------------------------------------------------------------------------------------

function setup() { //setup the page with the following commands
createCanvas(700,700);  // create canvas with a dimension of 700 by 700 pixels
}

function draw() { //creates the elements
  if (mouseIsPressed) { //if user clicks on screen : create nighttime elements

//NIGHTTIME
   background("#6600cc"); //Night sky background : Purple
    
    //MOON
         fill("#ffff99"); //Color of the Moon
         noStroke(); //Moon has no outline
        ellipse(120,120,200,200); //Moon
        fill("#6600cc"); //Color of the hidden ellipse
         noStroke(); //hidden ellipse has no outline
        ellipse(150,120,200,200); //Crescent Shape
            

            //Stars
                //Star 1
                fill("#ffffff") //Text color : White
                star(400,400,45, 80, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 2
                star(200,100,30, 70, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 3
                star(550,100,30, 70, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 4
                star(70,500,30, 70, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 5
                star(600,500,20, 60, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 6
                star(260,250,10, 30, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 7
                star(200,400,10, 30, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 8
                star(90,300,10, 30, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 9
                star(275,525,10, 30, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 10
                star(450,250,10, 30, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 11
                star(600,290,10, 70, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }

                //Star 12
                star(370,110,90, 10, 5);
                function star(x, y, radius1, radius2, npoints) {
                let angle = TWO_PI / npoints;
                let halfAngle = angle / 2.0;
                beginShape();
                for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
                }
                endShape(CLOSE);
                }


//NIGHTTIME TEXT
        fill("#ffffff") //Text color : White
        textSize(50); //Size of the text is 60 pixels.
        textFont('Helvetica'); //Font of the text is Helvetica.
        textStyle('italic'); //text is in italic.
        text('Good Night! Sleep Tight!',700/10,630); //Good Night Sleep Tight text during the night.;
        fill("#ff0000") //ellipse cursor color : Red
        ellipse(mouseX,mouseY,30,30) //ellipse cursor
  } else {


//if user doesn't click on screen or releases the mouse : create Daytime elements
//DAYTIME
    background("#ccffff"); //morning sky background : Sky Blue

     //SUN
        fill("#ffff99"); //Color of the Sun  
        noStroke(); //Sun has no outline
        ellipse(50,50,300,300); //Sun
        fill("#ff6600"); //color of the speeding ellipse : Orange
        ellipse(random(0,width),random(0,height),size1,size1); //speeding ellipse
        fill("#00ff00"); //color of the speeding rectangle : Green
        rect(random(0,width),random(0,height),size1,size1); //speeding rectangle
        size1 = size1+5; //increase the size of both shapes by 5 everytime the Draw function reruns
        if (size1 >= 100) { //the shapes stop increasing at 100
            size1 = 0; //if size goes past 100, size is zero.
        } else { //otherwise
            size1 = size1+5; //keep increasing then!
        }

//DAYTIME TEXT
        fill("#ff0000") //Text color : Red
        textSize(60); //Size of the text is 60 pixels.
        textFont('Comic Sans MS'); //Font of the text is Comic Sans MS.
        textStyle('italic'); //text is in italic.
        text('Rise & Shine',700/4,630); //Rise & Shine text during the morning.;
        fill("#000000") //ellipse cursor color : Black
        ellipse(mouseX,mouseY,30,30) //ellipse cursor
  }
}