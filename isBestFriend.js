/*function signature/sample */
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
