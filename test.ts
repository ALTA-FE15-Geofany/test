let fullName: string = "test"

if (true) {
    let fullName: string = "last"
    console.log(fullName)
}

console.log(fullName)

const data: object = [1, 2, 3, 4]
console.log(data)

let data1: string = "its string"
let data2: number = 123
let data3: boolean = true
console.log(data1, data2, data3)
console.log(typeof data3)
let data4: object = [{
    id: 1,
    pengarang: "sujiwo Tejo",
    Penerbit: "Gramedia",
    kolab: function () {
        return `${this.pengarang} + ${this.Penerbit}`
    },
    kategori: 'buku'
}, {
    id: 2,
    pengarang: "Cak Nun",
    Penerbit: "Gramedia",
    kolab: function () {
        return `${this.pengarang} + ${this.Penerbit}`
    },
    kategori: 'majalah'
}]


console.log(data)
console.log(typeof data4)
let compare: boolean = 2 > 10
console.log(compare)
const numberone: string | number = 100
console.log(typeof numberone)

// import newData from  '/test/data.js' assert {type JSON}
// function getData(data){
//     console.log(data)
// }

// let textPalindrome: string = "uwu"
// function testingPalindrome(testingPalindrome){
// const textLower = testingPalindrome.toLowercase()
// console.log(testingPalindrome)
// return testingPalindrome
// }
// testingPalindrome()
// const hasilPalindrom = testingPalindrome()
// console.log(hasilPalindrom)

// console.log(newData)

// const false + false = false
const nilai1: boolean = 34 > 39
const nilai2: boolean = 23 > 24

console.log(nilai1 || nilai2)

let numberVar: number = 23
console.log(numberVar += 23)

let motor: number = 2300
let bebanMotor: number = 29

if (motor > 2000 && bebanMotor <= 23) {
    console.log("ini buat motor")
} else {
    console.log("moge bayar lebih")
}

function getNumberr(n1: number, n2: number): number {
    let hasillo = n1 + n2
    return hasillo
}

function cekParkir(cek: number) {
    if (cek < 8000) {
        console.log("ini testing parkir mobil")
    } else if (cek >= 9000) {
        console.log("denganmu")
    } else {
        console.log("err")
    }
}
console.log(getNumberr(2, 3))
console.log(getNumberr(8, 3))
cekParkir(100000)

// let cek: number = 1000
console.log(100 > 900 ? 'yes' : 'no')
// console.log(hasilHitung)

function ambilKarakter(kata: string, nilaiSplit: number) {
    return kata.slice(0, nilaiSplit);
}

console.log(ambilKarakter("Hello, world!", 5)); // Output: Hello
console.log(ambilKarakter("JavaScript", 3)); // Output: Jav

function ambilKata(kata: string, nilaiKata: number): string {
    return kata.slice(0, nilaiKata)
}
console.log(ambilKata("Hello, World!", 5))

function ambilTengah(kalimat: string) {
    let potongKalima: number = Math.floor(kalimat.length / 2)
    if (kalimat.length % 2 === 0) {
        return kalimat.slice(potongKalima - 1, potongKalima + 1)
    } else {
        return kalimat.slice(potongKalima, potongKalima + 1)
    }
}
console.log(ambilTengah("Hello"))
console.log(ambilTengah("Javascript"))
console.log(ambilTengah("OpenAI"))

function potongDua(kalimatPotong: string) {
    let potongKalimat: number = Math.ceil(kalimatPotong.length / 2)
    let pertama = kalimatPotong.slice(0, potongKalimat)
    let kedua = kalimatPotong.slice(potongKalimat)
    return [pertama, kedua]

}
console.log(potongDua("Hello"))
console.log(potongDua("Javascript"))
console.log(potongDua("OpenAI"))

// var person: object = {
//     name: "john",
//     age: 30,
//     pet: "dog"
// }
// console.log(person.name)
let rows = 5
let bintangKecil = ''
for (let i: number = 1; i <= rows; i++) {
    for (let j: number = 1; j <= rows; j++) {
        bintangKecil += "*"
    }
    bintangKecil += "\n"
}
console.log(bintangKecil)

let rows2: number = 5
let bintangKecil2 = ''

for (let i: number = 1; i <= rows2; i++) {
    for (let j: number = 1; j <= i; j++) {
        bintangKecil2 += "*"
    }
    bintangKecil2 += "\n"
}
console.log(bintangKecil2)

let rows3: number = 5
let bintangKecil3 = ''

for (let i: number = 1; i <= rows3; i++) {
    for (let j: number = rows; j >= i; j--) {
        bintangKecil3 += "*"
    }
    bintangKecil3 += "\n"
}
console.log(bintangKecil3)

