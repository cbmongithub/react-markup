import Image from "next/image";

export const Header = ({ children, ...props }: ReactMarkup.Component) => {
    return (
        <header {...props}>
            {children}
        </header>
    );
}

export const Main = ({ children, ...props }: ReactMarkup.Component) => {
    return (
        <main {...props}>
            {children}
        </main>
    );
}

export const Article = ({ children, ...props }: ReactMarkup.Component) => {
    return (
        <article {...props}>
            {children}
        </article>
    );
}

export const Li = ({ children, ...props }: ReactMarkup.Component<HTMLLIElement>) => {
    return (
        <li {...props}>
            {children}
        </li>
    );
}

export const Menu = ({ children, ...props }: ReactMarkup.Component<HTMLMenuElement>) => {
    return (
        <menu {...props}>
            {children}
        </menu>
    );
}

export const Nav = ({ children, ...props }: ReactMarkup.Component) => {
    return (
        <nav {...props}>
            {children}
        </nav>
    );
}

export const Ol = ({ children, ...props }: ReactMarkup.Component<HTMLOListElement>) => {
    return (
        <ol {...props}>
            {children}
        </ol>
    );
}

export const P = ({ children, ...props }: ReactMarkup.Component<HTMLParagraphElement>) => {
    return (
        <p {...props}>
            {children}
        </p>
    );
}

export const Section = ({ children, ...props }: ReactMarkup.Component) => {
    return (
        <section {...props}>
            {children}
        </section>
    );
}

export const Span = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <span {...props}>
            {children}
        </span>
    );
}

export const Strong = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <strong {...props}>
            {children}
        </strong>
    );
}

export const Ul = ({ children, ...props }: ReactMarkup.Component<HTMLUListElement>) => {
    return (
        <ul {...props}>
            {children}
        </ul>
    );
}

export const A = ({ children, href, ...props }: ReactMarkup.Component<HTMLAnchorElement> & {
    href: string;
}) => {
    return (
        <a href={href} {...props}>
            {children}
        </a>
    );
}

export const Heading = ({ as: Tag, children, ...props }: ReactMarkup.Component<HTMLHeadingElement> & {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: string;
}) => {
    return <Tag {...props}>{children}</Tag>;
};

export const Img = ({ src, alt, ...props }: ReactMarkup.Component<HTMLImageElement> & {
    src: string;
    alt: string;
}) => {
    return (
        <Image priority={true} src={src} alt={alt} width={400} height={400} {...props} />
    );
}

export const Video = ({ width, height, src, children, ...props }: ReactMarkup.Component<HTMLVideoElement> & {
    width: number;
    height: number;
    src: string;
}) => {
    return (
        <video width={width} height={height} src={src} {...props} controls>
            {children}
        </video>
    );
}

export const Source = ({ src, type, ...props }: ReactMarkup.Component<HTMLSourceElement> & {
    src: string;
    type: string;
}) => {
    return (
        <source src={src} type={type} {...props} />
    );
}

export const Track = ({ src, kind, srcLang, label, ...props }: ReactMarkup.Component<HTMLTrackElement> & {
    src: string;
    kind: string;
    srcLang: string;
    label: string;
}) => {
    return (
        <track src={src} kind={kind} srcLang={srcLang} label={label} {...props} />
    );
}

export const Audio = ({ src, ...props }: ReactMarkup.Component<HTMLAudioElement> & {
    src: string;
}) => {
    return (
        <audio src={src} {...props} />
    );
}

export const Area = ({ children, ...props }: ReactMarkup.Component<HTMLAreaElement>) => {
    return (
        <area {...props}>
            {children}
        </area>
    );
}

export const Base = ({ children, ...props }: ReactMarkup.Component<HTMLBaseElement>) => {
    return (
        <base {...props}>
            {children}
        </base>
    );
}


export const Button = ({ children, ...props }: ReactMarkup.Component<HTMLButtonElement>) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
}

