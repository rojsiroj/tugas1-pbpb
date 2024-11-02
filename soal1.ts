// Definisikan konstanta mulai, akhir, dan langkah. Merujuk pada soal: awal = 1; akhir = 100; langkah = 10;
const mulai = 1; // Dimulai dari angka 1
const akhir = 100; // Hingga angka 100
const langkah = 10; // Setiap blok berisi 10 angka

function pengulanganPolaGanjilGenap(
  mulai: number,
  akhir: number,
  langkah: number
) {
  // Sebagai pembanding jumlah angka setiap blok
  const jumlahPerBlok = langkah / 2; // Dibagi 2, ganjil atau genap

  // Perulangan untuk setiap blok langkah angka
  for (let i = 1; i <= akhir / langkah; i++) {
    console.log(`Perulangan ${langkah} ke-${i}:`);

    // Menentukan apakah blok saat ini menampilkan angka ganjil atau genap
    let ganjil = i % 2 !== 0;
    let totalPerBlok = 0; // Menghitung jumlah total angka di dalam blok
    let jumlah = 0; // Menghitung jumlah angka dalam blok

    // Titik awal blok saat ini
    let awalBlok = mulai + (i - 1) * langkah;

    for (let j = awalBlok; j < awalBlok + langkah; j++) {
      if (ganjil && j % 2 !== 0) {
        // Jika ganjil
        console.log(j);
        totalPerBlok += j;
        jumlah++;
      } else if (!ganjil && j % 2 === 0) {
        // Jika genap
        console.log(j);
        totalPerBlok += j;
        jumlah++;
      }

      // Jika sudah mencapai jumlah bilangan yang ditentukan, break untuk pindah ke blok berikutnya
      if (jumlah === jumlahPerBlok) {
        break;
      }
    }

    console.log("--------------------------");
    console.log(`Jumlah: ${totalPerBlok}`);
    console.log(); // Space kosong antara blok
  }
}

// Memanggil fungsi dengan parameter mulai, akhir, dan langkah
pengulanganPolaGanjilGenap(mulai, akhir, langkah);
