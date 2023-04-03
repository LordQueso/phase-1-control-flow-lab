
function scuberGreetingForFeet(rideDistance){
  
  let rideCost = 'This one is on me!'
  let rideCost2 = 'That will be twenty bucks.'
  let rideCost3 = 'I will gladly take your thirty bucks.'
  let denial = 'No can do.'

  if (rideDistance <= 400){
     return rideCost;}

     else if((rideDistance > 400) && (rideDistance < 2000)){
    return rideCost2
     }

     else if((rideDistance > 2000)&&(rideDistance <= 2500)){
      return rideCost3
     }

     else if((rideDistance > 2500)) {
      return denial
     }
}
scuberGreetingForFeet(100)
scuberGreetingForFeet(500)
scuberGreetingForFeet(2100)
scuberGreetingForFeet(3000)

//THIS BLOCK OF CODE IS FUNCTIONAL!! WHY DON'T YOU WORK?!?!
// update:  don't even know what I did to fix it.  Im sure it was grammatical aka syntax
function ternaryCheckCity(city){
  if (city === 'NYC'){
    let city = true
    return city ? "Ok, sounds good.":"No go."
  } else{
    let city = false
    return city ? "OK, sounds good.":"No go."
  }
}
console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Pittsburgh'));


function switchOnCharmFromTip(tip){
  
  switch (tip){
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }
  // Write your code here!
}

console.log(switchOnCharmFromTip('generous'))
console.log(switchOnCharmFromTip('not as generous'))
console.log(switchOnCharmFromTip('thanks for everything'))