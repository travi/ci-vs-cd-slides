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
const codeStyle = {fontSize: '1.25rem', padding: 0, color: 'white'};
const images = {
  testInProduction: require('../assets/test-in-production.jpg')
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

      <Slide transition={['slide']} bgColor="secondary">
        <Heading size={1} fit lineHeight={1} textColor="tertiary">
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

      <Slide transition={['zoom']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps fit>Confidence</Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="primary" caps>Typography</Heading>
        <Heading size={1} textColor="secondary">Heading 1</Heading>
        <Heading size={2} textColor="secondary">Heading 2</Heading>
        <Heading size={3} textColor="secondary">Heading 3</Heading>
        <Heading size={4} textColor="secondary">Heading 4</Heading>
        <Heading size={5} textColor="secondary">Heading 5</Heading>
        <Text size={6} textColor="secondary">Standard text</Text>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={6} textColor="secondary" caps>Standard List</Heading>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
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

      <Slide transition={['fade']} bgColor="quaternary" textColor="primary">
        <Image src={images.testInProduction.replace('/', '')} width="60%" />
      </Slide>

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={1} fit>
          Matt Travi
        </Heading>

        <List>
          <ListItem>
            <Link textColor="white" target="_blank" href="https://matt.travi.org">
              matt.travi.org
            </Link>
          </ListItem>
          <ListItem>
            <Link textColor="white" target="_blank" href="https://twitter.com/mtravi">
              twitter.com/mtravi
            </Link>
          </ListItem>
          <ListItem>
            <Link textColor="white" target="_blank" href="https://ci-vs-cd.travi.org">
              ci-vs-cd.travi.org
            </Link>
          </ListItem>
        </List>
      </Slide>

    </Deck>
  );
}
