

    //fish1
    var centerX = 123;
    var centerY = 92;
    var bodyLength = 93;
    var bodyHeight = 51;
    var bodyColor = color(162, 0, 255);
    
    var centerYBubble1Fish1 = 92;
    var centerYBubble2Fish1 = 95;
    var centerYBubble3Fish1 = 98;
    
    
    
    //fish2
    
    var centerX1 = 200;
    var centerY1 = 120;
    var bodyLength1 = 93;
    var bodyHeight1 = 51;
    var bodyColor1 = color(145, 52, 199);
    
    
    
    //fish3
    
    var centerX2 = 147;
    var centerY2 = 180;
    var bodyLength2 = 93;
    var bodyHeight2 = 51;
    var bodyColor2 = color(155, 25, 230);
    
    //fish4
    
    
    var centerX3 = 247;
    var centerY3 = 243;
    var bodyLength3 = 93;
    var bodyHeight3 = 51;
    var bodyColor3 = color(155, 25, 230);
    
    var centerYBubble1Fish4= 243;
    var centerYBubble2Fish4 = 246;
    var centerYBubble3Fish4 = 250;
    
    
    // fish 5
    var centerX4 = 326;
    var centerY4 = 305;
    var bodyLength4 = 93;
    var bodyHeight4 = 51;
    var bodyColor4 = color(155, 25, 230);
    
    //fish6
    
    var centerX5 = 258;
    var centerY5 = 361;
    var bodyLength5 = 93;
    var bodyHeight5 = 51;
    var bodyColor5 = color(155, 25, 230);
    
    
  
    // start draw
     var draw = function()    {
    background(89, 216, 255);
    
    
               
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(204, 38, 204);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

    
    //fish2
    
    noStroke();
    fill(196, 45, 196);
    // body
    ellipse(centerX1, centerY1, bodyLength1, bodyHeight1);
    // tail
    var tailWidth = bodyLength1 /4;
    var tailHeight = bodyHeight1 /2;
    triangle(centerX1 -bodyLength1 /2, centerY1,
             centerX1 -bodyLength1 /2-tailWidth, centerY1-tailHeight,
             centerX1 -bodyLength1 /2-tailWidth, centerY1+tailHeight);
    // eye
    fill(158, 14, 158);
    ellipse(centerX1 +bodyLength1 /4, centerY1, bodyHeight1 /5, bodyHeight1 /5);
    
    
    
    //fish3
    
    noStroke();
    fill(196, 45, 196);
    // body
    ellipse(centerX2, centerY2, bodyLength2, bodyHeight2);
    // tail
    var tailWidth = bodyLength2 /4;
    var tailHeight = bodyHeight2 /2;
    triangle(centerX2 -bodyLength2 /2, centerY2,
             centerX2 -bodyLength2 /2-tailWidth, centerY2-tailHeight,
             centerX2 -bodyLength2 /2-tailWidth, centerY2+tailHeight);
    // eye
    fill(158, 14, 158);
    ellipse(centerX2 +bodyLength2 /4, centerY2, bodyHeight2 /5, bodyHeight2 /5);
    
    
    
    //fish4 
    
    noStroke();
    fill(196, 45, 196);
    // body
    ellipse(centerX3, centerY3, bodyLength3, bodyHeight3);
    // tail
    var tailWidth = bodyLength3 /4;
    var tailHeight = bodyHeight3 /2;
    triangle(centerX3 -bodyLength3 /2, centerY3,
             centerX3 -bodyLength3 /2-tailWidth, centerY3-tailHeight,
             centerX3 -bodyLength3 /2-tailWidth, centerY3+tailHeight);
    // eye
    fill(158, 14, 158);
    ellipse(centerX3 +bodyLength3 /4, centerY3, bodyHeight3 /5, bodyHeight3 /5);
    
    
    
    //fish5
    
    noStroke();
    fill(196, 45, 196);
    // body
    ellipse(centerX4, centerY4, bodyLength4, bodyHeight4);
    // tail
    var tailWidth = bodyLength4 /4;
    var tailHeight = bodyHeight4 /2;
    triangle(centerX4 -bodyLength4 /2, centerY4,
             centerX4 -bodyLength4 /2-tailWidth, centerY4-tailHeight,
             centerX4 -bodyLength4 /2-tailWidth, centerY4+tailHeight);
    // eye
    fill(158, 14, 158);
    ellipse(centerX4 +bodyLength4 /4, centerY4, bodyHeight4 /5, bodyHeight4 /5);
    
    
    
        //fish6
    
    noStroke();
    fill(196, 45, 196);
    // body
    ellipse(centerX5, centerY5, bodyLength5, bodyHeight5);
    // tail
    var tailWidth = bodyLength5 /4;
    var tailHeight = bodyHeight5 /2;
    triangle(centerX5 -bodyLength5 /2, centerY5,
             centerX5 -bodyLength5 /2-tailWidth, centerY5-tailHeight,
             centerX5 -bodyLength5 /2-tailWidth, centerY5+tailHeight);
    // eye
    fill(158, 14, 158);
    ellipse(centerX5 +bodyLength5 /4, centerY5, bodyHeight5 /5, bodyHeight5 /5);
    
    
    

    
     noStroke();
    fill(196, 45, 196);
    // body
    ellipse(mouseX, mouseY, bodyLength5, bodyHeight5);
    // tail
    var tailWidth = bodyLength5 /4;
    var tailHeight = bodyHeight5 /2;
    triangle(mouseX -bodyLength5 /2, mouseY,
             mouseX -bodyLength5 /2-tailWidth, mouseY-tailHeight,
             mouseX -bodyLength5 /2-tailWidth, mouseY+tailHeight);
    // eye
    fill(158, 14, 158);
    ellipse(mouseX +bodyLength5 /4, mouseY, bodyHeight5 /5, bodyHeight5 /5);
    
    

    noStroke();
    fill(0, 255, 60);
    rect(10, 254,25,141,153);
    rect(323, 299,-27,124,242);
    rect(159, 381,25,141,153);
    rect(247, 315,14,159,153);
    
    fill(123, 116, 173);
    ellipse(10,350,148,135);
    fill(42, 40, 92);
    ellipse(46,310,20,20);
    fill(252, 40, 3);
    rect(42,334,38,48,64);
    fill(89, 216, 255);
    rect(53,334,32,47,23);
    
    fill(255, 255, 255);
    ellipse(centerX + 40,centerYBubble1Fish1,20,20);
     fill(255, 255, 255);
    ellipse(centerX + 40,centerYBubble2Fish1,20,20);
     fill(255, 255, 255);
    ellipse(centerX + 40,centerYBubble3Fish1,20,20);
    
    
     fill(255, 255, 255);
    ellipse(centerX3 + 40,centerYBubble1Fish4,20,20);
     fill(255, 255, 255);
    ellipse(centerX3 + 40,centerYBubble2Fish4,20,20);
     fill(255, 255, 255);
    ellipse(centerX3 + 40,centerYBubble3Fish4,20,20);
    
        centerYBubble1Fish1 = centerYBubble1Fish1 -1;
        centerYBubble2Fish1 = centerYBubble2Fish1 -1/2;
        centerYBubble3Fish1 = centerYBubble3Fish1 -1/4;
      
        
        centerYBubble1Fish4 = centerYBubble1Fish4 -1;
        centerYBubble2Fish4 = centerYBubble2Fish4 -1/2;
        centerYBubble3Fish4 = centerYBubble3Fish4 -1/4;
        
        
         centerX = centerX +1;
         centerX1 = centerX1 +1;
         centerX2 = centerX2 +1;
         centerX3 = centerX3 +1;
         centerX4 = centerX4 +1;
         centerX5 = centerX5 +1;
       
       
        
        
};
