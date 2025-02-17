/*function signature/sample */
function cashOut( money ) {
   if (typeof money !=="number" || money <0 ) {
      return "Invalid";
   }
   const cashOutCharg =  money * 1.75 /100;
   return cashOutCharg;
}

console.log(cashOut(-350));