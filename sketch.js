const saveButton = document.querySelector
("button#save");
const colorInput = document.querySelector
("input#color");
console.log(colorInput);

let paintColor="#bb1b1d";
colorInput.value = paintColor;



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

}

function draw(){}



function mouseDragged(){
    stroke (paintColor);
    strokeWeight(4);
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