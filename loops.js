function forLoop(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
  return forLoop
}