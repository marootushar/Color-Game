var numberOfColors = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

// To initalize the game.
function init(){
    setUpSquares();
    setUpModeButtons();
    reset();
}

//Event listeners for the squares.
function setUpSquares(){
    for(var i=0; i<squares.length; i++){
        squares[i].addEventListener("click",function(){
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "PLAY AGAIN?"
            }
            else{
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        })
    }
}

// Event listeners for mode buttons.
function setUpModeButtons(){
    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            for(var j=0; j<modeButtons.length; j++){
                modeButtons[j].classList.remove("selected");
            }
            this.classList.add("selected");
            if(this.textContent === "EASY"){
                numberOfColors=3;
            }
            else if(this.textContent === "MEDIUM"){
                numberOfColors=6;
            }
            else{
                numberOfColors=9;
            }
            reset();
        });
    }
}
// To reset the game.
function reset(){
    colors = generateRandomColors(numberOfColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    if(resetButton.textContent === "PLAY AGAIN?"){
        resetButton.textContent = "NEW COLORS";
    }
    messageDisplay.textContent = "";
}

// Event listener for reset button.
resetButton.addEventListener("click",function(){
    reset();
})

// To change color of all the squares.
function changeColors(color){
    // Changing colors of all the squares.
    for(i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

// To pick a radom color.
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

//To generate random color for all the squares.
function generateRandomColors(n){
    var arr = [];
    for(i=0; i<n; i++)
    {
        var red = Math.floor(Math.random()*256);
        var blue = Math.floor(Math.random()*256);
        var green = Math.floor(Math.random()*256);
        arr[i] = "rgb(" + red + ", " + green + ", " + blue + ")";
    }
    return arr;
}