export const Canvas = ({ children, ...props }: ReactMarkup.Component<HTMLCanvasElement>) => {
    return (
        <canvas {...props}>
            {children}
        </canvas>
    );
}

export const Datalist = ({ children, ...props }: ReactMarkup.Component<HTMLDataListElement>) => {
    return (
        <datalist {...props}>
            {children}
        </datalist>
    );
}

export const Fieldset = ({ children, ...props }: ReactMarkup.Component<HTMLFieldSetElement>) => {
    return (
        <fieldset {...props}>
            {children}
        </fieldset>
    );
}

export const Legend = ({ children, ...props }: ReactMarkup.Component<HTMLLegendElement>) => {
    return (
        <legend {...props}>
            {children}
        </legend>
    );
}

export const Form = ({ children, ...props }: ReactMarkup.Component<HTMLFormElement>) => {
    return (
        <form {...props}>
            {children}
        </form>
    );
}

export const B = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <b {...props}>
            {children}
        </b>
    );
}

export const Br = ({ ...props }: ReactMarkup.Component<HTMLBRElement>) => <br {...props} />;

export const Kbd = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <kbd {...props}>
            {children}
        </kbd>
    );
}

export const Mark = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <mark {...props}>
            {children}
        </mark>
    );
}

export const Small = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <small {...props}>
            {children}
        </small>
    );
}

export const Sub = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <sub {...props}>
            {children}
        </sub>
    );
}

export const Sup = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <sup {...props}>
            {children}
        </sup>
    );
}

export const U = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <u {...props}>
            {children}
        </u>
    );
}

export const Abbr = ({ children, title, ...props }: ReactMarkup.Component<HTMLSpanElement> & {
    title: string;
}) => {
    return (
        <abbr title={title} {...props}>
            {children}
        </abbr>
    );
}

export const Del = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <del {...props}>
            {children}
        </del>
    );
}

export const Ins = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <ins {...props}>
            {children}
        </ins>
    );
}

export const S = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <s {...props}>
            {children}
        </s>
    );
}

export const Time = ({ children, dateTime, ...props }: ReactMarkup.Component<HTMLTimeElement> & {
    dateTime: string;
}) => {
    return (
        <time dateTime={dateTime} {...props}>
            {children}
        </time>
    );
}

export const Ruby = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <ruby {...props}>
            {children}
        </ruby>
    );
}

export const Rt = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <rt {...props}>
            {children}
        </rt>
    );
}

export const Q = ({ children, ...props }: ReactMarkup.Component<HTMLQuoteElement>) => {
    return (
        <q {...props}>
            {children}
        </q>
    );
}

export const Blockquote = ({ children, ...props }: ReactMarkup.Component<HTMLQuoteElement>) => {
    return (
        <blockquote {...props}>
            {children}
        </blockquote>
    );
}

export const Data = ({ children, value, ...props }: ReactMarkup.Component<HTMLDataElement> & {
    value: string;
}) => {
    return (
        <data value={value} {...props}>
            {children}
        </data>
    );
}

export const Output = ({ children, ...props }: ReactMarkup.Component<HTMLOutputElement>) => {
    return (
        <output {...props}>
            {children}
        </output>
    );
}

export const Object = ({ children, data, type, width, height }: ReactMarkup.Component<HTMLObjectElement> & { data: string; type: string; width: number; height: number; }) => {
    return (
        <object width={width} height={height} data={data} type={type}>
            {children}
        </object>
    );
}


export const Code = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <code {...props}>
            {children}
        </code>
    );
}

export const Pre = ({ children, ...props }: ReactMarkup.Component<HTMLPreElement>) => {
    return (
        <pre {...props}>
            {children}
        </pre>
    );
}

export const Var = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <var {...props}>
            {children}
        </var>
    );
}

export const Samp = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <samp {...props}>
            {children}
        </samp>
    );
}

export const Dfn = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <dfn {...props}>
            {children}
        </dfn>
    );
}

