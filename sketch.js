const saveButton = document.querySelector
("button#save");
const colorInput = document.querySelector
("input#color");
console.log(colorInput);

let paintColor="#bb1b1d";
colorInput.value = paintColor;


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

    
slider = createSlider(0, 255, sliderValue);

    // to set the sliderValue variable to the value
    // coming from the slider you have to use the input method.
    slider.position (this.value);
slider.size(this.value);

slider.input(function() {
    sliderValue = this.value();
});
}

function draw(){}




function mouseDragged(){
    stroke(paintColor);
    
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