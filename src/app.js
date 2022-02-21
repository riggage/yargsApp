const yargs = require("yargs")
const Moive = require("./utils")

const app = (yargsObj) => {
    if (yargsObj.add) {
        const movie = new Moive(yargsObj.title, yargsObj.actor)
        movie.add()
        console.log(movie.list())
        //add moive to arry, console log at end
    } else {
        console.log("Incorrect command")
    }
}

app(yargs.argv)