export const Template = ({ children, ...props }: ReactMarkup.Component<HTMLTemplateElement>) => {
    return (
        <template {...props}>
            {children}
        </template>
    );
}

export const Details = ({ children, ...props }: ReactMarkup.Component<HTMLDetailsElement>) => {
    return (
        <details {...props}>
            {children}
        </details>
    );
}

export const Summary = ({ children, ...props }: ReactMarkup.Component) => {
    return (
        <summary {...props}>
            {children}
        </summary>
    );
}

export const Table = ({ children, ...props }: ReactMarkup.Component<HTMLTableElement>) => {
    return (
        <table {...props}>
            {children}
        </table>
    );
}

export const Caption = ({ children, ...props }: ReactMarkup.Component<HTMLTableCaptionElement>) => {
    return (
        <caption {...props}>
            {children}
        </caption>
    );
}

export const Col = ({ children, ...props }: ReactMarkup.Component<HTMLTableColElement>) => {
    return (
        <col {...props}>
            {children}
        </col>
    );
}

export const Colgroup = ({ children, ...props }: ReactMarkup.Component<HTMLTableColElement>) => {
    return (
        <colgroup {...props}>
            {children}
        </colgroup>
    );
}

export const Thead = ({ children, ...props }: ReactMarkup.Component<HTMLTableSectionElement>) => {
    return (
        <thead {...props}>
            {children}
        </thead>
    );
}

export const Tfoot = ({ children, ...props }: ReactMarkup.Component<HTMLTableSectionElement>) => {
    return (
        <tfoot {...props}>
            {children}
        </tfoot>
    );
}

export const Tbody = ({ children, ...props }: ReactMarkup.Component<HTMLTableSectionElement>) => {
    return (
        <tbody {...props}>
            {children}
        </tbody>
    );
}

export const Tr = ({ children, ...props }: ReactMarkup.Component<HTMLTableRowElement>) => {
    return (
        <tr {...props}>
            {children}
        </tr>
    );
}

export const Th = ({ children, ...props }: ReactMarkup.Component<HTMLTableHeaderCellElement>) => {
    return (
        <th {...props}>
            {children}
        </th>
    );
}


export const Td = ({ children, ...props }: ReactMarkup.Component<HTMLTableCellElement>) => {
    return (
        <td {...props}>
            {children}
        </td>
    );
}

export const Progress = ({ value, max, ...props }: ReactMarkup.Component<HTMLProgressElement> & {
    value: number;
    max: number;
}) => {
    return (
        <progress value={value} max={max} {...props} />
    );
}

export const Meter = ({ value, min, max, optimum, children, ...props }: ReactMarkup.Component<HTMLMeterElement> & {
    value: number;
    min: number;
    max: number;
    optimum: number;
}) => {
    return (
        <meter value={value} min={min} max={max} optimum={optimum} {...props}>
            {children}
        </meter>
    );
}

export const Select = ({ children, ...props }: ReactMarkup.Component<HTMLSelectElement>) => {
    return (
        <select {...props}>
            {children}
        </select>
    );
}

export const Optgroup = ({ children, label, ...props }: ReactMarkup.Component<HTMLOptGroupElement> & {
    label: string;
}) => {
    return (
        <optgroup label={label} {...props}>
            {children}
        </optgroup>
    );
}

export const Option = ({ children, value, ...props }: ReactMarkup.Component<HTMLOptionElement> & {
    value: string;
}) => {
    return (
        <option value={value} {...props}>
            {children}
        </option>
    );
}

export const Div = ({ children, ...props }: ReactMarkup.Component<HTMLDivElement>) => {
    return (
        <div {...props}>
            {children}
        </div>
    );
}


export const I = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <i {...props}>
            {children}
        </i>
    );
}

export const Em = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <em {...props}>
            {children}
        </em>
    );
}

export const Cite = ({ children, ...props }: ReactMarkup.Component<HTMLSpanElement>) => {
    return (
        <cite {...props}>
            {children}
        </cite>
    );
}

export const Hr = () => <hr />;
