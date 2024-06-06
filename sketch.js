var ang = PI/4;

function setup() {
    createCanvas(1000, 1000);

    //creating a slider that ranges from 0 to 2Pi(a full circle)
    //with initial value set to pi/4 that is 45 degrees
    slider = createSlider(0, TWO_PI,PI/4,0.01);
}

function draw() {
    background(48,25,52);
    ang = slider.value();
    var len = 200;
    stroke(255);
    translate(width * 0.5,height);
    branch(len);
}

function branch(len) {
    line(0, 0, 0, - len);
    translate(0,-len);
    if(len > 4){
        push();
        rotate(ang);
        branch(len * 0.7);
        pop();
        push();
        rotate(-ang);
        branch(len * 0.7);
        pop();
    }
}


