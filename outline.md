# CI vs CD: The Unexpected Conflict

## Automation

* Discussion of CI and CD often focuses on automation
* Focusing on automation misses the details of human impacts to process

## Fear

## Confidence

* As engineers, its easy to jump to solutions that involve automation
* Automation does have a place
* Focus on the goal of having confidence rather than how we get there
* Automation, by itself, doesn't overcome the human fear

## Continuous Integration

* Harder challenge

### Blockers

* PR Review Gates
* Waiting for story completion before integration

### Code not in `master` is Debt

### Minimizing PR Review Gates

* Reviews should not verify that it works
  * Should have already been verified by automated tests
  * Acceptance tests could be defined collaboratively by team
* Integrate working code before implementing requests from code review comments
* Review after code is in `master`
* Consider pushing code directly to `master`

### Integrate Early, Integrate Often

* Integrate progress that doesn't make anything worse
  * Verifing correctness with automated tests can reduce the scope of meaningful
    progress since the UI doesnt have to be involved
