
function TimeBomb(){
try{
let Bomb; 
let BombTimer;
let BombDefused = false;  

function arm(seconds, callback_function){
  try{
   if(!seconds){
    throw {message: "Error: TimeBomb.js Needs To Have Timer Set"}
  } else{
    BombTimer = seconds
  }
  Bomb = setInterval(function() {
  BombTimer--;
  if (BombTimer <= 0) {
    clearInterval(Bomb);  
    if(callback_function){
    callback_function()
    } 
    return 'Kaboom'
  }
}, 1000);
  }catch(error){
    console.error(error.message)
    return error.message
  }
}
  
  
  
function defuse() {
  if(BombDefused !== true){
  clearInterval(Bomb);
    BombDefused = true;
    return "Bomb defused"
  } else{
   return "Bomb has already been defused"
  }
}
  
function explode() {
  BombTimer = 0;
}  


  return {
      arm: arm, // ARM FOR X AMOUNT OF SECONDS + CALLBACK.
      defuse: defuse, // STOP THE BOMB. 
      explode: explode, // EXPLODE THE BOMB EARLY.
    };
}catch(error){
  console.error(error.message)
  return error.message
}
}
