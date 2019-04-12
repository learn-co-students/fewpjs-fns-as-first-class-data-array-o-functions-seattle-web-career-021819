let wakeDog = function(dogName, dogBreed) {
  let string = `Wake ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

let leashDog = function(dogName, dogBreed) {
  let string = `Leash ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

let walkToPark = function(dogName, dogBreed) {
  let string = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

let throwFrisbee = function(dogName, dogBreed) {
  let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

let walkHome = function(dogName, dogBreed) {
  let string = `Walk home with ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

let unleashDog = function(dogName, dogBreed) {
  let string = `Unleash ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dogName, dogBreed) {
  return routine.map(activity => 
    activity(dogName, dogBreed)
  )
}
