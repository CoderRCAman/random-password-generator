
function GeneratePassword( passwordLength){
  var keyList = "ABCDEFabcdefGHIJKghijkLMNOPlmnopQRSTUVqrstuvWXYZWXYZ1234567890*&^%$#@!~-*+;<>"
   var passGen ="" ;
   for(var i=0;i<passwordLength;++i) {
      passGen += keyList.charAt(Math.floor(Math.random()*keyList.length)) ;
   }
   document.passGen.output.value = passGen ;
}
