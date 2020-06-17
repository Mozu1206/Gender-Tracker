var div;
var showingCanvas;
var currentIndex = 0;

// variables for drawing
var c;
var drawing;

// Variables for sound
var sound;
var mic, body, btn;
var bodyColor = 0;

//variables for genderbar
var slider;
var numberofslider = 0;
var genderbar;
var gender;


//variables for ballsize
var pressed = 0,
    keepX, keepY,
    size, keepsize,
    a = 0,
    ballsize,
    ballsizescore = '';


//variables for balldis
var
    pressed_2 = 0,
    keepX1_2, keepY1_2,
    keepX2, keepY2,
    ball = 100,
    count = 0,
    dis = '';

// variables for submit
var submitBot, button, smileyImg, buttoncount = 0;

// function preload(){
//     smileyImg = loadImage("noseImg/binary_smiley.png");

// }

function setup() {
    myCanvas = createCanvas(550, 550);
    myCanvas.parent('leftbod');
    background(255);
    myCanvas.hide();
    showingCanvas = false;
    div = createDiv("<div class='connect bolder'>Connect with friends and the world around you on Facebook.</div><div class='leftbar'><img src='https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851565_602269956474188_918638970_n.png' alt='' class='iconwrap fb1'/><div class='fb1'><span class='rowtext'>See photos and updates</span><span class='rowtext2 fb1'>from friends in News Feed</span></div></div><div class='leftbar'><img src='https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851585_216271631855613_2121533625_n.png' alt='' class='iconwrap fb1'/><div class='fb1'><span class='rowtext'>Share what's new</span><span class='rowtext2 fb1'>in your life on your timeline</span></div></div><div class='leftbar'><img src='https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851558_160351450817973_1678868765_n.png' alt='' class='iconwrap fb1'/><div class='fb1'><span class='rowtext'>Find more</span><span class='rowtext2 fb1'>of what you're looking for with graph search</span></div></div>");
    div.parent('leftbod');



    // setup for drawing
    c = color(0);
    drawing = createGraphics(550, 550);
    drawing.background('white');

    // Setup for Sound
    sound = createGraphics(550, 550);
    sound.background('white');
    mic = new p5.AudioIn();
    mic.start();
    body = select('body');
    btn = select('button');
    wrapper = select("#contentwrapper");
    //div.hide();
    //background(0);

    //setup for genderbar
    genderbar = createGraphics(550, 550);
    genderbar.background('white');


    //setup for ballsize
    ballsize = createGraphics(550, 550);
    ballsize.background('white');


    //setup for balldis
    balldis = createGraphics(550, 550);
    balldis.background('white');

    //submit for submitBot
    submitBot = createGraphics(550, 550);
    submitBot.background('white');
    // smileyImg = loadImage("noseImg/binary_smiley.png");
    smileyImg = createDiv("11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111110000000111111111111111111111111111111111111110000001111111111111111111111111111111<br>11111111111111111111111111111000000000001111111111111111111111111111111111000000000001111111111111111111111111111<br>11111111111111111111111111110000000000000111111111111111111111111111111110000000000000111111111111111111111111111<br>11111111111111111111111111110000000000000111111111111111111111111111111110000000000000111111111111111111111111111<br>11111111111111111111111111111000000000001111111111111111111111111111111111000000000001111111111111111111111111111<br>11111111111111111111111111111110000000111111111111111111111111111111111111110000001111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111100001111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111110000000011111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111110000000011111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111100001111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111000001111111111111111111111111111111111111111111111111111111111111111111111111000011111111111111<br>11111111111111111100000111111111111111111111111111111111111111111111111111111111111111111111110000111111111111111<br>11111111111111111110000011111111111111111111111111111111111111111111111111111111111111111111000011111111111111111<br>11111111111111111111000001111111111111111111111111111111111111111111111111111111111111111110000111111111111111111<br>11111111111111111111100000111111111111111111111111111111111111111111111111111111111111111000011111111111111111111<br>11111111111111111111111000001111111111111111111111111111111111111111111111111111111111100001111111111111111111111<br>11111111111111111111111100000111111111111111111111111111111111111111111111111111111110000011111111111111111111111<br>11111111111111111111111111100000111111111111111111111111111111111111111111111111110000011111111111111111111111111<br>11111111111111111111111111111100000111111111111111111111111111111111111111111110000011111111111111111111111111111<br>11111111111111111111111111111111000000001111111111111111111111111111111111111000001111111111111111111111111111111<br>11111111111111111111111111111111111100000001111111111111111111111111111110000000111111111111111111111111111111111<br>11111111111111111111111111111111111111110000000011111111111111111111000000011111111111111111111111111111111111111<br>11111111111111111111111111111111111111111110000000000000000000000000000111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111100000000000001111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111");
    smileyImg.parent('main');
    smileyImg.hide();

}


