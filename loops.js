function forLoop(array) {
  for (let i = 1; i < 25; i++) {
    console.log(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
  return forLoop
}