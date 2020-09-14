//select all boxes in game board
var gameBoxes = document.getElementsByClassName('box');


//will rely on a count so there needs to be a global variable of count
var count = 0;


//create an addListen event and click handler for all boxes (easy to grab using getElementsByClassName)
//need to map over the array of elements and add an onclick functionality to them all
var addClickEvent = function(elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    //successfully added onclick functionality to each
    //now need to change the function here to a define function that add a specific text to that box
    //write a function that is passed in to the addEventListener
    //the function needs to only allow one text node in each box
    element.addEventListener('click',  function() {
      //since the first play is always X - x is placed when the count is even
      if (this.innerText.length !== 0) {
       return;
      }
      if (count % 2 == 0) {
        //to add a X to the box, the box should probably have a text node (input box of some sort that can be dynamically changed)
        var x = document.createTextNode('X');
        this.append(x);
        count++;
      } else {  //o is placed when the count is odd
        var o = document.createTextNode('O');
        this.append(o);
        count++;
      }
    });
  }
}(gameBoxes);






//successfuly grabbed all the boxes
//now loop through the array of html elements and add an event listen to each