function draw() {
    micLevel = mic.getLevel();
    switch (currentIndex) {
        case 0:
            draw1();
            break;
        case 1:
            draw2();
            break;
        case 2:
            draw3();
            break;
        case 3:
            slider.remove();
            draw4();
            break;
        case 4:
            draw5();
            break;
        case 5:
            draw6();
            break;
        case 6:
            var bodySelect = select("#something");
            bodySelect.remove();
            smileyImg.show();
            button.remove();
            break;
    }
}

function draw1() {
    drawing.noStroke();
    drawing.fill(200);
    drawing.rect(0, 0, width, 25);
    drawing.fill(0);
    drawing.textSize(width * 0.01);
    drawing.text("Press the 'R', 'G' or 'B' to change the color. Draw your dreams", 10, 15);
    // if ((0 < mouseX && mouseX < 550) && (0 < mouseY && mouseY < 550) && mmouseIsPressed) {
    //     drawing.ellipse(mouseX, mouseY, 30);
    // }
    image(drawing, 0, 0);


}

function draw2() {
    if (micLevel > 0.1) {
        // and if the bodyColor is not maximum
        if (bodyColor < 120) {
            // Increase the bodyColor by 1
            bodyColor++;
        }
    }
    sound.fill(bodyColor * 2, bodyColor * 2, bodyColor * 2);
    sound.textSize(width * 0.02);
    sound.textAlign(CENTER, CENTER);

    sound.text("MAKE SOUND FOR YOU EMOTIONS!", 130, 130);


    wrapper.style('background', 'rgb( ' + bodyColor * 2 + ',' + bodyColor * 2 + ', ' + bodyColor * 2 + ')');
    // body.style('background', 'hsl(' + bodyColor + ', 60%, 60%)');
    image(sound, 0, 0);
    console.log(micLevel);
}

function draw3() {
    genderbar.background(255);
    genderbar.noStroke();
    genderbar.fill(0);
    genderbar.textSize(width * 0.01);
    genderbar.text("You know what to do...", 10, 15);


    if (numberofslider == 0) {
        slider = createSlider(0, 100);
        slider.position(width, 200);
        numberofslider++;
    }

    gender = slider.value();
    var a1 = map(gender, 0, 100, 100, 120);
    var a2 = map(gender, 0, 100, 100, 60);
    var b1 = map(gender, 0, 100, 70, 90);
    var b2 = map(gender, 0, 100, 120, 110);
    var b3 = map(gender, 0, 100, 90, 110);
    var b4 = map(gender, 0, 100, 120, 117);
    var b5 = map(gender, 0, 100, 90, 70);
    var b6 = map(gender, 0, 100, 230, 235);
    var b7 = map(gender, 0, 100, 70, 50);
    var b8 = map(gender, 0, 100, 230, 227);
    var c1 = map(gender, 0, 100, 210, 190);
    var c2 = map(gender, 0, 100, 230, 210);
    var c3 = map(gender, 0, 100, 230, 250);
    var c4 = map(gender, 0, 100, 210, 230);
    var d1 = map(gender, 0, 100, 100, 118);
    var d2 = map(gender, 0, 100, 40, 25);
    var e1 = map(gender, 0, 100, 160, 158);
    var g1 = map(gender, 0, 100, 100, 70);
    var g2 = map(gender, 0, 100, 200, 230);

    var gender_color1 = map(gender, 0, 100, 255, 0);
    var gender_color2 = map(gender, 0, 100, 0, 255);

    //non binary
    genderbar.fill(200);
    genderbar.fill(gender_color1, 0, gender_color2);
    genderbar.rect(a1 / 1.5, 90 / 1.5, a2 / 1.5, 135 / 1.5);
    genderbar.quad(b1 / 1.5, b2 / 1.5, b3 / 1.5, b4 / 1.5, b5 / 1.5, b6 / 1.5, b7 / 1.5, b8 / 1.5);
    genderbar.quad(c1 / 1.5, b4 / 1.5, c2 / 1.5, b2 / 1.5, c3 / 1.5, b8 / 1.5, c4 / 1.5, b6 / 1.5);
    genderbar.rect(d1 / 1.5, 220 / 1.5, d2 / 1.5, 160 / 1.5);
    genderbar.rect(e1 / 1.5, 220 / 1.5, d2 / 1.5, 160 / 1.5);
    genderbar.triangle(150 / 1.5, 50 / 1.5, g1 / 1.5, 270 / 1.5, g2 / 1.5, 270 / 1.5);
    genderbar.fill(255);
    genderbar.rect(120 / 1.5, 70 / 1.5, 60 / 1.5, 20 / 1.5);
    genderbar.fill(gender_color1, 0, gender_color2);
    genderbar.ellipse(150 / 1.5, 50 / 1.5, 60 / 1.5, 60 / 1.5);
    image(genderbar, 0, 0);
}

