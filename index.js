// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name)
}
function destructivelyPrependCat(name){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(name){
    var newArray= [...cats];
    newArray.push(name)
    return newArray
}
function prependCat(name){
    var newArray1=[...cats];
    newArray1.unshift(name)
    return newArray1
}
function removeLastCat(name) {
  var newArray2 = [...cats];
  newArray2.pop(name);
  return newArray2;
}
function removeFirstCat(name) {
  var newArray3 = [...cats];
  newArray3.shift(name);
  return newArray3;
}