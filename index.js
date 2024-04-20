console.log("Helo World");
const angka = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];
let ganjil = angka.filter((n) => n % 2 == 1);
console.log("bilangan ganjil adalah " + ganjil);

let penjumlahanganjil = 0;
for (i in ganjil) {
  penjumlahanganjil += ganjil[i];
}
console.log("total bilangan ganjil : " + penjumlahanganjil);
let ratarataganjil = penjumlahanganjil / ganjil.length;
console.log("rata-rata ganjil : " + ratarataganjil);

let min1 = ganjil[0];
let max1 = 0;
let len1 = ganjil.length;

for (let i = 0; i < len1; i++) {
  if (min1 > ganjil[i]) {
    min1 = ganjil[i];
  }
  if (max1 < ganjil[i]) {
    max1 = ganjil[i];
  }
  min1;
  max1;
}
console.log("nilai minimum bilangan ganjil : " + min1);
console.log("nilai maksimum bilangan ganjil : " + max1);

let genap = angka.filter((n) => n % 2 == 0);
console.log("bilangan genap adalah " + genap);

let penjumlahangenap = 0;
for (i in genap) {
  penjumlahangenap += genap[i];
}
console.log("total bilangan genap : " + penjumlahangenap);
let rataratagenap = penjumlahangenap / genap.length;
console.log("rata-rata genap : " + rataratagenap);

let min2 = genap[0];
let max2 = 0;
let len2 = genap.length;

for (let i = 0; i < len2; i++) {
  if (min2 > genap[i]) {
    min2 = genap[i];
  }
  if (max2 < genap[i]) {
    max2 = genap[i];
  }
  min2;
  max2;
}
console.log("nilai minimum bilangan genap : " + min2);
console.log("nilai maksimum bilangan genap : " + max2);

if (min1 < min2) {
  console.log(" nilai mnimum ganjil kurang dari nilai minimum genap");
} else if (min1 > min2) {
  console.log("nilai minimum ganjil lebih besar dari nilai minimum genap");
}

if (max1 < max2) {
  console.log("nilai maksimum ganjil kurang dari nilai maksimum genap");
} else if (max1 > max2) {
  console.log("nilai maksimum ganjil lebih besar dari nilai maksimum genap");
}

if (ratarataganjil < rataratagenap) {
  console.log("nilai rata-rata ganjil kurang dari rata-rata genap");
} else if (ratarataganjil > rataratagenap) {
  console.log("nilai rata-rata ganjil lebih besar dari rata-rata genap");
}
