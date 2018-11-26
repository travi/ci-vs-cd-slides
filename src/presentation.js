import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quaternary: '#CECECE'
});

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
            Make it work,<br />
            make it right,<br />
            make it fast.
          </Quote>
          <Cite>Kent Beck</Cite>
        </BlockQuote>
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
