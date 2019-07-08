function wakeDog(dogName, dogBreed) {
  let wakeString = `Wake ${dogName} the ${dogBreed}`
  console.log(wakeString)
  return wakeString
}

function leashDog(dogName, dogBreed) {
  let leashString = `Leash ${dogName} the ${dogBreed}`
  console.log(leashString)
  return leashString
}

function walkToPark(dogName, dogBreed) {
  let walkString = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(walkString)
  return walkString
}

function throwFrisbee(dogName, dogBreed) {
  let throwString = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(throwString)
  return throwString
}

function walkHome(dogName, dogBreed) {
  let walkHomeString = `Walk home with ${dogName} the ${dogBreed}`
  console.log(walkHomeString)
  return walkHomeString
}

function unleashDog(dogName, dogBreed) {
  let throwString = `Unleash ${dogName} the ${dogBreed}`
  console.log(throwString)
  return throwString
}

const routine = []
routine.push(wakeDog)
routine.push(leashDog)
routine.push(walkToPark)
routine.push(throwFrisbee)
routine.push(unleashDog)
routine.push(walkHome)

function exerciseDog(dogName, dogBreed){
  let results = routine.map(function(r){
    r(dogName, dogBreed)
  })
  return results
}



exerciseDog("rex", "dog")
