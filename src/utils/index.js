const moiveArr = []

class Moive {
    constructor (title, actor = "You don't know who's in this"){
        this.title = title
        this.actor = actor
    }
    add(){
        moiveArr.push(this)
    }
    list(){
        return moiveArr
    }
}

module.exports = Moive