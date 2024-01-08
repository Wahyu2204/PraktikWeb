function hitungParkir (){
  // dapatkan nilai inputan nilai user
  let Masuk = document.getElementById ('Masuk').value
  let Keluar = document.getElementById ('Keluar').value

  // dapatkan element untuk menghasilkan hasil
  let hasilDurasi = document.querySelector ('#hasilDurasi')
  let hasilBiaya = document.querySelector ('#hasilBiaya')

  // hitung durasi
  let durasi = Keluar - Masuk
  // hitung biaya
  let biaya = 3000

  // setelah 2 jam, tambahkan biaya perjamnya 1000
  if (durasi > 2){
    biaya += (durasi - 2) * 1000
  }
  console.log (biaya);

  hasilBiaya.innerHTML = biaya
  hasilDurasi.innerHTML = durasi
}