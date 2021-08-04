# JavaScript String

String adalah primitive type di JavaScript. String digunakan untuk mempresentasikan text. Dan dibungkus dengan tanda kutip 

Crucial 
* String Basics
* Indices and Length
* Undefined & Null
* String Methods
* String Template Literals

Important 
* Random Number and the Math Object 

Penggunaan sebagai contoh:
```bash
// Making Strings
"sederhana"
let namaDepan = "teguh";
let pesanPanjang = "belajar berlatih berusaha";

// Single quotes work too:
'2004'
let binatang = 'kuda liar';
let iniSalah = "karena tanda kutip tidak seragam';
```



## String terdapat Index

Setiap karakter mempunyai index / number posisi
```bash
R U M A H
0-1-2-3-4
```

Kita dapat mengakses String 
```bash
let rumah = "BSD";

rumah[0]
>> "B"

rumah[1]
>> "S"

rumah[2]
>> "D"
```

Menghitung panjang dari String 
```bash
rumah.length
>> 3

"ini string".length
10
```

Menambah string
```bash
"lol" + "lol"
>> "lollol"
```

Menambah string
```bash
2 + "lol"
>> "2lol"
```

## String Method 

Method adalah buildin action yang dapat di lakukan pada string individual 
* Mencari di dalam string 
* Mengganti bagian didalam string 
* Merubah casing pada string

### Casing

```bash
let msg = 'i am king';
let msgBig = msg.toUpperCase();

let msgBosan = 'TiNGGaLKaN SaYa SeNDiRi!';
msgBosan.toLowerCase();

//nilai dari msgBosan tidak berubah
msgBosan;
"TiNGGaLKaN SaYa SeNDiRi!" 
```

### Trim

Fungsi trim adalah menghapus spasi awal akhir pada string 
```bash
let salam = '   Selamat Pagi Dunia!    ';
salam.trim()    //Selamat Pagi Dunia!

"   demo    ".trim()
```

## Combine multiple method 

kombinasi beberapa method sekaligus
```bash
let berita = '      hujan lebat      ';
berita.trim().toUpperCase()

>> "HUJAN LEBAT"
```

## String Method dengan Argument 


Beberapa method menerima arguments yang modifikasi perilakunya. Kita memasukan argument didalam parentheses (tanda kurung)
```bash
thing.method ( arg )
```

### Method indexOf 
indexof adalah method  untuk mencari number posisi didalam string. Jika ada beberapa akan diambil yang pertama.

```bash
let tvShow = 'catdog';
tvShow.indexOf('cat');  //  0
tvShow.indexOf('dog');  //  3

tvShow.indexOf('z');  //  -1

"haha ini lucu".indexOf('h');
>> 0
```

### Slice
adalah method yang digunakan untuk memotong string.
```bash
let str = "Hello world!";
str.slice(0, 5)   // Returns "Hello"
```

### Replace 
Adalah method digunakan untuk mengganti value variable dengan value yang lain
```bash
let ketawaAneh = "wkwk ini sangat aneh! wkwk";
ketawaAneh.replace("wkwk","haha");

//merubah semua
ketawaAneh.replaceAll("wkwk","haha");
"haha ini sangat aneh! haha"
```
perhatikan perubahan hanya pada awal saja.

### Method Repeat

```bash
"lol".repeat(2);
```

## String Template Literal 

Template literal adalah string yang memperbolehkan menempelkan expression, dimana akan di proses dan menjadi string 

Menggunakan kutip terbalik 
```bash

`Saya adalah template literal`

`jumlah uang saya ${ 3 + 3 } ribu`
>> "jumlah uang saya 6 ribu"

```

Contoh pelajar berikut ini
```bash 
let namaBarang = "sepeda";
let hargaBarang = 200;
let jumlahBarang = 3;

`Anda telah memesan ${jumlahBarang} ${namaBarang}. Total yang harus di bayar adalah ${hargaBarang * jumlahBarang}`

>> "Anda telah memesan 3 sepeda. Total yang harus di bayar adalah 600"

```
Dapat di Kombinasikan dengan method string
```bash
`halo ${namaBarang.toUpperCase()}`

>> "halo SEPEDA"
```

## NULL and Undefined

Null 
* must be assigned

Undefined 
* Variables that do not have an assigned value are undefined

### Null
```bash
let loggedInUser = null;

loggedInUser = 'Teguh Fihaiman';
```

## Math Object 
Terdapat properties dan method untuk matematika contants dan function

```bash
Math.PI

//Rounding a number:
Math.round(4.9)

//Absolute value:
Math.abs(-456)

//Raises 2 to the 5th power:
Math.pow(2,5)

//Removes decimal:
Math.floor(3.9999)
```

check math function pada console 
```bash
Math //enter
```

### Random Numbers
generate random decimal antara 0 - 1 
```bash
Math.random() 
```

Generate random number antara 1 dan 10

```bash
const step1 = Math.random();

const step2 = step1 * 10

const step3 = Math.floor(step2);

const step4 = step 3 + 1;

Math.floor(Math.random() * 10 ) + 1 ;
```