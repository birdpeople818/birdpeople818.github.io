/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEYS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };
  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function handleKeyDown(event) {
    if (event.which === KEYS.LEFT) {
      console.log("left pressed");
      speedX = -5;
    }
    if (event.which === KEYS.UP) {
      console.log("up pressed");
      speedY = -5;
    }
    if (event.which === KEYS.RIGHT) {
      console.log("right pressed");
      speedX = 5;
    }
    if (event.which === KEYS.DOWN) {
      console.log("down pressed");
      speedY = 5;
    }
  }
  function handleKeyUp(event) {
    if (event.which === KEYS.LEFT) {
      console.log("left up");
      speedX = 0;
    }
    if (event.which === KEYS.UP) {
      console.log("up up");
      speedY = 0;
    }
    if (event.which === KEYS.RIGHT) {
      console.log("right up");
      speedX = 0;
    }
    if (event.which === KEYS.DOWN) {
      console.log("down up");
      speedY = 0;
    }
  }
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
   repositionGameItem()
   redrawGameItem() 

  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem() {
    positionX += speedX;
    positionY += speedY;
  }
  function redrawGameItem() {
    $("#walker").css("left", positionX);
    $("#walker").css("top", positionY);
  }

  
}
 