let textMiring: string = "Alterra"
for (let i: number = 0; i < textMiring.length; i++) {
    let spacing: string = ""
    for (let j: number = 0; j < i; j++) {
        spacing += " "
    }
    console.log(spacing + textMiring[i])
}

let textMiring2: string = "Alterra"
for (let i: number = 0; i < textMiring2.length; i++) {
    let spacing: string = ""
    for (let j: number = textMiring2.length; j > i; j--) {
        spacing += " "
    }
    console.log(spacing + textMiring2[i])
}

let email: string = "geofannyher@alterra.id"

let provider: string = ''
for (let i: number = 1; i <= email.length; i++) {
    if (email[i - 1] === "@") {
        for (let j: number = i; j <= email.length; j++) {
            if (email[j] === ".") {
                break
            }
            provider += email[j]
        }
        break
    }
}

console.log(`domain address from ${provider}`)


let angkaaa: number = 1
switch (angkaaa) {
    case 12:
        console.log("benar")
        break
    case 1:
        console.log("salah")
        break
}
// let contohNih: string = "hai"
var sum: number = 9
const nihYa: string = "cek" + sum
console.log(nihYa)
// sum: number = 9
function getFunction(sum1: number, sum2: number) {
    let sum = sum1 + sum2
    return sum
}
console.log(getFunction(90, 9))
let temp: string = "21"
const condition_one: boolean = temp == "30"
console.log(condition_one)

let cekBoolean: boolean = 12 == 12
console.log(`cek ${cekBoolean}`)

const statement_1: boolean = 30 < 33
const statement_2: boolean = 20 > 18
const statement_3: boolean = 50 < 48
const statement_4: boolean = 40 > 39
const statement_5: boolean = 12 > 17

console.log(statement_1 && statement_2)
// function cekStatement(statement_1,statement_2,statement_4): boolean {
if (statement_1 && statement_2 >= statement_4) {
    console.log("hayo", true, "kan")
} else {
    console.log(false)
}
// }

// cekStatement(statement_1,statement_2,statement_4)
console.log(data4)

function repeatLoop(numLowL: any) {
    for (let i: number = 1; i <= numLowL; i++) {
        console.log("result", i)
    }
    for (let i: number = numLowL; i >= 1; i--) {
        console.log("result", i)
    }
    // for(let i: number= 0; i <= numLowL; i-- ){
    //     console.log("haha",i)
    // }
}

repeatLoop(10)
// repeatLoop("denganmu")


function getGanjilGenap(ganjilGenap: number): void {
    for (let i: number = 0; i < ganjilGenap; i++) {
        if (i % 2 === 0) {
            console.log("ganjil")
        }
        else (
            console.log("genap")

        )
    }
}
getGanjilGenap(9)


function cekLoop(): void {
    for (let i: number = 0; i < 10; i++) {
        for (let j: number = i; j < i; j++) {
            console.log(j)
        }
    }
}
cekLoop()


let numberWhile: number = 0
while (numberWhile <= 10) {
    console.log("test")
    numberWhile++
}

// function getPangkat

let numbering: number = 0
let numbering2: number = 0
do {
    console.log("test ke- ", numbering)
    numbering++
    do {
        console.log("ini sub ke-", numbering2)
        numbering2++
    } while (numbering2 < numbering)
} while (numbering <= 5)


function getCeknumber(n: number): void {
    for (let i: number = 0; i < n; i++) {
        console.log("i setelah dikali 2", i = i + 1)
    }
}

getCeknumber(5)


function getCekkali(n: number): void {
    for (let i: number = 0; i < n; i++) {
        let hasil = i * i + 1
        console.log(`hasil dari indeks ke ${i} x ${i} + 1 = ${hasil}`)
    }
}

getCekkali(5)
function balikAngka(n: number) {
    let nambahkanBintang: string = ""
    for (let i: number = 1; i <= n; i++) {
        for (let k: number = n; k >= i; k--) {
            nambahkanBintang += "&"
        }
        nambahkanBintang += "\n"
    }
    console.log(nambahkanBintang)
}

balikAngka(10)
// let n = 10
// let nambahkanBintang: string = ""
// for (let i: number = 1; i <= n; i++) {
//     for (let k: number = n; k >= i; k--) {
//         nambahkanBintang += "&"
//     }
//     nambahkanBintang += "\n"
// }

// console.log(nambahkanBintang)

