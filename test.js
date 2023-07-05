// console.log('Hi Alterra');

let name = "john"
{
    let name = "Rudy"
    console.log(name)
}
console.log(name)


var umur = 23
{
    var umur = 24
    console.log(umur)
}
console.log(umur)
var umur = 21
console.log(umur)

const alamat = "Jl. Merak"
{
    const alamat = [{
        rt: "01",
        rw: "02"
    }]
    console.log(alamat[0].rt)
}

console.log(alamat)

const user = ["jack", "merd", "qill"]
user.push("andre", "tommy")
const userlenght = user.length
user.unshift("tomjack")
user.shift()
user.push("angel")
// user.pop()
console.log("lenght of user data " + userlenght)
console.log(user)
console.log(user[3])

const number = 9

if (number % 2 == 0) {
    console.log(number + " is true")
} else {
    console.log(number + " is false")
}

const brand = "apple"
function sayHi(brand) {
    console.log("hello world" + " " + brand)
}
sayHi(brand)

const mahasiswa = [{
    nama: "budi",
    nilai: 22,
    id: 1
}, {
    nama: "anton",
    nilai: 90,
    id: 2
}, {
    nama: "her",
    nilai: 99,
    id: 1
}
];
// mencari total lulus
function getMahasiswa(mahasiswa) {
    let lulus = 0
    for (i = 0; i < mahasiswa.length; i++) {
        if (mahasiswa[i].nilai >= 40) {
            lulus += 1
        }
    }
    return lulus
}

function getMahasiswadrop(mahasiswa) {
    let tidak_lulus = 0
    for (i = 0; i < mahasiswa.length; i++) {
        if (mahasiswa[i].nilai < 40) {
            tidak_lulus += 1
        }
    }
    return tidak_lulus
}

const totaldrop = getMahasiswadrop(mahasiswa)
console.log(`total tidak lulus ada ${totaldrop}`)
const totallulus = getMahasiswa(mahasiswa)
console.log(`total lulusnya ${totallulus}`)
// mencari nilai tertinggi
function getHighnumber(mahasiswa) {
    let mahasiswaTinggi = null
    for (i = 0; i < mahasiswa.length; i++) {
        if (mahasiswaTinggi === null || mahasiswa[i].nilai > mahasiswaTinggi.nilai) {
            mahasiswaTinggi = mahasiswa[i]
        }
    }
    return mahasiswaTinggi
}
const totalNilai = getHighnumber(mahasiswa)
console.log(totalNilai)
// mencari rata
function getRata(mahasiswa) {
    let hitungsemua = 0
    for (i = 0; i < mahasiswa.length; i++) {
        hitungsemua += mahasiswa[i].nilai
    }
    const rata = hitungsemua / mahasiswa.length
    return rata
}
const hasilnya = getRata(mahasiswa)
console.log(`${hasilnya}`)

const value = 9
const hasil = (value < 12) ? "benar" : "salah"
console.log(hasil)

const dataSwitch = [{
    nama: "wati",
    nilai: 100,
    pekerjaan: "FE"
}, {
    nama: "L",
    nilai: 99,
    pekerjaan: "FE"

}, {
    nama: "rona",
    nilai: 96,
    pekerjaan: "BE"

}]

// var position = "s"
// var gaji
var index = 1
var pekerjaan
switch (dataSwitch[index].pekerjaan) {
    case "FE":
        pekerjaan = "7jt"
        break;
    case "BE":
        pekerjaan = "8jt"
    default:
        pekerjaan = "err"
        break;
}
console.log(pekerjaan)
var b = ''
for (var i = 1; i <= 10; i++) {
    for (var j = 0; j < i; j++) {
        b += '*'
    }
    b += '\n'
}

console.log(b)

var c = ""
for (i = 10; i > 0; i--) {
    for (j = 0; j < i; j++) {
        c += '*'
    }
    c += '\n'
}

console.log(c)
var baca = 20
var kemampuan = 0
while (baca > 4) {
    baca /= 2
    kemampuan += 1
    console.log("------")
}

console.log(kemampuan)

let hasilakhir = 0
let awal = 1

while (awal <= 10) {
    hasilakhir += awal
    awal++
}
console.log(hasilakhir)

var tinggiSegitiga = 5
let contoh1 = 1
let awalan = ''

while (contoh1 <= tinggiSegitiga) {
    awalan += "*"
    console.log(awalan)
    contoh1++

}

let quedata = ["one", "two", "three", "four", "five"]
const copy = quedata.slice()
console.log(quedata)

const slicearray = quedata.slice(0, 2)
console.log(slicearray)

for (i = 0; i < quedata.length; i++) {
    console.log(quedata[i], typeof quedata)
}

for (i = 0; i < quedata.length; i++) {
    console.log(quedata, typeof quedata)
}
let key = 1
for (key in quedata) {
    console.log(quedata[key])
}

const daerah = "jln. Merak No 3, Belakang Masjid AL - Qodir"
const substringdaerah = daerah.substring(0, 4)
console.log(substringdaerah)

let notlp = "6283118998334"
let subnotlp = notlp.substring(0, 2)
const cek = (subnotlp === "62") ? "ind" : "err"
let has = parseInt(subnotlp)
const type = (typeof has)
console.log("from parseint", type)
console.log("value output", has)
let numbernow = 9
const numbertostring = numbernow.toString()
console.log(numbertostring, typeof numbertostring)

