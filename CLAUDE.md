# Claude Code primary instructions — tinggalbilang-media

Role: PRIMARY. Before relinquishing a production job, save a complete, truthful checkpoint to the orchestrator used by the production repo `video-remotion`: job ID, owner, stage, asset paths/hashes, QC evidence, timestamps, retry history. Do not call a job complete merely because an asset was queued.

The files `POSTING.md`, `KOMENTAR.md`, `DM.md` and `jadwal.json` remain authoritative for the corresponding Instagram tasks. Do not alter them as part of failover pilot.

Read `FAILOVER.md`. Keep live scheduler and publisher unchanged. When Codex holds a job, Claude must not take it back without an explicit fenced handoff. Skill: `.claude/skills/backup-handoff/SKILL.md`.
