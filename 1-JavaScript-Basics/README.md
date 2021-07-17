
# JavaScript Basic

Mempelajari value dan variable

## Primitive Types

Dasar building block
* Number
* String
* Boolean
* Null
* Undefined

Menjalankan code pada console browser REPL
* Read
* Evaluate
* Print
* Loop

## Number 

Pada JavaScript mempunyai deskripsi sebagai berikut:
* Hanya terdapat satu type number
* Positif number
* Negative number
* Semua number
* Desimal number

## Operasi matematika

Penambahan 
```bash
50 + 4 
43
```
Pengurangan 
```bash
50 + 4 
43
```
Perkalian 
```bash
4 * 3 
12
```
Pembagian 
```bash
10 / 2 
5
```
Module 
```bash
10 % 3 
1
```

## Pemdas 

Adalah urutan perhitungan yang didahulukan
* Parentheses = Tanda kurung
* Exponent = Pangkat
* Multiplication = Perkalian
* Division = Pembagian
* Addition = Penambahan
* Subtraction = Pengurangan

Contoh Exponentiation 
```bash
10 ** 4
    = 10 * 10 * 10 * 10

10000
```

Contoh Pemdas
```bash
4 + 3 * 4 / 2
10
```

Contoh Pemdas
```bash
(13 % 5 ) ** 2
9
```

## Non A Number (NaN)

Nan adalah nilai numeric/angka untuk menunjukan sesuatu yang tidak angka.

Contoh NAN:
```bash
200 + 0/0
NaN
```

Contoh NAN:
```bash
1 + NaN
NaN
```

## Variable 

Variable seperti label untuk nilai 
* Menyimpan nilai dengan variable
* Melihat nilai itu nanti
* Menggunakan nilai 
* Mmerubah nilai 

### Basic Syntax

```bash
let someName = value;
```
Menyimpan variable
```bash
let year =2021;
```

Menampilkan variable
```bash
year
>> 2021
```
Fungsi penambahkan 
```bash
let piring = 3;
let gelas = 5;
piring + gelas
>> 8
```

variable baru menyimpan hasil penambahkan 
```bash
let totalBarang = piring + gelas;
totalBarang

>> 8
```

Merubah variable 1
```bash
gelas = gelas + 4;
gelas

>> 9
```

Merubah variable 2
```bash
gelas += 1;
gelas

>> 10

gelas /= 2;     // gelas dibagi 2
gelas           //menampilkan variable 

>> 5
```

Merubah variable 3 
```bash
piring ++;
piring

>> 4
```

## Contant
Constant berfungsi seperti let. tetapi tidak dapat merubah nilai variable

```bash
const tet = 1000;
```

VAR 

Var adalah keyword untuk deklarasi variable cara sebelumnya 

## Boolean 

variable yang berisikan True dan False.

Cara penggunaan boolean
```bash
let gameOver = false;
let userLogin = true;
```