const todoGames = [
  {text: 'Gears of War 5', done: false, },
  {text: 'Genshin Impact', done: false },
  {text: 'Fate Grand Order', done: false },
  {text: 'Super Smash Bros Ultimate', done: false},
  {text: 'Mario Kart 8: Deluxe', done: false},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, todoGames)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}