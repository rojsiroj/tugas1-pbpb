// MUHAMAD SIROJUDIN - 043922682

// Buat fungsi untuk menampilkan angka berdasarkan NIM
function tampilkanAngkaBerdasarkanNIM(nim: string) {
  // Nilai akhir pengulangan berdasarkan soal
  const nilaiAkhir = 20;

  // Mengambil 2 digit terakhir dari NIM
  const duaDigitTerakhir = nim.slice(-2);
  let nilaiAwal = parseInt(duaDigitTerakhir, 10);

  // Mendapatkan angka terakhir dari NIM untuk menentukan jenis perulangan
  const angkaTerakhir = parseInt(duaDigitTerakhir.charAt(1), 10);

  // Menentukan jenis perulangan berdasarkan angka terakhir
  if (angkaTerakhir % 2 === 0) {
    // Genap
    let i = nilaiAwal;

    // Kode akan dijalnkan setidaknya sekali walaupun i <= nilaiAkhir tidak terpenuhi
    do {
      console.log(i);
      i++;
    } while (i <= nilaiAkhir);
  } else {
    // Ganjil
    let i = nilaiAwal;

    // Kode tidak akan dijalankan ketika i <= nilaiAkhir tidak terpenuhi
    while (i <= nilaiAkhir) {
      console.log(i);
      i++;
    }
  }
}

// Panggil fungsi dengan parameter NIM saya sendiri
console.log("NIM Genap:");
tampilkanAngkaBerdasarkanNIM("043922682"); // NIM Genap

console.log("---------------"); // Pemisah

// Panggil fungsi dengan parameter contoh NIM ganjil
console.log("NIM Ganjil:");
tampilkanAngkaBerdasarkanNIM("043922613"); // NIM Ganjil
