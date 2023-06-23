// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(increaseGreenByBlue);
  applyFilterNoBackground(reddify);
  applyFilterNoBackground(decreaseBlue);
  
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for (i = 0; i <= image.length - 1; i++){
    var currentArray = image[i];
    for (c = 0; c <= currentArray.length - 1; c++){
      var rgbString = currentArray[c];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      currentArray[c] = rgbString;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  backgroundColor = image[0][0];
  for (i = 0; i <= image.length - 1; i++){
    var currentArray = image[i];
    for (c = 0; c <= currentArray.length - 1; c++){
      var rgbString = currentArray[c];
      if (rgbString === backgroundColor){
      
      } else {
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        currentArray[c] = rgbString;
        }
      }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(num1){
  if (num1 < 0){
    return 0
  } else if (num1 > 255){
    return 255
  } else {
    return num1
  }
}

// TODO 3: Create reddify function
function reddify (param1){
  param1[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(array1){
  var reducedBlue = (array1[BLUE] - 50)
  array1[BLUE] = keepInBounds(reducedBlue);
}
function increaseGreenByBlue(array1){
  array1[GREEN] = keepInBounds(array1[GREEN] + array1[BLUE])
}

// CHALLENGE code goes below here
