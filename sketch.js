const saveButton = document.querySelector
("button#save");
const colorInput = document.querySelector
("input#color");
console.log(colorInput);

let paintColor="#bb1b1d";
colorInput.value = paintColor;

// you cant access slider before it is initialized in setup
// I also renamed the variable
let sliderValue = 1;

function setup() {
    const canvas = createCanvas(500,500);
    canvas.parent(`sketch`);
    background(255);

    saveButton.addEventListener("click",() => {
        console.log("clicked");
        save("image.png");
    });
colorInput.addEventListener("input", () => {
    paintColor=colorInput.value;
    console.log(colorInput.value);
})

    // I set the default value of the slider to sliderValue
slider = createSlider(0, 255, sliderValue);
slider.position (860,100);
slider.size(400);
    // to set the sliderValue variable to the value
    // coming from the slider you have to use the input method.
    slider.input(function() {
        sliderValue = this.value();
    });

}

function draw(){}




function mouseDragged(){
    stroke(paintColor);
    // you had a typo here
    // it is strokeWeight
    strokeWeight(sliderValue);
    line (pmouseX, pmouseY, mouseX, mouseY);
    for (let i = 0; i<100; i++) {

    }
}

function buttonHandler() {
    save("image.png");
}

function keyPressed() {
    if (key===`s`){
        save (`image.png`);
    }
}