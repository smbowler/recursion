// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    var result = [];

  // Starting node
  Node = Node || document.body;

  // check for className of starting node // add to results if available 
  if(Node.className === "targetClassName"){
    return true;
  }

  // Check node children for className
  if(Node.children){
    for(var i = 0, count = Node.children.length; i < count; i++){
      // recursively call on children and check for className
      result = result.concat(getElementsByClassName(className, Node.children[i]) );
    }
  }
  return result;
};