function draw4() {
    ballsize.background(255);
    // ballsize.fill(0);


    ballsize.fill(0);
    ballsize.textSize(width * 0.02);
    ballsize.text("How big?", 10, 15);
    ballsize.text(ballsizescore, 100, 20);

    image(ballsize, 0, 0);

    fill(0);
    if (pressed == 0) {
        size = map(mouseX, 0, 400, 10, 120);
        a = 0;
        ellipse(mouseX, mouseY, size + a);

        if ((0 < mouseX && mouseX < 550) && (0 < mouseY && mouseY < 550) && mouseIsPressed) {
            keepX = mouseX;
            keepY = mouseY;
            keepsize = size;
            pressed = 1;
            ballsizescore = keepsize;
        }
    } else {
        ellipse(keepX, keepY, keepsize);
    }
}

function draw5() {
    if (count == 0) {
        pressed_2 = 0;
        count++;
    }
    balldis.background(255);
    balldis.fill(0);
    balldis.textSize(width * 0.02);
    balldis.text("How's the placement?", 10, 15);
    balldis.text(dis, 150, 20);
    image(balldis, 0, 0);
    fill(0);
    if (pressed_2 == 0) {
        ellipse(mouseX, mouseY, ball);
    } else if (pressed_2 == 1) {
        ellipse(keepX1_2, keepY1_2, ball);
        ellipse(mouseX, mouseY, ball);
    } else if (pressed_2 == 2) {
        ellipse(keepX1_2, keepY1_2, ball);
        ellipse(keepX2, keepY2, ball);
        dis = dist(keepX1_2, keepY1_2, keepX2, keepY2);
    }
}

function draw6() {
    background(255);
    if (buttoncount == 0) {
        button = createButton('Submit! reveal gender.');
        button.position(submitBot.width, submitBot.height);
        button.mousePressed(newIndex);
        buttoncount++;
    }
    // image(submitBot, 0, 0);
}

function newIndex() {
    currentIndex++;
}

function draw7() {
    submitBot.image(smileyImg, 0, 0);
    image(submitBot, 0, 0);
}

function mouseClicked() {
    if ((0 < mouseX && mouseX < 550) && (0 < mouseY && mouseY < 550)) {
        if (pressed_2 == 0) {
            keepX1_2 = mouseX;
            keepY1_2 = mouseY;
            pressed_2 = 1;
        } else if (pressed_2 == 1) {
            keepX2 = mouseX;
            keepY2 = mouseY;
            pressed_2 = 2;
        }
    }
}
// function keyPressed() {
//     // selectAll() returns an array of elements with class donkey.
//     // If none are found, it returns an empty array [].
//     let donkeys = selectAll('.formbox');
//     // We can then iterate through the array and hide all the elements.
//     for (let i = 0; i < donkeys.length; i++) {
//       donkeys[i].hide();
//     }
//   }

function hideDiv() {
    div.hide();
}


function toggleCanvas() {
    if (showingCanvas) {
        // div.show();
        myCanvas.hide();
        console.log(showingCanvas);
        showingCanvas = !showingCanvas;
    } else {
        // div.hide();
        myCanvas.show();
        console.log(showingCanvas);
        showingCanvas = !showingCanvas;
    }
}

function mouseDragged() {
    if (currentIndex == 0) {
        drawing.strokeWeight(10);
        drawing.stroke(c);
        drawing.ellipse(mouseX, mouseY, 5);
    }

}

function keyPressed() {
    if (keyCode === ENTER) {
        currentIndex++;
        console.log(currentIndex);
    } else if (key == 'r' || key == 'R') {
        c = color(255, 0, 0);
    } else if (key == 'g' || key == 'G') {
        c = color(0, 255, 0);
    } else if (key == 'b' || key == 'B') {
        c = color(0, 0, 255);
    }
}
