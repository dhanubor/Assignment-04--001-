/*function signature/sample */
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
