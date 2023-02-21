function fibonacci(number) {
    let array = [0, 1];
    for (let i = 2; i < number; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[number - 1];
}

console.log(fibonacci(10));
