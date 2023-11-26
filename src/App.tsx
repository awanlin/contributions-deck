import {
  Deck,
  Slide,
  Heading,
  DefaultTemplate,
  UnorderedList,
  ListItem,
  Text,
} from 'spectacle';

const theme = {
  fonts: {
    header: 'Helvetica Neue, sans-serif',
    text: 'Helvetica Neue, sans-serif',
  },
  colors: {
    primary: '#ebf2fc',
    secondary: '#36baa2',
  },
};

function App() {
  return (
    <Deck theme={theme} template={<DefaultTemplate />}>
      <Slide backgroundColor="#1b1b1d">
        <Heading>00: Whoami?</Heading>
        <UnorderedList>
          <ListItem>
            <Text>Software Developer for the last 15 years</Text>
          </ListItem>
          <ListItem>
            <Text>
              Core experience in Microsoft technologies - .NET, SQL Server,
              Azure DevOps, etc.
            </Text>
          </ListItem>
          <ListItem>
            <Text>Worked at RAPID RTC/Keyloop in the Automotive space</Text>
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>01: Set the stage</Heading>
        <UnorderedList>
          <ListItem>
            <Text>Zero TypeScript/JavaScript, React, and Node experience</Text>
          </ListItem>
          <ListItem>
            <Text>No work policy to be able to contribute</Text>
          </ListItem>
          <ListItem>
            <Text>Never contributed before</Text>
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>02: Started with Logging Issues</Heading>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>03: Connecting with the Community on Discord</Heading>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>04: Finally! Permission to push</Heading>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>05: Fixed a small bug</Heading>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>06: Then something fun</Heading>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>07: Here comes the 1st plugin</Heading>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>08: Hacktoberfest, who doesn't like a free t-shirt?</Heading>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>
          09: Community Support becomes a steady source of contributions
        </Heading>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>10: One more thing...</Heading>
      </Slide>
    </Deck>
  );
}

export default App;
