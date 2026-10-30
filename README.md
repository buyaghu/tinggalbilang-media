# tinggalbilang-media

Video Reels dan hadiah DM @tinggalbilang.ai. Dirender dari repo `video-remotion`.
Repo ini publik supaya Instagram bisa mengambil file video saat posting otomatis,
dan supaya hadiah bisa diunduh lewat link langsung.

- `videos/` – Reels siap tayang
- `hadiah/` – file hadiah DM, nama diawali kata kunci CTA
- `jadwal.json` – antrean posting (status `draft` / `siap` / `tayang` / `gagal`)
- `POSTING.md` – prosedur posting otomatis

## Otomatisasi yang berjalan

| Bagian | Jalan | Diatur di |
|---|---|---|
| Posting Reel harian | 18.47 WIB, scheduled task "Posting Reels tinggalbilang.ai" (Composio alias `tinggalbilang`) | `POSTING.md`, `jadwal.json` |
| Balas komentar kata kunci di semua Reel | 12.17, 20.17, 22.17 WIB, scheduled task "Balas komentar tinggalbilang.ai" | `KOMENTAR.md` |
| DM kata kunci → halaman hadiah | ManyChat (paket gratis), otomatisasi "Hadiah (semua kata kunci)", LIVE sejak 30 Okt 2026 | `DM.md` |
