# ADR 001: Adopt GitHub Flow as unified branching strategy

## Status
Accepted

## Context
Five teams use inconsistent branching strategies causing merge conflicts,
broken main branch, and unclear production state.

## Decision
Adopt GitHub Flow: short-lived feature branches, PR-based merges to main,
deploy from main.

## Consequences
- All teams follow one workflow
- Main is always deployable
- No long-lived branches (feature flags for incomplete work)
- Requires branch protection and CI gates
