---
name: backup-handoff
description: Safely inspect Claude-to-Codex handoff checkpoints in read-only mode; do not trigger live failover without authorized orchestrator and atomic lock.
---
# Backup handoff (Codex)
Read `FAILOVER.md`, `AGENTS.md`, and the job's checkpoint evidence. Confirm: trusted failure signal, shared atomic claim with fencing token, no concurrent Claude job, required inputs/assets/hashes/QC, and absence of an already published Instagram post. If any missing: HOLD_RECONCILE; do not publish or retry. In this media repo, simulations only. The source production repo is `video-remotion`. Run `node scripts/failover-dry-run.mjs` to verify guard logic offline.
