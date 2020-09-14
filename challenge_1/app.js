
// each block should have an onclick ability where it adds an X or an O
// game always starts with X
// should maybe keep a count and if the count is even we add an X on click
// if it is odd we add an O
// after each onClick, we need to check for a winner
// to check for a winner
//   need to go over all the rows and columns and check if there are three in a row
//   so if row1Col1 has an x/o we need to check if the rest of the row has an x/o the same col has an
//   x/o or if next row col+ & next next row col++ has an x/o
//if any of them do, we declare a winner and the game ends


//create an addListen event and click handler for all boxes (easy to grab using getElementsByClassName)


var gameBoxes = document.getElementsByClassName('box');

var addClickEvent = function(elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    console.log(element);
    element.addEventListener('click', function() {
      alert('You clicked me!');
    });
  }
}(gameBoxes);

//successfuly grabbed all the boxes
//now loop through the array of html elements and add an event listen to each
console.log(addClickEvent);
console.log(gameBoxes);