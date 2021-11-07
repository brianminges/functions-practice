/* 
  For this practice assignment, make a new JavaScript file that you can use to write code that meets the below requirements.
*/
// Create an array of your favorite movies
let movies = [
    {
        title: "Airplane",
        runTime: 90,
        genre: "comedy"
    },
    {   title: "A Few Good Men",
        runTime: 120,
        genre: "drama"
    },
    {
        title: "Billy Madison",
        runTime: 92,
        genre: "comedy"
    }
]
// console.log("Original array", movies)

// // Create a function to add a movie to the array

const addMovie = (newMovie) => {
    movies.push(newMovie)
}

// ​// Invoke the above function to add a movie to the array

addMovie(
    {
        title: "Shrek",
        runTime: 96,
        genre: "children"
    }
)

// console.log("Adjusted array", movies)

// ​// Create a function that loops through your movie array.  Add a conditional statement to differentiates one or more movies from the array.


const howLongIsThisMovie = () => {
    movies.forEach(movie => {
        if (movie.runTime <= 95) {
            console.log (`${movie.title} is a short movie. It is ${movie.runTime} minutes long.`) 
        } else if (movie.runTime <= 100) {
            console.log (`${movie.title} is a long movie. It is ${movie.runTime} minutes long.`) 
        } else {
            console.log (`${movie.title} is a very long movie. It is ${movie.runTime} minutes long.`) 
        }
    })
}

// howLongIsThisMovie()

// ​// Create a function that concatinates three stings and returns that value

const concatString = (string1, string2, string3) => {
    return string1 + string2 + string3
}

// ​// Invoke the function and console log the output
const longString = concatString("apples", "dogs", "mice")
// console.log(longString)

// ​// Create a function that console logs the multiplicative of 2 numbers
const multiply = (num1, num2) => {
    return num1 * num2
}

// ​// Invoke the function
const answer = multiply(5, 6)
// console.log(answer)

// ​// Bonus DataType Practice:
// // create a ternary and console log it.
const isDog = true
const whatIsIt = isDog ? console.log("woof") : console.log("Meow")
