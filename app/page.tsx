import Image from "next/image"
import Link from "next/link";
import {
  // A,
  Abbr,
  Address,
  Area,
  Article,
  Aside,
  Audio,
  B,
  // Base,
  // Bdi,
  // Bdo,
  Blockquote,
  // Body,
  Br,
  // Button,
  // Canvas,
  // Caption,
  // Cite,
  Code,
  // Col,
  // Colgroup,
  // Data,
  Datalist,
  Dd,
  Del,
  Details,
  Dfn,
  // Dialog,
  Div,
  Dl,
  Dt,
  Em,
  // Embed,
  Fieldset,
  Figcaption,
  Figure,
  Footer,
  Form,
  H1,
  Header,
  // Hgroup,
  Hr,
  // Html,
  I,
  Iframe,
  // Img,
  Input,
  // Ins,
  Kbd,
  Label,
  Legend,
  Li,
  // Link,
  Main,
  Map,
  Mark,
  Menu,
  Meter,
  Nav,
  Object,
  Ol,
  Optgroup,
  Option,
  // Output,
  P,
  // Picture,
  // Portal,
  Pre,
  Progress,
  // Q,
  // Rp,
  Rt,
  Ruby,
  S,
  Samp,
  // Script,
  // Search,
  Section,
  Select,
  // Slot,
  Small,
  Source,
  Span,
  // Strong,
  // Style,
  Sub,
  Summary,
  Sup,
  Table,
  Tbody,
  Td,
  Template,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Time,
  // Title,
  Tr,
  Track,
  U,
  Ul,
  Var,
  Video,
} from '@/components';

