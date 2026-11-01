---
name: backup-handoff
description: Prepare auditable production checkpoints for a future Claude-to-Codex fallback; never treat this pilot as live failover.
---
# Primary checkpoint (Claude Code)
Read `FAILOVER.md`, `CLAUDE.md`. On verified limit or failure report a durable checkpoint in the production orchestrator with job ID, stage, owner, updated_at, artifacts and hashes, QC evidence, and failure reason. Only the atomic orchestrator may release ownership and assign Codex. No automatic retries of uncertain external publish. This repository stores media rather than the production source.
