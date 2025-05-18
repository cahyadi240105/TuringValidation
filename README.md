---

# 🔁 TuringValidation – Simulasi Mesin Turing untuk Validasi String Biner

**TuringValidation** adalah aplikasi simulasi berbasis web yang dibuat untuk memvisualisasikan cara kerja **mesin Turing** dalam memvalidasi string yang terdiri dari simbol `{0,1}`. Aplikasi ini dikembangkan menggunakan **JavaScript** untuk memberikan pengalaman interaktif dalam memahami prinsip dasar komputasi teoretis.

## 🎯 Tujuan Proyek

Proyek ini bertujuan untuk membantu mahasiswa atau peminat ilmu komputer memahami cara kerja mesin Turing, khususnya dalam proses validasi string biner. Simulasi ini memproses input simbol demi simbol sesuai dengan aturan transisi, layaknya mesin Turing yang sesungguhnya.

## 🛠 Teknologi yang Digunakan

* **Bahasa Pemrograman:** JavaScript
* **Antarmuka:** HTML & CSS
* **Logika Mesin Turing:** Dibuat secara manual tanpa library eksternal

## 🔍 Fitur Utama

* Input string biner `{0,1}` oleh pengguna
* Proses simulasi per langkah (step-by-step) atau otomatis
* Visualisasi tape mesin Turing dan posisi head
* Validasi apakah string diterima atau ditolak oleh mesin
* Tampilan antarmuka yang interaktif dan mudah digunakan

## 🚀 Cara Menjalankan Proyek

1. Unduh atau clone repositori ini.
2. Buka file `index.html` menggunakan browser modern (Chrome, Firefox, dsb.).
3. Masukkan string biner yang ingin diuji.
4. Jalankan simulasi untuk melihat proses validasi.

## 📁 Struktur File

```
turingvalidation/
├── index.html         # Halaman utama
└── script.js          # Logika mesin Turing
```

## 📌 Contoh Kasus

Misalnya, mesin Turing dikonfigurasi untuk menerima string dengan jumlah simbol `0` dan `1` yang seimbang. Maka:

* Input `0011` → Diterima ✅
* Input `01a` → Ditolak ❌

*(Aturan dapat disesuaikan tergantung dari implementasi logika transisi.)*

## 👨‍💻 Pengembang

Dikembangkan oleh Cahyadi Prasetyo dan Kelompok sebagai bagian dari pembelajaran teori automata dan pemrograman JavaScript interaktif.
