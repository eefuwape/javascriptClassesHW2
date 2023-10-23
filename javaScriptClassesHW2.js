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

    isAnAdult(){
        return this.age >= 18 ? 'You are an adult and you need a job to make money.'
        : "You are a child, and you need an adult to sponsor you."
    }

    getAddress(){
        return `I live in ${this.address}`
    }

    describePerson(){
        return `I am ${this.name}, and I'm ${this.age} and I live in ${this.address}.`
    }
}

class Chef extends Person {
    constructor(name, age, address, employer, yearsOnTheJob, favoriteDish) {
        super(name, age, address)
        this.employer = employer
        this.yearsOnTheJob = yearsOnTheJob
        this.favoriteDish = favoriteDish
    }

    getEmployer() {
        return this.employer
    }

    describePerson() {
        return `I am ${this.name}, and I'm ${this.age} and I live in ${this.address}. I work at ${this.employer} as a Chef with ${this.yearsOnTheJob} years of experience. My favorite dish to cook is ${this.favoriteDish}.`
    }

    getExperience() {
        return this.yearsOnTheJob
    }
}

class PostalWorker extends Person {
    constructor(name, age, address, employer, yearsOnTheJob, numberOfDeliveries, numberOfPickUps) {
        super(name, age, address)
        this.employer = employer
        this.yearsOnTheJob = yearsOnTheJob
        this.numberOfDeliveries = numberOfDeliveries
        this.numberOfPickUps = numberOfPickUps
    }

    getDeliveredMail() {
        return `Postal Worker ${this.name} has delivered ${this.numberOfDeliveries} packages today.`
    }

    getMailPickup() {
        return `Postal Worker ${this.name} has delivered ${this.numberOfPickUps} packages today.`
    }

    describePerson() {
        return `I am ${this.name}, and I'm ${this.age} and I live in ${this.address}. I work for ${this.employer}, with ${this.yearsOnTheJob} years on the job, and I have made ${this.numberOfDeliveries} deliveries and picked up ${this.numberOfPickUps} packages.`
    }
}

const chef1 = new Chef('Gordon Ramsay', 56, 'London, England', 'Hell\'s Kitchen', 36, 'Beef Wellington')
const chef2 = new Chef('Guy Fieri', 46, 'Las Vegas, Neveda', 'Food Network', 21, 'Cheeseburger')

const postalWorker1 =  new PostalWorker('Joe Smoe', 37, 'Erie, PA', 'USPS', 19, 56, 14)
const postalWorker2 =  new PostalWorker('Sandy Brown', 52, 'Phildaelphia, PA', 'FedEx', 33, 25, 2)

console.log(chef1.describePerson())
console.log(chef1.getEmployer())
console.log(chef1.getAddress())

console.log(chef2.describePerson())
console.log(chef2.getEmployer())
console.log(chef2.getAddress())

console.log(postalWorker1.describePerson())
console.log(postalWorker1.getDeliveredMail())
console.log(postalWorker1.getMailPickup())

console.log(postalWorker2.describePerson())
console.log(postalWorker2.getDeliveredMail())
console.log(postalWorker2.getMailPickup())

