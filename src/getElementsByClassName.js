// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className){
//   var matchingElements = [];
//   var findMatchingElements = function(element){
//     if (element.classList.contains(className)){
//       matchingElements.push(element);
//     }
//     for(var i = 0; i < element.children.length; i++) {
//       findMatchingElements(element.children[i]);
//     }
//   }
//   findMatchingElements(document.body);
//   return matchingElements;
// };


var getElementsByClassName = function(className){
  var findMatchingElements = function(element){
    var allMatchingElements = [];
    if (element.classList.contains(className)){
      allMatchingElements.push(element);
    }
    for(var i = 0; i < element.children.length; i++) {
      var childMatchingElements = findMatchingElements(element.children[i]);
      allMatchingElements = allMatchingElements.concat(childMatchingElements);
    }
    return allMatchingElements;
  }
  return findMatchingElements(document.body);
};
