/*Problem-01 : */
function cashOut( money ) {
    if (typeof money !=="number" || money <0 ) {
       return "Invalid";
    }
    const cashOutCharg =  money * 1.75 /100;
    return cashOutCharg;
 }
 
/*Problem-02 : */
function validEmail(email) {
   if (typeof email !== "string"){
        return "Invalid";
   }
   if (email.startsWith("-") || email.startsWith(" ")) {
       return false;
   }

   if (!email.includes("@") || email.indexOf("@") === email.length - 1) {
       return false;
   }

   let parts = email.split("@");
   if (parts.length !== 2 || !parts[1].includes(".com")) {
       return false;
   }

   return true;
}
/*Problem-03 : */

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

/*Problem-04 : */
function  isBestFriend( f1 , f2 ) {
   if (
     typeof f1 !== "object"||
     typeof f2 !== "object"||
     f1 === null ||
     f2 === null ||
     !("name"  in  f1 && "roll" in f1 && "bestFriend" in f1)||
     !("name"  in  f2 && "roll" in f2 && "bestFriend" in f2)
   ) {
     return "Invalid"
   }
   if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
     return true;
 } else {
     return false;
 }
 }
 /*Problem-05 : */

 function  calculateWatchTime( times ) {
   if (!Array.isArray(times)) {
       return "Invalid"
   }
   let totalSeconds =0;
   for (let time of times){
       totalSeconds += time;
   }
let hour = Math.floor(totalSeconds / 3600);
let minute = Math.floor((totalSeconds % 3600) / 60);
let secound = Math.floor(totalSeconds % 60);

return {hour, minute, secound}
}
