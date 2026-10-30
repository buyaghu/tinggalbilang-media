# Balasan otomatis DM @tinggalbilang.ai (ManyChat)

## Paket gratis: 4 otomatisasi

Batas paket gratis: 4 otomatisasi aktif, pemicu komentar hanya untuk satu Reel tertentu, 25 kontak per bulan.

| Otomatisasi | Pemicu | Isi DM |
|---|---|---|
| **Hadiah (semua kata kunci)** | *DMs you* + *replies to a story*, kata kunci: semua 10 kata kunci (`MULAI, CLAUDE, AGENT, PROJECT, GAYA, RISET, VS, PERINTAH, 30, KODE`; maksimal 10 per pemicu) + pemicu kedua untuk `FAKTA` + pemicu ketiga untuk batch 2 (`VISUAL, GEMS, BRAND, SERI, REPURPOSE, TREN, LATIHAN, KALENDER, PODCAST, SALAH`) | DM pembuka → tombol ke halaman semua hadiah: https://github.com/buyaghu/tinggalbilang-media/tree/main/hadiah |

Komentar kata kunci di semua Reel tidak ditangani ManyChat, tetapi dibalas publik oleh scheduled task Claude
(lihat `KOMENTAR.md`): `Kirim DM "KATA" ke aku ya, filenya langsung terkirim otomatis 📩`. Setelah orang itu
kirim DM, otomatisasi di atas yang mengirim hadiahnya. Tidak ada pengaturan harian di ManyChat.

## Paket Pro (kalau nanti upgrade)

Satu otomatisasi per kata kunci. Semua memakai pola yang sama; yang berbeda hanya kata kunci, nama hadiah, dan link.

## Pemicu (setiap otomatisasi)
- **Comments on:** *any post or reel* (paket Pro) atau *a specific post or reel* (paket gratis, pilih Reels yang membahas kata kunci itu).
- **Replies to a story:** *any story*.
- **DMs you:** pesan berisi kata kunci.
- Kata kunci: pilih *a specific word*, isi kata kunci dalam huruf besar dan kecil (misalnya `MULAI, mulai`). Untuk `30`, tambahkan `tiga puluh`.

## Balasan publik di komentar (diacak)
- `Udah aku kirim ke DM ya, cek inbox 📩`
- `Meluncur ke DM! 🚀`
- `Cek DM ya, filenya sudah aku kirim 🙌`

## DM pembuka (tombol: `Kirim filenya`)
```
Halo! 👋 Makasih sudah mampir ke Tinggal Bilang AI.
Sebelum filenya aku kirim, follow @tinggalbilang.ai dulu ya, biar nggak ketinggalan tips AI berikutnya.
Kalau sudah, ketuk tombol di bawah 👇
```

## DM berisi hadiah (tombol: `Unduh sekarang` → link)

| Kata kunci | Teks DM | Link tombol |
|---|---|---|
| MULAI | Ini tabel perbandingan Claude, ChatGPT, dan Gemini 🎁 Biar kamu tahu mulai dari mana. | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/MULAI-tabel-perbandingan-tiga-agen-ai.pdf |
| CLAUDE | Ini panduan pasang Claude Code langkah demi langkah 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/CLAUDE-panduan-pasang-claude-code.pdf |
| AGENT | Ini panduan mulai pakai AI agent 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/AGENT-panduan-mulai-pakai-ai-agent.pdf |
| PROJECT | Ini template instruksi ChatGPT Projects untuk konten 🎁 Tinggal salin, ganti bagian yang dikurung. | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/PROJECT-template-instruksi-project-untuk-konten.pdf |
| GAYA | Ini template CLAUDE.md, AGENTS.md, dan GEMINI.md untuk gaya kontenmu 🎁 Filenya ZIP, ekstrak dulu ya. | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/GAYA-ajari-ai-gaya-kontenmu-sekali-saja.zip |
| RISET | Ini daftar pertanyaan riset untuk NotebookLM 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/RISET-daftar-pertanyaan-riset-untuk-notebooklm.pdf |
| VS | Ini tabel Claude Code vs Codex vs Gemini CLI 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/VS-claude-code-vs-codex-vs-gemini-cli.pdf |
| PERINTAH | Ini 5 cara nyuruh agen AI, lengkap dengan contohnya 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/PERINTAH-5-cara-nyuruh-agen-ai-lengkap-dengan-contoh.pdf |
| 30 | Ini template bikin 30 video sekaligus 🎁 Filenya ZIP, ekstrak dulu ya. | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/30-template-30-video-sekaligus.zip |
| FAKTA | Ini template prompt anti ngarang 🎁 Tempel di awal prompt kamu, biar AI lebih jujur. | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/FAKTA-template-prompt-anti-ngarang.pdf |
| KODE | Ini daftar prompt bikin video Reels pakai Claude Code 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/KODE-daftar-prompt-bikin-video-reels-pakai-claude-code.pdf |
| VISUAL | Ini 15 prompt thumbnail dan cover Reels buat ChatGPT 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/VISUAL-15-prompt-thumbnail-dan-cover-reels.pdf |
| GEMS | Ini instruksi Gem "Editor Konten" siap salin 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/GEMS-instruksi-gem-editor-konten-siap-salin.pdf |
| BRAND | Ini template brand kit untuk Claude Projects 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/BRAND-template-brand-kit-untuk-claude-projects.pdf |
| SERI | Ini prompt tugasnya dan tabel perbandingan Claude Code, Codex, dan Antigravity 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/SERI-satu-tugas-tiga-agent-prompt-dan-tabel-perbandingan.pdf |
| REPURPOSE | Ini prompt repurpose 1 ide jadi 5 format 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/REPURPOSE-prompt-repurpose-1-ide-jadi-5-format.pdf |
| TREN | Ini daftar prompt riset tren per niche 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/TREN-prompt-riset-tren-per-niche.pdf |
| LATIHAN | Ini skrip latihan ngomong di depan kamera 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/LATIHAN-skrip-latihan-ngomong-di-depan-kamera.pdf |
| KALENDER | Ini prompt kalender konten 30 hari 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/KALENDER-prompt-kalender-konten-30-hari.pdf |
| PODCAST | Ini panduan Audio Overview NotebookLM 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/PODCAST-panduan-audio-overview-notebooklm.pdf |
| SALAH | Ini checklist sebelum posting konten buatan AI 🎁 | https://raw.githubusercontent.com/buyaghu/tinggalbilang-media/main/hadiah/SALAH-checklist-sebelum-posting-konten-buatan-ai.pdf |

Tutup setiap DM hadiah dengan:
```
Kalau ada yang bingung, balas DM ini aja, nanti aku bantu 🙌
```

## Tes
Komentar kata kunci dari akun lain (bukan dari @tinggalbilang.ai sendiri), lalu cek DM masuk dan link bisa diunduh.
