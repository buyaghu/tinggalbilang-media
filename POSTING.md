# Prosedur posting otomatis @tinggalbilang.ai

Dijalankan oleh scheduled task Claude setiap hari sekitar pukul 19.00 WIB.
Ikuti langkah ini persis. Jangan memposting apa pun di luar prosedur ini.

## Aturan keras
- Hanya posting entri `jadwal.json` dengan `status` = `"siap"` dan `tanggal` = hari ini (zona Asia/Jakarta).
- Entri berstatus `draft` belum disetujui pemilik akun. Jangan diposting, jangan diubah.
- Maksimal satu posting per hari. Kalau ada lebih dari satu entri `siap` untuk hari ini, posting yang pertama saja.
- Jangan memposting ulang entri berstatus `tayang`.
- **Cegah posting ganda lewat Instagram, bukan hanya lewat status.** Sebelum membuat container, ambil 5 media terakhir (`INSTAGRAM_GET_IG_USER_MEDIA`). Kalau sudah ada postingan dengan baris pertama caption yang sama dengan entri hari ini, anggap sudah tayang: jangan posting, cukup laporkan.
- Akun Instagram: koneksi Composio dengan alias `tinggalbilang`, username `tinggalbilang.ai` (ig_user_id `39740158855630292`). Ada beberapa akun Instagram lain di Composio, jadi selalu sebutkan akunnya. Sebelum posting, cek dengan `INSTAGRAM_GET_USER_INFO` (`ig_user_id` = `me`) bahwa username-nya `tinggalbilang.ai`. Kalau bukan, berhenti.

## Langkah
1. Clone `https://github.com/buyaghu/tinggalbilang-media` atau baca `https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/jadwal.json`.
2. Cari entri sesuai aturan di atas. Kalau tidak ada, selesai tanpa mengubah apa pun.
3. Pastikan `https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/<video>` mengembalikan HTTP 200.
4. Pakai caption dari `jadwal.json` apa adanya. **Jangan** mengganti `#` dengan `%23`.
5. Composio `INSTAGRAM_POST_IG_USER_MEDIA`: `ig_user_id`, `video_url` (URL raw di atas), `media_type` = `REELS`, `share_to_feed` = `true`, `thumb_offset` = `1500`, `caption`.
6. Composio `INSTAGRAM_POST_IG_USER_MEDIA_PUBLISH`: `creation_id` dari langkah 5, `max_wait_seconds` = 300.
   - Kalau gagal karena video masih diproses, tunggu lalu publish lagi dengan `creation_id` yang sama.
   - Kalau container berstatus `ERROR`, buat container baru satu kali saja lalu publish.
   - Sebelum mencoba ulang, cek `INSTAGRAM_GET_IG_USER_MEDIA` (limit 5) supaya tidak terjadi posting ganda.
7. Ambil `permalink` dan `caption` lewat `INSTAGRAM_GET_IG_MEDIA`.
8. Perbarui entri di `jadwal.json`:
   - Berhasil: `status` = `"tayang"`, tambah `media_id`, `permalink`, `waktu_tayang` (ISO, WIB). Kalau caption yang tampil berbeda, tambah `catatan`.
   - Gagal: `status` = `"gagal"`, tambah `catatan` berisi pesan error.
9. Commit (`Posting <episode>: <status>`) dan coba push ke `main`. Kalau push ditolak, jangan dicoba lewat cara lain; cukup sebutkan di laporan.
10. Laporkan hasil singkat: episode, kata kunci, status, permalink atau error.
