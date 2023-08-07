let str = "Kasur ini rusak";
str = str.toLowerCase(); // Mengubah ke huruf kecil
// Saya mengubah string str ke huruf kecil untuk memastikan bahwa perbandingan karakter dalam
// pemeriksaan palindrom tidak terpengaruh oleh perbedaan huruf besar dan kecil. Dengan mengubah ke huruf
// kecil, karakter dengan huruf besar dan huruf kecil dianggap sama saat dilakukan perbandingan.

function parindom(str) {
  let length = str.length;
  console.log("Panjang Nilai String :" + length);
  for (let i = 0; i < length / 2; i++) {
    //perulangan hanya akan terus berjalan selama nilai i lebih kecil dari (length / 2), contoh length = 7. 15/2
    if (str[i] !== str[length - 1 - i]) {
      //cara untuk mengakses karakter di posisi yang berlawanan dari string 'str' jika nilainya tidak sama maka kembalikan nilai false
      // `-1`:  digunakan untuk mengkompensasi perbedaan antara panjang string dan indeks dalam JavaScript yang dimulai dari 0. Contoh, jika panjang string adalah 15, maka indeks paling akhir adalah 14 (15 - 1).
      // Jadi...`length - 1 - i` menghasilkan indeks yang berlawanan dengan `i` dalam string.
      //  So , jika `i` menghitung karakter dari depan ke belakang, maka `str[length - 1 - i]` akan menghitung karakter yang berlawanan, yaitu dari belakang ke depan.  ginanya untuk membandingkan karakter dari kedua ujung string dalam upaya memeriksa palindrom.
      return false;
    }
  }
  return true;
}

if (parindom(str)) {
  console.log(`"${str}" adalah sebuah palindrom.`);
} else {
  console.log(`"${str}" bukan palindrom.`);
}
