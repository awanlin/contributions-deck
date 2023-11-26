import {
  Deck,
  Slide,
  Heading,
  DefaultTemplate,
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
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>01: Set the stage</Heading>
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