export default function Page() {
  return (
    <>
        <Header>
          <Nav>
          <Menu>
            <Li>
              <Link href="#">Home</Link>
            </Li>
            <Li>
              <Link href="#">About</Link>
            </Li>
            <Li>
              <Link href="#">Contact</Link>
            </Li>
            </Menu>
          </Nav>
        <H1>Page Title</H1>
        </Header>
      <Main>
        <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi lacus,
            auctor sit amet purus vel, gravida luctus lectus. Aenean rhoncus dapibus enim, sit amet faucibus leo ornare vitae. <br />
          <Span> Span </Span>
          <B>Bold word</B>
          <I>italic</I>
          <Em>emphasis</Em>
          <Mark>mark</Mark>
          <Small> small </Small>
          <Sub> sub </Sub>
          <Sup> sup </Sup>
          <U> Statements... </U>
          <Abbr title="National Aeronautics and Space Administration">NASA</Abbr>
          <Span><Del> dePrecated info </Del> <ins> new info </ins> </Span>
          <S> not relevant </S>
          <Link href="#link">link</Link>
          <Time dateTime={"2020-08-17 08:00"}>Monday at 8:00 AM</Time>
          <Ruby>ruby base<Rt />annotation</Ruby>
          <Br />
          <Kbd>CTRL</Kbd>+<Kbd>ALT</Kbd>+<Kbd>CANC</Kbd>
        </P>
      </Main>

      <P> This is a <q>short quote</q> </P>
      <Blockquote> This instead is a long quote that is going to use a lot of words and also cite who said that. —<cite>Some People</cite> </Blockquote>

      <Ol>
        <Li><data value="21053">data tag</data></Li>
        <Li><data value="23452">data tag</data></Li>
        <Li><data value="42545">data tag</data></Li>
        <Li>List item</Li>
        <Li>List item</Li>
        <Li>List item</Li>
      </Ol>

      <Ul>
        <Li>List item</Li>
        <Li>List item</Li>
        <Li>List item</Li>
        <Li>List item</Li>
        <Li>List item</Li>
        <Li>List item</Li>
      </Ul>

      <Hr />

      <Template>
          <h2>Hidden content (after page loaded).</h2>
      </Template>

      <Video width={640} height={480} src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4">
        <Track kind="subtitles" src="subtitles_de.vtt" srcLang="de" label={"Transcriptions in Dutch"} />
        <Track kind="subtitles" src="subtitles_en.vtt" srcLang="en" label={"Transcriptions in English"} />
        <Track kind="subtitles" src="subtitles_ja.vtt" srcLang="ja" label={"Transcriptions in Japanese"} />
          Sorry, your browser doesn't support HTML5 <code>video</code>, but you can
        download this video from the <Link href="https://archive.org/details/Popeye_forPresident" target="_blank">Internet Archive</Link>.
      </Video>

      <Object data="/assets/files/Lorem_ipsum.pdf" width={600} height={800} type="application/x-shockwave-flash">
          Please install the Shockwave plugin to watch this movie.
      </Object>

      <Pre>
        This is a Preformatted text.
          It keeps the spaces and line breaks.
      </Pre>

      <Code>print("Hello, World!")</Code>
      <P>
        <Var> variable </Var>
        <Samp>hello world</Samp>
      </P>
      <Table>
        <Thead>
          <Tr>
            <Th>Numbers</Th>
            <Th>Letters</Th>
            <Th>Colors</Th>
          </Tr>
        </Thead>
        <Tfoot>
          <Tr>
            <Td>123</Td>
            <Td>ABC</Td>
            <Td>RGB</Td>
          </Tr>
        </Tfoot>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>A</Td>
            <Td>Red</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>B</Td>
            <Td>Green</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>C</Td>
            <Td>Blue</Td>
          </Tr>
        </Tbody>
      </Table>

      <P> A <Dfn>definition</Dfn> is an explanation of the meaning of a word or phrase. </P>

      <Details>
        <Summary>Summary of content below</Summary>
        <P>Content 1</P>
        <P>Content 2</P>
        <P>Content 3</P>
        <P>Content 4</P>
      </Details>
      <Section>
        <H1>Content</H1>
        <P>Informations about content.</P>
      </Section>

      <Progress value="33" max="100"></Progress>
      <Meter value="11" min="0" max="45" optimum={40}>25 out of 45</Meter>

      <P> 2+2 = <output>4</output> </P>

      <Select>
        <Optgroup label="Choice [1-3]">
          <Option value="1">One</Option>
          <Option value="2">Two</Option>
          <Option value="3">Three</Option>
        </Optgroup>
        <Optgroup label="Choice [4-6]">
          <Option value="4">Four</Option>
          <Option value="5">Five</Option>
          <Option value="6">Six</Option>
        </Optgroup>
      </Select>

      <Div>
        <Div>
          <P>{`div > div > p`}</P>
        </Div>

        <Br />


      </Div>

      <Textarea rows={4} cols={50} />

      <Br />

      <Audio controls>
          I'm sorry. You're browser doesn't support HTML5 <code>audio</code>.
        <Source src="https://archive.org/download/ReclaimHtml5/ReclaimHtml5.ogg" type="audio/ogg" />
        <Source src="https://archive.org/download/ReclaimHtml5/ReclaimHtml5.mp3" type="audio/mpeg" />
      </Audio>
      <P>This is a recording of a talk called <cite>Reclaim HTML5</cite> which was orinally delieved in Vancouver at a
        <Link href="http://www.meetup.com/vancouver-javascript-developers/" target="_blank">Super VanJS Meetup</Link>.
        It is hosted by <Link href="https://archive.org/details/ReclaimHtml5" target="_blank">The Internet Archive</Link> and licensed under
        <Link href="http://creativecommons.org/licenses/by/3.0/legalcode" target="_blank">CC 3.0</Link>.</P>

      <Iframe src="https://open.spotify.com/embed?uri=spotify%3ATrack%3A67HxeUADW4H3ERfaPW59ma?si=PogFcGg9QqapyoPbn2lVOw" width="300" height="380"></Iframe>

      <Article>
        <Header>
          <H1>Title of Article</H1>
          <Span>by Arthur T. Writer</Span>
        </Header>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat sollicitudin nisi,
          at convallis nunc semper et. Donec ultrices odio ac purus facilisis, at mollis urna finibus.</P>
        <Figure>
            <Image src="https://placehold.it/600x300" alt="placeholder-image" width={600} height={300} />
          <Figcaption> Caption.</Figcaption>
        </Figure>
        <Footer> <Dl> <Dt>Published</Dt> <Dd>17 August 2020</Dd> <Dt>Tags</Dt> <Dd>Sample Posts, html example</Dd> </Dl> </Footer>
      </Article>

      <Form>
        <Fieldset>
          <Legend>Personal Information</Legend>
          <Label htmlFor="name">Name</Label><br />
          <Input name="name" id="name" /><br />
          <Label htmlFor="dob">Date of Birth</Label>
          <Br />
          <Input name="dob" id="dob" type="date" />
        </Fieldset>
      </Form>

      <Aside>
        <H1>Aside Title</H1>
        <P> P inside ASIDE tag </P>
      </Aside>
      <Map name="shapesmap"> <Area shape="rect" coords="29,32,230,215" href="#square" alt="Square" />
        <Area shape="circle" coords="360,130,100" href="#circle" alt="Circle" /> </Map>

        <Image src="https://placehold.it/100x100" alt="placeholder-image" width={100} height={100} />

      <Form action="" method="get">
        <Label htmlFor="browser">Choose your browser from the list:</Label>
        <Input list="browsers" name="browser" id="browser" />
        <Datalist id="browsers">
          <Option value="Edge" />
          <Option value="Firefox" />
          <Option value="Chrome" />
          <Option value="Opera" />
          <Option value="Safari" />
        </Datalist>
        <Input type="submit" />
      </Form>

      <Footer>
        <Address> relevant contacts <Link href="mailto:mail@example.com">mail</Link>.</Address>
        <Div> created by <Link href="https://blazardsky.space">@blazardsky</Link></Div>
      </Footer>

    </>
  );
}
