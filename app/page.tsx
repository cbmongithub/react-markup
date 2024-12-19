// import { Abbr, B, Blockquote, Br, Del, Em, Header, Heading, Hr, I, Kbd, Li, Main, Mark, Menu, Nav, Object, Ol, P, Rt, Ruby, S, Small, Span, Sub, Sup, Template, Time, Track, U, Ul, Video } from "@/components/backup";
import Image from "next/image"
import Dynamic from "@/components/dynamic";
import Link from "next/link";

const { P, B, I, H1, H2, H3, H4, H5, H6, Em, Mark, Object, Span, Main, Small, Nav, Li, Menu, Sub, Sup, U, Abbr, Del, S, Time, Ruby, Rt, Br, Kbd, Blockquote, Ol, Header, Ul, Hr, Template, Video, Track } = Dynamic;

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
        <H2>Subtitle</H2>
        <H3>Sub-subtitle</H3>
        <H4>Sub-sub-subtitle</H4>
        <H5>Sub-sub-sub-subtitle</H5>
        <H6>Sub-sub-sub-sub-subtitle</H6>
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
          <Span><Del> deprecated info </Del> <ins> new info </ins> </Span>
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

        <pre>
          This is a preformatted text.
          It keeps the spaces and line breaks.
        </pre>

        <code>print("Hello, World!")</code>
      <P>
          <var> variable </var> = 1000;
          <samp>Traceback (most recent call last):<br />NameError: name 'variabl' is not defined</samp>
      </P>
        <table>
          <thead>
            <tr>
              <th>Numbers</th>
              <th>Letters</th>
              <th>Colors</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>123</td>
              <td>ABC</td>
              <td>RGB</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>1</td>
              <td>A</td>
              <td>Red</td>
            </tr>
            <tr>
              <td>2</td>
              <td>B</td>
              <td>Green</td>
            </tr>
            <tr>
              <td>3</td>
              <td>C</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>

      <P> A <dfn>definition</dfn> is an explanation of the meaning of a word or phrase. </P>

        <details>
          <summary>Summary of content below</summary>
        <P>Content 1</P>
        <P>Content 2</P>
        <P>Content 3</P>
        <P>Content 4</P>
        </details>
        <section>
          <h1>Content</h1>
        <P>Informations about content.</P>
        </section>

        <progress value="33" max="100"></progress>
        <meter value="11" min="0" max="45" optimum={40}>25 out of 45</meter>

      <P> 2+2 = <output>4</output> </P>

        <select>
          <optgroup label="Choice [1-3]">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </optgroup>
          <optgroup label="Choice [4-6]">
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
          </optgroup>
        </select>

        <div>
          <div>
          <P>{`div > div > p`}</P>
          </div>

          <br />


        </div>
        <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
        </svg>

        <br />

      <textarea rows={4} cols={50} />

        <br />

        <audio controls>
          I'm sorry. You're browser doesn't support HTML5 <code>audio</code>.
          <source src="https://archive.org/download/ReclaimHtml5/ReclaimHtml5.ogg" type="audio/ogg" />
          <source src="https://archive.org/download/ReclaimHtml5/ReclaimHtml5.mp3" type="audio/mpeg" />
        </audio>
      <P>This is a recording of a talk called <cite>Reclaim HTML5</cite> which was orinally delieved in Vancouver at a
        <Link href="http://www.meetup.com/vancouver-javascript-developers/" target="_blank">Super VanJS Meetup</Link>.
        It is hosted by <Link href="https://archive.org/details/ReclaimHtml5" target="_blank">The Internet Archive</Link> and licensed under
        <Link href="http://creativecommons.org/licenses/by/3.0/legalcode" target="_blank">CC 3.0</Link>.</P>

      <iframe src="https://open.spotify.com/embed?uri=spotify%3ATrack%3A67HxeUADW4H3ERfaPW59ma?si=PogFcGg9QqapyoPbn2lVOw" width="300" height="380"></iframe>

        <article>
          <header>
            <h2>Title of Article</h2>
          <Span>by Arthur T. Writer</Span>
          </header>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat sollicitudin nisi,
          at convallis nunc semper et. Donec ultrices odio ac purus facilisis, at mollis urna finibus.</P>
          <figure>
            <Image src="https://placehold.it/600x300" alt="placeholder-image" width={600} height={300} />
            <figcaption> Caption.</figcaption>
          </figure>
          <footer> <dl> <dt>Published</dt> <dd>17 August 2020</dd> <dt>Tags</dt> <dd>Sample Posts, html example</dd> </dl> </footer>
        </article>

        <form>
          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="name">Name</label><br />
            <input name="name" id="name" /><br />
            <label htmlFor="dob">Date of Birth</label>
            <br />
            <input name="dob" id="dob" type="date" />
          </fieldset>
        </form>

        <aside>
        <P> P inside ASIDE tag </P>
        </aside>
        <map name="shapesmap"> <area shape="rect" coords="29,32,230,215" href="#square" alt="Square" />
          <area shape="circle" coords="360,130,100" href="#circle" alt="Circle" /> </map>

        <Image src="https://placehold.it/100x100" alt="placeholder-image" width={100} height={100} />

        <form action="" method="get">
          <label htmlFor="browser">Choose your browser from the list:</label>
          <input list="browsers" name="browser" id="browser" />
          <datalist id="browsers">
            <option value="Edge" />
            <option value="Firefox" />
            <option value="Chrome" />
            <option value="Opera" />
            <option value="Safari" />
          </datalist>
          <input type="submit" />
        </form>

        <footer>
        <address> relevant contacts <Link href="mailto:mail@example.com">mail</Link>.</address>
        <div> created by <Link href="https://blazardsky.space">@blazardsky</Link></div>
        </footer>

    </>
  );
}
