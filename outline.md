# CI vs CD: The Unexpected Conflict

## Automation

* Discussion of CI and CD often focuses on automation
* Focusing on automation misses the details of human impacts to process

## Fear
* Prevent any defects from being deployed to production
* "Defects" assumed to be worst case where users cant use the app at all

* Deploy at 5:00 on Friday

## Confidence
* Engineering

* As engineers, its easy to jump to solutions that involve automation
  * Automation does have a place
  * Focus on the goal of having confidence rather than how we get there
* Automation, by itself, doesn't overcome the human fear

* Pipeline stops before deploying if _anything_ fails

## Focusing on Automation/Metrics over Confidence
* What is the value of the automation strategy that you follow?
* What is the value of the metrics that you track?

* 100% unit test coverage doesnt necessarily result in confidence
  * Is this enough to be confident? Maybe/maybe not
  * Is the integration of the units verified somehow?
  * Is assertion coverage what is measured, or only execution coverage?
    (mutation testing)
  * Coverage metrics often mislead and can drive bad behavior. (TDD coverage vs
    test-after coverage)

## Things will be missed
* sometimes unintentionally in areas you dint realize you had gaps
* sometimes in intentional areas where the effort to automate catching it dont
  outweigh the effort (ui often falls here)

## Trust
* be open with product/QA about what to expect
* be clear about what has been decided to not be covered and make sure other
  groups agree with the risk vs effort decisions

## Be prepared to learn
* do not expect to have the right mix of automated coverage from the start
* you will learn about gaps in your coverage when defects react production.
  * hopefully your existing decisions ensure that these are not catastrophic
  * when you find a gap, the team needs to decide if/when its worth the
    investment to close
* try to implement early when user impact is low so you have some runway to
  determine what you need to deploy confidently

## Defect Risk

* High: Users cannot use the app at all
* Medium: Users can use the app, but some functionality is broken
* Low: All functionality works, but something is visually out of place
  * ROI likely not worth it to automate here, but tools like Percy are great for
    automating if it is valuable enough to your project

## Continuous Integration
* Integration of code, not an automated build/test server

* Harder challenge

### Blockers

* PR Review Gates
* Waiting for story completion before integration
* Manual Acceptance Testing
* Manual Regression Testing

### Code not in `master` is Debt

### Minimizing PR Review Gates

* Reviews should not verify that it works
  * Should have already been verified by automated tests
  * Acceptance tests could be defined collaboratively by team
* Integrate working code before implementing requests from code review comments
* Keep PRs small, easier to review, when using a PR flow
  * use techniques like "make the change easy, then make the easy change"
* Consider pushing code directly to `master`
* Review after code is in `master`
* Lint to avoid bikeshedding

### Integrate Early, Integrate Often

* Integrate progress that doesn't make anything worse
  * Verifing correctness with automated tests can reduce the scope of
    meaningful progress since the UI doesnt have to be involved
* Integrate dark (separate release from integration/deployment)
* Atomic contributions are popular in OSS. Shouldn't product teams learn from
  OSS success?
  * Important difference: drive-by contributors
    * No guarantee that partial work will be completed, leaving maintainers to
      decide whether to 
      * complete abandoned work
      * back it out
      * maintain "dead" code until someone else finishes
    * Branches are safer for OSS
    
### Multiple Deployment Environments

* Are multiple really needed?
* Do they need to progress linearly?

### Manual Verification
* Have enough automation to be confident about high-risk functionality
* Accept that low risk defects will make it to production occasionally
  * Usually quick to fix once noticed
  * Being close to continuous deployment ensures a fix is deployed as soon as
    possible
* If enough automated to be confident, mostly exploratory testing remains
  * Ensure recent stories defined all necessary requirements
  * Look for edge cases that weren't considered/defined
* Avoid gating deploy with manual testing that wouldnt prevent deployment from
  moving forward anyway
* Explore in production
