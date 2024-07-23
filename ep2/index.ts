function add(a: number, b: number) {
    return a + b
}

function remove(a: number, b: number) {
    return a - b
}

function mul(a: number, b: number, c: number) {
    return a * b * c
}


function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'เกรด F'
    } else if (score < 60){
        return 'เกรด D'
    } else if (score < 70){
        return 'เกรด C'
    }
}

console.log(grade(20, 60, 20))