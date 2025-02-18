/*function signature/sample */
function  electionResult( votes ) {
   if (!Array.isArray(votes)) {
    return "Invalid"
   } 
   let mangoCount = 0;
   let bananaCount = 0;
   for (let vote of votes){
    if (vote === "mango") {
        mangoCount ++;
    }else if (vote === "banana"){
        bananaCount++;
    }
     
   }
   if (mangoCount > bananaCount) {
    return "mango"
   }else if(bananaCount > mangoCount){
    return "banana"
   }
    else {
    return "Draw"
   }
}
