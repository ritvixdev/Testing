const person = {
    firstname: 'asish',
    lastname: 'saddhi',
    age: 250,
    country:'finland',
    city:"halsinki",
    skills: [
        'html',
        'css',
        'javascript',
        'react',
        'mongodb',
        'python'
    ],
    getFullName: function() {
        return `${this.firstname}${this.lastname}`
    },
    'phone number': "+34358585"
}

console.log(person.firstname)
console.log(person['firstname'])
console.log(person.country)
console.log(person['phone number'])
console.log(person.skills)
console.log(person.getFullName())
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()