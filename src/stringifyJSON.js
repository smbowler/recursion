// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj){
  if (obj === null){
    return "null"
  }
  if (typeof obj === "function"){
    return "undefined";
  }
  if (obj === undefined){
    return "undefined";
  }
  if (typeof obj === "number"){
    return obj.toString();
  }
  if (typeof obj === "boolean"){
    return obj.toString();
  }
  if (typeof obj === "string"){
    return '"'+obj+'"';
  }
  if (Array.isArray(obj)){
    var stringValues = obj.map(function(value){
      return stringifyJSON(value);
    })
    var stringGuts = stringValues.join(",")
    return "[" + stringGuts + "]";
  }
  var objGuts = [];
  for (var key in obj){
    if (typeof obj[key] === "function" || obj[key] === undefined){
      continue;
    }
    var keyString = '"'+ key.toString() + '"' + ":"
    objGuts.push(keyString + stringifyJSON(obj[key]));
  }
  return '{' + objGuts.join(",") + '}';
};
