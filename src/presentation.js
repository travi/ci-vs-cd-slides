import React from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';

require('normalize.css');

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quaternary: '#CECECE'
});
const codeStyle = {
  fontSize: '1.25rem',
  padding: 0,
  color: 'white',
  background: 'transparent'
};
const images = {
  ciCdCd: require('../assets/ci-cd-cd.png'),
  thatWord: require('../assets/that-word.jpg'),
  killAllHumans: require('../assets/kill-all-humans.png'),
  concurrentDeployments: require('../assets/concurrent-deployments.png'),
  testInProduction: require('../assets/test-in-production.jpg'),
  deployOnFriday: require('../assets/its-friday-afternoon-deploy-all-things.jpg')
};

preloader(images);

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>

      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit lineHeight={1} textColor="secondary">
          CI vs CD
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit caps bold>
          the unexpected conflict
        </Text>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} fit lineHeight={1} textColor="primary">
          CI / CD
        </Heading>
      </Slide>

      <Slide transition={['slide']} bgColor="secondary">
        <Heading size={1} textColor="primary">
          In Theory:
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          complementary halves of the same goal
        </Heading>
      </Slide>

      <Slide transition={['slide']} bgColor="secondary">
        <Heading size={1} textColor="primary">
          In Practice:
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          human influence can make them incompatible
        </Heading>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Fear</Heading>
      </Slide>

      <Slide transition={['slide']} bgColor="secondary">
        <Heading size={1} textColor="primary">
          Product:
        </Heading>
        <List textColor="tertiary">
          <ListItem>Defects deployed to production</ListItem>
          <ListItem>Defects assumed to make application unusable</ListItem>
        </List>
      </Slide>

      <Slide transition={['slide']} bgColor="secondary">
        <Heading size={1} textColor="primary">
          Engineering:
        </Heading>
        <List textColor="tertiary">
          <ListItem>Dirty Code</ListItem>
          <ListItem>Support Calls</ListItem>
        </List>
      </Slide>

      <Slide transition={['fade']}>
        <Heading size={1} fit>
          First, some terminology...
        </Heading>
      </Slide>

      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Continuous Integration
        </Heading>
        <Heading size={1} fit>
          favoring code in
          {' '}
          <Code style={codeStyle}>
            master
          </Code>
          {' '}
          over long-lived branches
        </Heading>
      </Slide>

      <Slide bgColor="white" transition={['slide']}>
        <figure>
          <Image src={images.ciCdCd.replace('/', '')} width="100%" />
          <figcaption>
            Image credit:
            {' '}
            <a
              href="https://clm-consulting.com/services/it-transformations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLM Consulting
            </a>
          </figcaption>
        </figure>
      </Slide>

      <Slide bgColor="white" transition={['slide']}>
        <figure>
          <Image src={images.thatWord.replace('/', '')} width="100%" />
          <figcaption>
            Image credit:
            {' '}
            <a
              href="http://m.prdaily.com/Main/Articles/8_words_that_may_not_mean_what_you_think_they_mean_11715.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              PR Daily
            </a>
          </figcaption>
        </figure>
      </Slide>

      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Continuous Delivery
        </Heading>
        <Heading size={1} fit>
          <Code style={codeStyle}>
            master
          </Code>
          {' '}
          is always deployable
        </Heading>
      </Slide>

      <Slide bgColor="white" transition={['slide']}>
        <figure>
          <Image src={images.ciCdCd.replace('/', '')} width="100%" />
          <figcaption>
            Image credit:
            {' '}
            <a
              href="https://clm-consulting.com/services/it-transformations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLM Consulting
            </a>
          </figcaption>
        </figure>
      </Slide>

      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Continuous Deployment
        </Heading>
        <Heading size={1} fit>
          <Code style={codeStyle}>
            master
          </Code>
          {' '}
          <S type="italic">is</S>
          {' '}
          production
        </Heading>
      </Slide>

      <Slide bgColor="white" transition={['slide']}>
        <figure>
          <Image src={images.ciCdCd.replace('/', '')} width="100%" />
          <figcaption>
            Image credit:
            {' '}
            <a
              href="https://clm-consulting.com/services/it-transformations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLM Consulting
            </a>
          </figcaption>
        </figure>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Continuous</Heading>
        <Heading size={2} textColor="secondary" caps fit>Delivery</Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit>
          <Code style={codeStyle}>
            master
          </Code>
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          is always deployable
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          All necessary verification is done
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          <S type="italic">before</S>
          {' '}
          merging to
          {' '}
          <Code style={codeStyle}>
            master
          </Code>
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          All that remains when approval is given to deploy
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          is to actually deploy
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          Someone simply has to
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          hit the deploy button
        </Heading>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Continuous</Heading>
        <Heading size={2} textColor="secondary" caps fit>Deployment</Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit>
          <Code style={codeStyle}>
            master
          </Code>
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          <S type="italic">is</S>
          {' '}
          production
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          Every commit to
          {' '}
          <Code style={codeStyle}>
            master
          </Code>
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          triggers the deployment pipeline
        </Heading>
      </Slide>

      <Slide bgColor="quaternary" transition={['slide']}>
        <figure>
          <Image src={images.concurrentDeployments.replace('/', '')} width="100%" />
          <figcaption>
            Image credit:
            {' '}
            <a
              href="https://go.cloudbees.com/docs/cloudbees-documentation/cookbook/book.html#_concepts"
              target="_blank"
              rel="noopener noreferrer"
            >
              CloudBees Documentation
            </a>
          </figcaption>
        </figure>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Continuous Delivery</Heading>
        <Heading size={2} textColor="secondary" caps>vs</Heading>
        <Heading size={1} textColor="primary" caps fit>Continuous Deployment</Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary">
          Goal:
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          Strive for Continuous Deployment
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          over Continuous Delivery
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          Build Confidence
        </Heading>
        <Heading size={2} fit textColor="primary">
          through Automation
        </Heading>
        <List textColor="tertiary">
          <ListItem>Repeatable process makes deploys non-events</ListItem>
          <ListItem>Team trusts the process</ListItem>
        </List>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          Humans and Computers
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          have different strengths
        </Heading>
      </Slide>

      <Slide bgColor="quaternary" transition={['slide']}>
        <Image src={images.killAllHumans.replace('/', '')} width="70%" />
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary">
          Mention semantic-release/deployment of packages in addition to apps
        </Heading>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Confidence</Heading>
      </Slide>

      <Slide bgColor="quaternary" transition={['slide']}>
        <Image src={images.deployOnFriday.replace('/', '')} width="70%" />
      </Slide>

      <Slide transition={['fade']} bgColor="secondary">
        <Heading size={1} textColor="primary" caps>Confidence</Heading>

        <List textColor="tertiary">
          <ListItem>There is no &quot;right&quot; answer</ListItem>
          <ListItem>Time &amp; experimentation required</ListItem>
        </List>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Honesty</Heading>
      </Slide>

      <Slide transition={['slide']} bgColor="secondary">
        <Heading size={1} textColor="primary" caps>Be Honest With the Team</Heading>

        <List textColor="tertiary">
          <ListItem>
            Issues will make it to production

            <List style={{marginLeft: 60}}>
              <ListItem>While you&apos;re determining your automation coverage</ListItem>
              <ListItem>Even after you&apos;re confident in your process</ListItem>
            </List>
          </ListItem>
        </List>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Trust</Heading>
      </Slide>

      <Slide transition={['slide']} bgColor="secondary">
        <Heading size={1} textColor="primary" caps>Trust</Heading>

        <List textColor="tertiary">
          <ListItem>Promise only what is realistic</ListItem>
          <ListItem>Discuss decisions made about the process</ListItem>
          <ListItem>Be sure team is aligned about strategy and trade-offs</ListItem>
        </List>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Continuous</Heading>
        <Heading size={2} textColor="secondary" caps fit>Integration</Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          Favoring code in
          {' '}
          <Code style={codeStyle}>
            master
          </Code>
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          over long-lived branches
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          Often mis-defined as the steps carried out
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          by a &quot;Continuous Integration&quot; server
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          A &quot;Continuous Integration&quot; server
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          doesn&apos;t do the integration
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          A &quot;Continuous Integration&quot; server
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          ensures that integration happened
          {' '}
          <S type="italic">safely</S>
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          Integrating Continuously
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          makes the latest changes available
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          to team members in
          {' '}
          <Code style={codeStyle}>
            master
          </Code>
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          Written code, not yet in
          {' '}
          <Code style={codeStyle}>
            master
          </Code>
          {' '}
          is
        </Heading>
        <Heading size={2} fit caps textColor="tertiary">
          Debt
        </Heading>
      </Slide>

      <Slide transition={['fade']}>
        <Heading size={1} fit>
          Clarification about debt...
        </Heading>
      </Slide>

      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Technical Debt Metaphor
        </Heading>
        <BlockQuote>
          <Quote>
            During the planning or execution of a software project, decisions are made to defer necessary work.
          </Quote>
          <Cite><a href="http://wiki.c2.com/?TechnicalDebt">C2 Wiki</a></Cite>
        </BlockQuote>
      </Slide>

      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Technical Debt
        </Heading>
        <BlockQuote>
          <Quote>
            A big pile of deferred work can gum up a project
          </Quote>
          <Cite><a href="http://wiki.c2.com/?TechnicalDebt">C2 Wiki</a></Cite>
        </BlockQuote>
      </Slide>

      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Debt Interest
        </Heading>
        There is a cost to leaving the debt in place
      </Slide>

      <Slide bgColor="black" transition={['slide']}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Metaphor Confusion
        </Heading>
        <BlockQuote>
          <Quote>
            ...you could write code poorly with the intention of doing a good job later...
          </Quote>
          <Cite><a href="http://wiki.c2.com/?WardExplainsDebtMetaphor">Ward Cunningham</a></Cite>
        </BlockQuote>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} fit textColor="primary">
          A
          {' '}
          <S type="italic">decision</S>
          {' '}
          was made to
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          defer something to get something else sooner
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Integration Debt
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          Deferring integration in favor of:
        </Heading>
        <List textColor="tertiary">
          <ListItem>Preventing defects from reaching production</ListItem>
          <ListItem>Cleaning poorly factored code</ListItem>
        </List>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Integration Debt Interest
        </Heading>
        <List textColor="tertiary">
          <ListItem>Team member access to changes delayed</ListItem>
          <ListItem>More likely to conflict when integrating</ListItem>
        </List>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Continuous Deployment</Heading>
        <Heading size={2} textColor="secondary" caps>vs</Heading>
        <Heading size={1} textColor="primary" caps fit>Continuous Integration</Heading>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Incompatible?</Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          CI and CD are less compatible
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          than is often understood
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          All hope
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          is not lost
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Ensure that
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          decisions are
          {' '}
          <S type="italic">intentional</S>
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Ensure that
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          decisions are
          {' '}
          <S type="italic">informed</S>
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          If We Assume
        </Heading>
        <List textColor="tertiary">
          <ListItem>Team trusts deployment process</ListItem>
          <ListItem>Confidence in all changes before integration</ListItem>
        </List>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Continuous Deployment
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          is Less Challenging Than Continuous Integration
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Fear Makes it Difficult
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          to Integrate Continuously
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Integration Blockers
        </Heading>
        <List textColor="tertiary">
          <ListItem>Atomic Contributions</ListItem>
          <ListItem>PR Review Gates</ListItem>
          <ListItem>Manual Integration Testing</ListItem>
          <ListItem>Manual Regression Testing</ListItem>
        </List>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote>
            <Appear>
              <span>Make it work,</span>
            </Appear>
            <br />
            <Appear>
              <span>make it right,</span>
            </Appear>
            <br />
            <Appear>
              <span>make it fast.</span>
            </Appear>
          </Quote>
          <Appear>
            <Cite>Kent Beck</Cite>
          </Appear>
        </BlockQuote>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Make it Work</Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Make It Work
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          And Prove It!
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          It Doesn&apos;t Work
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          Unless Your Tests Prove It
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Code Reviews Should Not:
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          Verify that the code works
        </Heading>

        <List textColor="tertiary">
          <ListItem>Already proven by tests</ListItem>
          <ListItem>Acceptance tests can be a collaborative effort</ListItem>
        </List>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Code Reviews Should Not:
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          Verify that a Story is complete
        </Heading>

        <List textColor="tertiary">
          <ListItem>Separate release from integration/deployment</ListItem>
          <ListItem>Integrate early and often</ListItem>
        </List>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Something needs to go here
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          about atomic contributions and regression tests (ROI calculation changes)
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          PR Reviews Should
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          Have High Priority
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Small PRs
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          Are Far Easier to Review Effectively
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Small PRs
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          Make It Expensive To Test Each Manually
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Small PRs
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          Make Investing in Automated Test More Valuable
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          If it Works,
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          Integrate It!
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          What about QA?
        </Heading>

        <Image src={images.killAllHumans.replace('/', '')} width="60%" />
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Since we&apos;re already confident
        </Heading>

        <List textColor="tertiary">
          <ListItem>There are no regressions</ListItem>
          <ListItem>The current change is either dark or passes acceptance tests</ListItem>
        </List>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Do we actually need a human
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          to verify the system further?
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={4} textColor="primary" fit>
          &nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;
        </Heading>
        <Heading size={4} textColor="tertiary">
          Exploratory Testing
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary">
          Exploratory Testing
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          Can be done after integration
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="quaternary" textColor="primary">
        <Image src={images.testInProduction.replace('/', '')} width="60%" />
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Make it Right</Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Code Reviews Should Not:
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          Nitpick code style
        </Heading>

        <List textColor="tertiary">
          <ListItem>Use a linter</ListItem>
          <ListItem>Favor consistency over personal preference</ListItem>
          <ListItem>Add missing rules over time</ListItem>
          <ListItem>Avoid wasting time on preferences that aren&apos;t worth a rule</ListItem>
        </List>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Code Reviews Should:
        </Heading>

        <List textColor="tertiary">
          <ListItem>Share improved techniques</ListItem>
          <ListItem>Suggest improved designs</ListItem>
          <ListItem>Suggest consistent reuse</ListItem>
        </List>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Addressing Review Comments
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          Can be Handled
          {' '}
          <S type="italic">After</S>
          {' '}
          Integration
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Small PRs
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          Can Make it Difficult for a Reviewer to not Block Integration
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Can Code Reviews
        </Heading>
        <Heading size={2} fit textColor="tertiary">
          Be Done After Integration?
        </Heading>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Make it Fast</Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Performance Optimizations
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          Can be Integrated Separately
        </Heading>
      </Slide>

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Recommendations</Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Implement
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          Continuous Deployment
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Be Confident In All Changes
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          Before Integration
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Be Very Critical
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          Of Tasks That Block Integration
        </Heading>
      </Slide>

      <Slide bgColor="secondary" transition={['slide']}>
        <Heading size={1} textColor="primary" fit>
          Justify Investment In Automation
        </Heading>
        <Heading size={2} textColor="tertiary" fit>
          By Making Meaningful Improvements to Your Process
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="quaternary" textColor="secondary">
        <Heading size={1} fit>
          Matt Travi
        </Heading>

        <List>
          <ListItem>
            <Link textColor="secondary" target="_blank" href="https://matt.travi.org">
              matt.travi.org
            </Link>
          </ListItem>
          <ListItem>
            <Link textColor="secondary" target="_blank" href="https://twitter.com/mtravi">
              twitter.com/mtravi
            </Link>
          </ListItem>
          <ListItem>
            <Link textColor="secondary" target="_blank" href="https://ci-vs-cd.travi.org">
              ci-vs-cd.travi.org
            </Link>
          </ListItem>
        </List>
      </Slide>

    </Deck>
  );
}
