# Prosedur balas komentar kata kunci @tinggalbilang.ai

Dijalankan oleh scheduled task Claude sekali sehari. Tujuannya menambal batas ManyChat gratis:
komentar kata kunci di Reel yang **bukan** 3 Reel terbaru dibalas publik dengan ajakan kirim DM,
lalu otomatisasi ManyChat "Hadiah (semua kata kunci)" yang mengirim hadiahnya.
Ikuti langkah ini persis. Jangan melakukan apa pun di luar prosedur ini.

## Aturan keras
- Akun: koneksi Composio Instagram alias `tinggalbilang` (username `tinggalbilang.ai`, ig_user_id `39740158855630292`). Cek dulu dengan `INSTAGRAM_GET_USER_INFO` (`ig_user_id` = `me`, akun `tinggalbilang`). Kalau username bukan `tinggalbilang.ai`, berhenti.
- Hanya membalas komentar. Jangan posting, menghapus, menyembunyikan, atau mengirim DM.
- Lewati 3 Reel terbaru (sudah ditangani ManyChat).
- Satu balasan per komentar. Jangan balas komentar yang sudah punya balasan dari `tinggalbilang.ai`.
- Jangan balas komentar dari `tinggalbilang.ai` sendiri.
- Maksimal 30 balasan per jalan. Sisanya dikerjakan besok.

## Kata kunci
Ambil dari `jadwal.json` (kolom `kata_kunci`, cocokkan dengan `permalink` atau baris pertama caption). Komentar dianggap berisi kata kunci kalau, setelah dibuang spasi dan tanda baca di ujung, sama dengan kata kunci Reel itu tanpa melihat huruf besar/kecil, atau mengandung kata kunci itu sebagai kata utuh. Untuk `30`, `tiga puluh` juga dihitung.

## Langkah
1. `INSTAGRAM_GET_IG_USER_MEDIA` (`ig_user_id` = `me`, limit 50, fields `id,caption,permalink,timestamp`). Urutkan terbaru dulu, buang 3 teratas.
2. Untuk tiap Reel sisanya, tentukan kata kuncinya dari `jadwal.json`. Kalau tidak ketemu, lewati Reel itu.
3. `INSTAGRAM_GET_IG_MEDIA_COMMENTS` (fields `id,text,username,timestamp`, limit 100). Hanya komentar 14 hari terakhir.
4. Untuk tiap komentar berkata kunci: `INSTAGRAM_GET_IG_COMMENT_REPLIES`. Kalau sudah ada balasan dari `tinggalbilang.ai`, lewati.
5. Balas dengan `INSTAGRAM_POST_IG_COMMENT_REPLIES`, pilih acak salah satu (ganti KATA dengan kata kunci Reel, huruf besar):
   - `Kirim DM "KATA" ke aku ya, filenya langsung terkirim otomatis 📩`
   - `Halo! Ketik "KATA" di DM aku ya, hadiahnya langsung dikirim 🎁`
   - `Siap! Kirim DM "KATA" ke aku, nanti filenya otomatis masuk 🙌`
6. Laporkan singkat dalam bahasa Indonesia: jumlah komentar dibalas per Reel, dan error kalau ada. Kalau tidak ada yang perlu dibalas, cukup tulis "Tidak ada komentar baru".
