module.exports = function toReadable(number) {
    let arr = number.toString().split('')
    return arr.reduce((acc, curr, index, arr) => {
        if (index === 0 & arr.length === 3) {
            return acc += `${dict[curr]}`
        }
        if (index === 1 & arr.length === 3) {
            if (curr === '1') {
                if (arr[2] === '8') {
                    acc += ` hundred ${dict[arr[2]]}een`
                    arr.pop();
                    return acc
                }
                if (arr[2] === '5') {
                    acc += ` hundred fifteen`
                    arr.pop();
                    return acc
                }
                if (arr[2] === '3') {
                    acc += ` hundred thirteen`
                    arr.pop();
                    return acc
                }
                if (arr[2] === '2') {
                    acc += ` hundred twelve`
                    arr.pop();
                    return acc
                }
                if (arr[2] === '1') {
                    acc += ` hundred eleven`
                    arr.pop();
                    return acc
                }
                if (arr[2] === '0') {
                    acc += ` hundred ten`
                    arr.pop();
                    return acc
                }
                else {
                    acc += ` hundred ${dict[arr[2]]}teen`
                    arr.pop();
                    return acc
                }
            }

            if (curr === "0") {
                if (arr[2] === "0") {
                    acc += ` hundred`
                    arr.pop();
                    return acc
                }
                acc += ` hundred ${dict[arr[2]]}`
                arr.pop();
                return acc
            }

            if (curr === '8') {
                return acc += ` hundred ${dict[curr]}y`
            }
            if (curr === '5') {
                return acc += ` hundred fifty`
            }
            if (curr === '4') {
                return acc += ` hundred forty`
            }
            if (curr === '3') {
                return acc += ` hundred thirty`
            }
            if (curr === '2') {
                return acc += ` hundred twenty`
            }
            return acc += ` hundred ${dict[curr]}ty`
        }
        if (index === 0 & arr.length === 2) {
            if (arr[1] === '0') {
                if (arr[0] === '8') {
                    acc += `${dict[curr]}y`
                    arr.pop()
                    return acc
                }
                if (arr[0] === '5') {
                    acc += `fifty`
                    arr.pop()
                    return acc
                }
                if (arr[0] === '4') {
                    acc += `forty`
                    arr.pop()
                    return acc
                }
                if (arr[0] === '3') {
                    acc += `thirty`
                    arr.pop()
                    return acc
                }
                if (arr[0] === '2') {
                    acc += `twenty`
                    arr.pop()
                    return acc
                }
                if (arr[0] === '1') {
                    acc += `ten`
                    arr.pop()
                    return acc
                }
                acc += `${dict[curr]}ty`
                arr.pop()
                return acc
            }
            if (curr === '8') {
                return acc += `${dict[curr]}y`
            }
            if (curr === '5') {
                return acc += `fifty`
            }
            if (curr === '4') {
                return acc += `forty`
            }
            if (curr === '3') {
                return acc += `thirty`
            }
            if (curr === '2') {
                return acc += `twenty`
            }
            if (curr === '1') {
                //
                if (arr[1] === '9') {
                    acc += `${dict[arr[1]]}teen`
                    arr.pop();
                    return acc
                }
                if (arr[1] === '8') {
                    acc += `${dict[arr[1]]}een`
                    arr.pop();
                    return acc
                }
                if (arr[1] === '7') {
                    acc += `${dict[arr[1]]}teen`
                    arr.pop();
                    return acc
                }
                if (arr[1] === '6') {
                    acc += `${dict[arr[1]]}teen`
                    arr.pop();
                    return acc
                }
                if (arr[1] === '5') {
                    acc += `fifteen`
                    arr.pop();
                    return acc
                }
                if (arr[1] === '4') {
                    acc += `fourteen`
                    arr.pop();
                    return acc
                }
                if (arr[1] === '3') {
                    acc += `thirteen`
                    arr.pop();
                    return acc
                }
                if (arr[1] === '2') {
                    acc += `twelve`
                    arr.pop();
                    return acc
                }
                if (arr[1] === '1') {
                    acc += `eleven`
                    arr.pop();
                    return acc
                }
                if (arr[1] === '0') {
                    acc += `ten`
                    arr.pop();
                    return acc
                }

                //

            }
            return acc += `${dict[curr]}ty`
        }
        if (index === 1 & arr.length === 2) {
            return acc += ` ${dict[curr]}`
        }
        if (index === 2 & curr === "0") {
            return acc
        }
        if (index === 2) {
            return acc += ` ${dict[curr]}`
        }
        if (arr.length === 1) {
            return acc += `${dict[curr]}`
        }

    }, '')
}
const dict = {
    "0": 'zero',
    "1": "one",
    '2': "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
}
