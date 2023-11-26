import { Deck, Slide, Heading, DefaultTemplate, FlexBox } from 'spectacle';
import MicrosoftLogo from './images/microsoft.svg';
import TypeScriptLogo from './images/typescript.svg';
import NodeJsLogo from './images/node-js.svg';
import ReactLogo from './images/react.svg';
import DiscordLogo from './images/discord.svg';
import AzureDevOpsLogo from './images/azure-devops.svg';
import BackstageLogo from './images/backstage.svg';
import SpotifyLogo from './images/spotify.svg';

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
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            👨‍💻
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🇨🇦
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            <img src={MicrosoftLogo} alt="Microsoft Logo" width={200} />
          </p>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>01: Set the stage</Heading>
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            <img src={TypeScriptLogo} alt="TypeScript Logo" width={200} />
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            <img src={NodeJsLogo} alt="Node JS Logo" width={200} />
          </p>
          <p style={{ fontSize: '200px', margin: '0', textAlign: 'center' }}>
            <img src={ReactLogo} alt="React Logo" width={200} />
          </p>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>02: Started with Logging Issues</Heading>
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🐛
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🚀
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
            }}
          >
            🔌
          </p>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>03: Connecting with the Community on Discord</Heading>
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            👨‍👩‍👧‍👦
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            <img src={DiscordLogo} alt="Discord Logo" width={200} />
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🦆
          </p>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>04: Finally! Permission to push</Heading>
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            ⚖️
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            💬
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🫷
          </p>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>05: Fixed a small bug</Heading>
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🐞
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🐜
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🪲
          </p>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>06: Then something fun</Heading>
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🕰️
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🥳
          </p>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>07: Here comes the 1st plugin</Heading>
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🔌
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            <img src={AzureDevOpsLogo} alt="Azure DevOps Logo" width={200} />
          </p>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>08: Hacktoberfest, who doesn't like a free t-shirt?</Heading>
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🍁
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            👕
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            🎃
          </p>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>
          09: Community Support becomes a steady source of contributions
        </Heading>
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            ♾️
          </p>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#1b1b1d">
        <Heading>10: One more thing...</Heading>
        <FlexBox>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            <img src={SpotifyLogo} alt="Spotify Logo" width={200} />
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            ❤️
          </p>
          <p
            style={{
              fontSize: '200px',
              margin: '0',
              textAlign: 'center',
              paddingRight: '75px',
            }}
          >
            <img src={BackstageLogo} alt="Backstage Logo" width={200} />
          </p>
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default App;
