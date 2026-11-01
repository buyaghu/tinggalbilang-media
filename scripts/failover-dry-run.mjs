// Offline-only safety simulation. No imports, network, credentials, or external effects.
import assert from 'node:assert/strict';

function decide(job) {
  if (job.published || job.state === 'DONE') return 'SKIP_ALREADY_DONE';
  if (!job.failureVerified) return 'HOLD_NO_VERIFIED_FAILURE';
  if (job.claudeLeaseActive) return 'HOLD_CLAUDE_OWNS_JOB';
  if (!job.atomicCodexClaim) return 'HOLD_NO_ATOMIC_CLAIM';
  if (!job.checkpointValid || !job.assetsVerified) return 'HOLD_CHECKPOINT_INCOMPLETE';
  if (job.externalActionUncertain) return 'HOLD_RECONCILE';
  return 'ELIGIBLE_FOR_BACKUP_DRY_RUN';
}
const baseline = {published:false,state:'RUNNING_CLAUDE',failureVerified:true,claudeLeaseActive:false,atomicCodexClaim:true,checkpointValid:true,assetsVerified:true,externalActionUncertain:false};
const tests = [
  [{...baseline,published:true},'SKIP_ALREADY_DONE'],
  [{...baseline,failureVerified:false},'HOLD_NO_VERIFIED_FAILURE'],
  [{...baseline,claudeLeaseActive:true},'HOLD_CLAUDE_OWNS_JOB'],
  [{...baseline,atomicCodexClaim:false},'HOLD_NO_ATOMIC_CLAIM'],
  [{...baseline,checkpointValid:false},'HOLD_CHECKPOINT_INCOMPLETE'],
  [{...baseline,assetsVerified:false},'HOLD_CHECKPOINT_INCOMPLETE'],
  [{...baseline,externalActionUncertain:true},'HOLD_RECONCILE'],
  [baseline,'ELIGIBLE_FOR_BACKUP_DRY_RUN']
];
for (const [job,expected] of tests) assert.equal(decide(job),expected);
console.log('PASS: 8 offline safety checks; no live Codex invocation or publishing performed.');
