import { JSX } from "react";

declare global {
    namespace ReactMarkup {
        type Component<T = HTMLElement> = React.HTMLAttributes<T> & {
            children?: React.ReactNode;
        }

        type ElementMap<T = JSX.IntrinsicElements> = {
            [K in keyof T]: Component<T[K]>;
        }

        type Element = ElementMap & {
            [key: string]: Component;
        }

        interface Elements {
            a: Component<HTMLAnchorElement>;
            area: Component<HTMLAreaElement>;
            audio: Component<HTMLAudioElement>;
            base: Component<HTMLBaseElement>;
            blockquote: Component<HTMLQuoteElement>;
            button: Component<HTMLButtonElement>;
            canvas: Component<HTMLCanvasElement>;
            col: Component<HTMLTableColElement>;
            colgroup: Component<HTMLTableColElement>;
            data: Component<HTMLDataElement>;
            datalist: Component<HTMLDataListElement>;
            del: Component<HTMLModElement>;
            details: Component<HTMLDetailsElement>;
            dialog: Component<HTMLDialogElement>;
            embed: Component<HTMLEmbedElement>;
            fieldset: Component<HTMLFieldSetElement>;
            form: Component<HTMLFormElement>;
            hr: Component<HTMLHRElement>;
            iframe: Component<HTMLIFrameElement>;
            img: Component<HTMLImageElement>;
            input: Component<HTMLInputElement>;
            ins: Component<HTMLModElement>;
            label: Component<HTMLLabelElement>;
            li: Component<HTMLLIElement>;
            link: Component<HTMLLinkElement>;
            map: Component<HTMLMapElement>;
            menu: Component<HTMLMenuElement>;
            meta: Component<HTMLMetaElement>;
            meter: Component<HTMLMeterElement>;
            object: Component<HTMLObjectElement>;
            ol: Component<HTMLOListElement>;
            optgroup: Component<HTMLOptGroupElement>;
            option: Component<HTMLOptionElement>;
            output: Component<HTMLOutputElement>;
            progress: Component<HTMLProgressElement>;
            q: Component<HTMLQuoteElement>;
            script: Component<HTMLScriptElement>;
            select: Component<HTMLSelectElement>;
            slot: Component<HTMLSlotElement>;
            source: Component<HTMLSourceElement>;
            style: Component<HTMLStyleElement>;
            table: Component<HTMLTableElement>;
            tbody: Component<HTMLTableSectionElement>;
            td: Component<HTMLTableCellElement>;
            template: Component<HTMLTemplateElement>;
            textarea: Component<HTMLTextAreaElement>;
            tfoot: Component<HTMLTableSectionElement>;
            th: Component<HTMLTableCellElement>;
            thead: Component<HTMLTableSectionElement>;
            time: Component<HTMLTimeElement>;
            title: Component<HTMLTitleElement>;
            tr: Component<HTMLTableRowElement>;
            track: Component<HTMLTrackElement>;
            video: Component<HTMLVideoElement>;
        }
    }
}

export { }

// const tags = [
//     "a",
//     "abbr",
//     "address",
//     "area",
//     "article",
//     "aside",
//     "audio",
//     "b",
//     "base",
//     "bdi",
//     "bdo",
//     "blockquote",
//     "body",
//     "br",
//     "button",
//     "canvas",
//     "caption",
//     "cite",
//     "code",
//     "col",
//     "colgroup",
//     "data",
//     "datalist",
//     "dd",
//     "del",
//     "details",
//     "dfn",
//     "dialog",
//     "div",
//     "dl",
//     "dt",
//     "em",
//     "embed",
//     "fencedframe",
//     "fieldset",
//     "figcaption",
//     "figure",
//     "footer",
//     "form",
//     "h1",
//     "head",
//     "header",
//     "hgroup",
//     "hr",
//     "html",
//     "i",
//     "iframe",
//     "img",
//     "input",
//     "ins",
//     "kbd",
//     "label",
//     "legend",
//     "li",
//     "link",
//     "main",
//     "map",
//     "mark",
//     "menu",
//     "meta",
//     "meter",
//     "nav",
//     "noscript",
//     "object",
//     "ol",
//     "optgroup",
//     "option",
//     "output",
//     "p",
//     "picture",
//     "portal",
//     "pre",
//     "progress",
//     "q",
//     "rp",
//     "rt",
//     "ruby",
//     "s",
//     "samp",
//     "script",
//     "search",
//     "section",
//     "select",
//     "slot",
//     "small",
//     "source",
//     "span",
//     "strong",
//     "style",
//     "sub",
//     "summary",
//     "sup",
//     "table",
//     "tbody",
//     "td",
//     "template",
//     "textarea",
//     "tfoot",
//     "th",
//     "thead",
//     "time",
//     "title",
//     "tr",
//     "track",
//     "u",
//     "ul",
//     "var",
//     "video",
//     "wbr",
// ];