let numberlist = [1, 3, 34, 5, 45, 2]
const pushslice = numberlist.push(9000)
console.log(numberlist)
const takeslice = numberlist.slice(0, 2)
console.log(takeslice)
const convernumbertostring = numberlist.toString()
console.log(convernumbertostring, typeof numbertostring)
const out = (subnotlp === "62") ? console.log("ind") : console.log("err")

const paragraf = "ente\kadang\kadang"
console.log(paragraf)

const valueObject = {
    kelas: "matematika",
    jamMasuk: "07",
}
valueObject["jamPulang"] = "15"
console.log(valueObject)

console.log(Object.keys(valueObject))

let datajam = "090732"

const jam = datajam.substring(0, 2)
const menit = datajam.substring(3, 4)
const detik = datajam.substring(5, 6)

let waktumalam = ""
let waktupagi = ""
const formatjam = parseInt(jam)
const total = (formatjam > 12) ? waktumalam = "PM" : waktupagi = "AM"
console.log("jam sekarang", jam, menit, detik, total)

const biodata = [{
    nama: "rocky",
    umur: 42,
    jk: "L",
    makanan: {
        jepang: "dorayaki",
        korea: "gimbab",
        indonesia: "gado gado"
    },
    hobi: ["sepak bola", "bulu tangkis"],
    koleksiBuku: {
        judul: "the exort",
        harga: 90000,
        pegarang: "John dee"
    },
    gelar: [
        "SD",
        "SMP",
        "SMA",
        "S1",
        "S2",
        "S3"
    ]
}, {
    nama: "rizal",
    umur: 40,
    jk: "L",
    makanan: {
        jepang: "dorayaki",
        korea: "gimbab"
    },
    hobi: ["menggambar", "sepak bola", "mancing"],
    koleksiBuku: {
        judul: "the blight",
        harga: 98000,
        pegarang: "John dee"
    },
    gelar: [
        "SD",
        "SMP",
        "SMA",
        "S1",

    ]
}]
biodata.forEach(object => {
    delete object['jk'];
})
console.log(biodata)

let namaBola = []
for (i = 0; i < biodata.length; i++) {
    if (biodata[i].gelar.includes("S3")) {
        namaBola.push(biodata[i].nama)
    }

}
console.log("nama yang suka sepak bola", namaBola)
for (let key in biodata) {
    console.log(biodata[key])
}

const numbarray = [2, 32, 3, 24, 23,]
let totalnya = null
function totalAray(numbarray) {
    for (let i = 0; i < numbarray.length; i++) {
        totalnya += numbarray[i]
    }
    return totalnya
}

const hasilhitung = totalAray(numbarray)
console.log(`${hasilhitung}`)

let angka = 2
const hasiil = angka % 2
console.log(hasiil)

let bilanganN = 12
let totalBilangan = 0
for (i = 1; i < bilanganN; i++) {
    if (bilanganN % i === 0) {
        totalBilangan += i
    }
}

console.log("total bilangan faktorial ", bilanganN, " ", totalBilangan)

let jariJari = 4
let tinggi = 20

function hitungluaspermukaantabung(jariJari, tinggi) {
    luasAlas = Math.PI * Math.pow(jariJari, 2)

    luasSelimut = 2 * Math.PI * jariJari * tinggi

    luasPermukaan = 2 * luasAlas * luasSelimut

    return luasPermukaan
}

const hasilhitungluas = hitungluaspermukaantabung(jariJari, tinggi)
console.log(`hasil luas hitung permukaan tabung, ${hasilhitungluas}`)

const nilaiMahasiswa = 80

if (nilaiMahasiswa >= 80) {
    console.log("A")
} else {
    console.log("err")
}

let faktor = 20
function getFaktorNumber(faktor) {

    for (i = 1; i < faktor; i++) {
        if (faktor % i === 0) {
            console.log(i)
        }
    }
    return faktor
}
let hasilgetNumber = getFaktorNumber(faktor)
console.log(`hasil get number ${hasilgetNumber}`)

let bilanganPrima = 4
let tempBilangan = 0

for (i = 1; i <= bilanganPrima; i++) {
    if (bilanganPrima % i == 0) {
        tempBilangan += 1
    }
}
if (tempBilangan == 2) {
    console.log("Bilangan Prima")
} else {
    console.log("Bilangan Non Prima")
}

test = bilanganPrima % 1
console.log(test)

let bintang = 10
let baris = ""
for (i = 1; i < bintang; i++) {
    for (j = 0; j < i; j++) {
        baris += "*"
    }
    baris += "\n"
}

console.log(baris)

const dataupper = "SFJDHSFSDFS"
let hasillower = dataupper.toLowerCase()
console.log(hasillower)


let inputPalindrome = "denganmu"

function getPalindrome(inputPalindrome) {
    let jadiKecil = inputPalindrome.toLowerCase().replace(/\s/g, '');

    let jadiArray = jadiKecil.split('')
    console.log(jadiArray)
    let gabungkan = jadiArray.reverse()
    console.log(gabungkan)
    let jadiString = gabungkan.join('')
    console.log(typeof jadiString)
    if (inputPalindrome == jadiString) {
        console.log("ini adalah palindrom")
    } else {
        console.log("ini bukan palindrome")
    }
}
getPalindrome(inputPalindrome)
