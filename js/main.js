// // /  2 - mashiq __________________________________________________

var arryMetodic = ["jazz"," blues"]
console.log(arryMetodic);

arryMetodic.push("rock-n-rol")
console.log(arryMetodic);

arryMetodic.splice(1,1, "classic")
console.log(arryMetodic);

arryMetodic.splice(0,1, )
console.log(arryMetodic);

arryMetodic.unshift("rap", "reggae")
console.log(arryMetodic);


function upText(ismlar) {
 var resalt = []

 for (var name of ismlar) {
  var slice = name.split("")
  slice[0] = slice[0].toUpperCase()
  resalt.push(slice.join(""))

 }
 console.log(resalt);
}

console.log(upText(arryMetodic));