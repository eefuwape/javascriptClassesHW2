// Governor Class

class Governor {
    constructor(name, numberOfBillsPassed, numberOfPardons) {
        this.name = name
        this.numberOfBillsPassed = 0
        this.numberOfPardons = 0
    }

    static getPardon() {
        let trueOrFalse, pardonsGranted = 0
        if(Math.random() > 0.5) {
            trueOrFalse = true 
            pardonsGranted++
            this.numberOfPardons = pardonsGranted
            return this.numberOfPardons
        } else {
            return 'Your pardon request has been denied.'
        }
    }

    static getBillPassed() {
        let trueOrFalse, billsPassed = 0
        if(Math.random() > 0.5) {
            trueOrFalse = true 
            billsPassed++
            this.numberOfBillsPassed = billsPassed
            return this.numberOfBillsPassed
        }
        else
            return 'The Bill has been vetoed.'
    }

    static displayGovernorStats() {
        return this.name + ' has passed ' + this.numberOfBillsPassed + " bills and has approved " + this.numberOfPardons + ' pardons.'
    }
}

console.log(Governor.displayGovernorStats())
console.log(Governor.getBillPassed())
console.log(Governor.getPardon())

// Class Person

class Person {
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this.address = address
    }

    makeMoney(){
        return 'You need a job to make money.'
    }

    getSomeSleep(){
        return 'Time for bed'
    }

    eatSomeFood(){
        return 'Time to eat.'
    }
}

class Chef extends Person {
    constructor(name, age, address, employer, yearsOnTheJob) {
        super(name, age, address)
        this.employer = employer
        this.yearsOnTheJob = yearsOnTheJob
    }

    makeRecipes() {

    }

    getChefInfo() {

    }

    getFavoriteFood() {

    }
}

class PostalWorker extends Person {
    constructor(name, age, address, employer, yearsOnTheJob) {
        super(name, age, address)
        this.employer = employer
        this.yearsOnTheJob = yearsOnTheJob
    }

    getDeliveredMail() {

    }

    getMailPickup() {

    }

    getPostPersonInfo() {

    }
}

