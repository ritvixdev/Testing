const num = [1,2,3,4,5,6,7]

const subArray = arr => {
    let sum = 0
    arr.forEach((element) => {
        sum += element
    })

    return sum
}

console.log(sumArrays(numbers))