# Pilot failover Claude Code → Codex (READ-ONLY / NO LIVE ACTION)

Status: **pilot / belum aktif**. Repo ini adalah repo media publik; produksi video berada di repo `video-remotion`. Dokumen ini tidak mengaktifkan scheduler, API, atau publisher.

## Prinsip
1. Claude Code = PRIMARY. Codex = BACKUP hanya setelah bukti `LIMIT_CONFIRMED`, `FAILED`, atau `STALE_CONFIRMED` dari pengawas yang terautentikasi. Kesunyian chat atau perkiraan limit **bukan bukti**.
2. Saat checkpoint `RUNNING` milik Claude masih berlaku, Codex dilarang mengambil alih.
3. Pemilik pekerjaan tunggal (lease/lock atomik di layanan transaksional). **Jangan** memakai satu JSON GitHub sebagai mutex: race condition dapat menghasilkan dua pemilik.
4. Sebelum aksi eksternal (Meta publish / balas komentar / DM): lakukan pemeriksaan duplikasi aktual di Instagram dan idempotency key per pekerjaan.
5. Codex hanya melanjutkan dari checkpoint terverifikasi, tidak mengulang produksi atau mengunggah ulang aset yang sudah PASS. Jangan ganti caption dari `jadwal.json`.
6. Setelah Claude pulih, pekerjaan aktif tetap milik Codex hingga selesai / aman di-handoff. Pekerjaan *berikutnya* kembali ke Claude.
7. Tidak boleh menyimpan token, API key, atau informasi pengguna/DM dalam repo publik.

## Yang sudah berjalan (JANGAN DIUBAH OLEH PILOT)
- `POSTING.md`: tanggal dan status `jadwal.json`, akun `tinggalbilang.ai` (`39740158855630292`), periksa 5 media terakhir, satu Reels per hari.
- `KOMENTAR.md`: 12.17, 20.17, 22.17 WIB; cek replies sebelum membalas; maksimal 30 per jalan. ManyChat menangani DM sesuai `DM.md`.
- Jadwal ChatGPT yang dibuat terpisah bukan bukti otomatis pengambilalihan Claude Code.

## State machine (rencana)
`READY -> CLAIMED_CLAUDE -> RUNNING_CLAUDE -> QC_PASS -> HANDOFF_READY -> DONE`.
Jika ada bukti kegagalan: `RUNNING_CLAUDE -> FAILOVER_PENDING -> CLAIMED_CODEX -> RUNNING_CODEX -> QC_PASS -> HANDOFF_READY -> DONE`.
Tidak pasti: `HOLD_RECONCILE`, **bukan** retry. Sudah terbit: `DONE` immutable kecuali koreksi audit manual.

## Syarat sebelum otomatisasi LIVE
- Akses dan identitas runtime Claude Code / Codex terverifikasi di repo produksi `video-remotion`.
- Pengawas n8n/worker dapat membedakan limit autentik, timeout, kegagalan jaringan, dan pekerjaan sedang berlangsung.
- Shared transactional lock yang benar-benar atomik (mis. DB unique constraint + lease fencing token).
- Adapter pemicu Codex yang nyata dan diizinkan, beserta izin akses repo produksi.
- Checkpoint artefak persisten beserta hash, QC, log, dan status; jangan pindah job tanpa bukti.
- Test double-claim, heartbeat terlambat, Claude pulih di tengah jalan, retry publish tidak pasti, serta caption duplikat.
- Persetujuan live deployment dan uji bertahap khusus; pilot ini **tidak memberi otorisasi publish**.

## Simulasi aman
`node scripts/failover-dry-run.mjs`. Hanya simulasi lokal data palsu. Tidak ada network, Meta, GitHub write, maupun scheduler.