// function fullPrima(bil: number) {
//     // 1
//     let bilanganPrimanya: object = Array.from(String(bil),Number)
//     let bilanganCekPrimaTemp: number = 0
//     for (let i: number = 0; i <= 2; i++) {
//         // console.log()
//         if (bilanganPrimanya[0] % 2 == 0) {
//             bilanganCekPrimaTemp += 1
//         }
//         if(bilanganCekPrimaTemp == 2){

//             return bilanganCekPrimaTemp
//         }

//     }
// }

// console.log(fullPrima(2))
// console.log(fullPrima(3))
// console.log(fullPrima(11))
// console.log(fullPrima(13))
// console.log(fullPrima(23))
// console.log(fullPrima(29))
// console.log(fullPrima(37))
// console.log(fullPrima(41))
// console.log(fullPrima(43))
// console.log(fullPrima(53))

function isPrime(number: number): boolean {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function isFullPrime(num: number): boolean {
    const digits: number[] = Array.from(String(num), Number); // Mengubah angka menjadi array digit

    for (let i = 0; i < digits.length; i++) {
        if (!isPrime(digits[i])) {
            return false;
        }
    }

    return true;
}
console.log(isFullPrime(2)); // Output: true
console.log(isFullPrime(3)); // Output: true
console.log(isFullPrime(11)); // Output: false
console.log(isFullPrime(13)); // Output: true
console.log(isFullPrime(23)); // Output: true
console.log(isFullPrime(29)); // Output: false
console.log(isFullPrime(37)); // Output: true
console.log(isFullPrime(41)); // Output: true
console.log(isFullPrime(43)); // Output: true
console.log(isFullPrime(53)); // Output: true


function cekPrima(nilaiPrima: number) {
    if (nilaiPrima <= 1) {
        return false
    }
    for (let i: number = 2; i < Math.sqrt(nilaiPrima); i++) {
        if (nilaiPrima % i == 0) {
            return false
        }
    }
    return true
}

function cekDigitsPrima(num: number) {
    const pisahDigit: number[] = Array.from(String(num), Number)
    for (let i: number = 0; i <= pisahDigit.length; i++) {
        if (!cekPrima(pisahDigit[i])) {
            return "bilangan ini bukan Full Prima"
        }
    }
    return "bilangan ini Full Prima"
}

// console.log(cekDigitsPrima(53)); // Output: true
const Human: string[] = ["john", "week", "oscar", "oasis"]
const people: number[] = [1, 23, 4, 5, 6]
const tupleData: [string, number] = ["string", 1]
Human.forEach(function (item, index, array) {
    console.log(item, index)
})

console.log(people.length)
for (let i: number = 0; i < people.length; i++) {
    console.log(people[i])
}
for (let i: number = 0; i < Human.length; i++) {
    console.log(Human[i])
}
console.log(tupleData)


tupleData.forEach(function (data, indeks, array) {
    console.log(indeks)
})

people.forEach((index, element) => {
    console.log(`element : ${index}, indeks ke ${element}`)
});

for (let i: number = 0; i < people.length; i++) {
    console.log(`indeks ke  ${i},  element ${people[i]}`)
}

const callBack = ((index: number, element: string) => {
    console.log("index", index, "element", element)
});

const sports: string[] = ["soccer", "baseball"];
const sport2: string[] = ["tennis", "karate"]
const sportsBaru = sports.push("football", "swimming");
const jadiArrayDong = sport2.join('')
console.log(jadiArrayDong)
console.log(
    sports.sort()
)
sports.forEach((element, index, Array) => {
    console.log(element)
    console.log(index)
});

sports.push(...sport2)
// console.log(sports.reduce())

const arrayLike = {
    length: 3,
    unrelated: "foo",
    jk: "L"
};
Array.prototype.push.call(arrayLike, "domino")
console.log(arrayLike)

// const dataJumlah: number[] = [1, 2, 3, 4, 5]

function getDataJumlah(dataJumlah: number[]) {
    // dataJumlah.forEach((element) => {
    //     console.log(element + element)
    // })
    let hasilJumlah: number = 0
    for (let i: number = 0; i < dataJumlah.length; i++) {
        hasilJumlah += dataJumlah[i]
    }
    console.log(hasilJumlah)

}
getDataJumlah([1, 2, 3, 4, 5])


function getTotalString(nameString: string[]) {
    let totalValueString: number = 0
    // let hasilSplit: string = nameString.join('')
    // console.log(hasilSplit)
    // hasilSplit.length
    for (let i: number = 0; i < nameString.length; i++) {
        totalValueString += nameString[i].length
    }
    console.log(totalValueString)
}

getTotalString(["javascript", "such", "fun"])