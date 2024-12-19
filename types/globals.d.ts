import { JSX } from "react";

declare global {
    namespace ReactMarkup {
        type ComponentProps<T = HTMLElement> = React.HTMLAttributes<T> & {
            children?: React.ReactNode;
        }

        type ElementMap<T = JSX.IntrinsicElements> = {
            [K in keyof T]: ComponentProps<T[K]>;
        }

        type Element = ElementMap & {
            [key: string]: ComponentProps;
        }

        type Elements = {
            a: ComponentProps<HTMLAnchorElement>;
            abbr: ComponentProps<HTMLElement>;
            address: ComponentProps<HTMLElement>;
            area: ComponentProps<HTMLAreaElement>;
            article: ComponentProps<HTMLElement>;
            aside: ComponentProps<HTMLElement>;
            audio: ComponentProps<HTMLAudioElement>;
            b: ComponentProps<HTMLElement>;
            base: ComponentProps<HTMLBaseElement>;
            bdi: ComponentProps<HTMLElement>;
            bdo: ComponentProps<HTMLElement>;
            blockquote: ComponentProps<HTMLQuoteElement>;
            body: ComponentProps<HTMLBodyElement>;
            br: ComponentProps<HTMLBRElement>;
            button: ComponentProps<HTMLButtonElement>;
            canvas: ComponentProps<HTMLCanvasElement>;
            caption: ComponentProps<HTMLElement>;
            cite: ComponentProps<HTMLElement>;
            code: ComponentProps<HTMLElement>;
            col: ComponentProps<HTMLTableColElement>;
            colgroup: ComponentProps<HTMLTableColElement>;
            data: ComponentProps<HTMLDataElement>;
            datalist: ComponentProps<HTMLDataListElement>;
            dd: ComponentProps<HTMLElement>;
            del: ComponentProps<HTMLModElement>;
            details: ComponentProps<HTMLDetailsElement>;
            dfn: ComponentProps<HTMLElement>;
            dialog: ComponentProps<HTMLDialogElement>;
            div: ComponentProps<HTMLDivElement>;
            dl: ComponentProps<HTMLDListElement>;
            dt: ComponentProps<HTMLElement>;
            em: ComponentProps<HTMLElement>;
            embed: ComponentProps<HTMLEmbedElement>;
            fieldset: ComponentProps<HTMLFieldSetElement>;
            figcaption: ComponentProps<HTMLElement>;
            figure: ComponentProps<HTMLElement>;
            footer: ComponentProps<HTMLElement>;
            form: ComponentProps<HTMLFormElement>;
            h1: ComponentProps<HTMLHeadingElement>;
            head: ComponentProps<HTMLHeadElement>;
            header: ComponentProps<HTMLElement>;
            hgroup: ComponentProps<HTMLElement>;
            hr: ComponentProps<HTMLHRElement>;
            html: ComponentProps<HTMLHtmlElement>;
            i: ComponentProps<HTMLElement>;
            iframe: ComponentProps<HTMLIFrameElement>;
            img: ComponentProps<HTMLImageElement>;
            input: ComponentProps<HTMLInputElement>;
            ins: ComponentProps<HTMLModElement>;
            kbd: ComponentProps<HTMLElement>;
            label: ComponentProps<HTMLLabelElement>;
            legend: ComponentProps<HTMLLegendElement>;
            li: ComponentProps<HTMLLIElement>;
            link: ComponentProps<HTMLLinkElement>;
            main: ComponentProps<HTMLElement>;
            map: ComponentProps<HTMLMapElement>;
            mark: ComponentProps<HTMLElement>;
            menu: ComponentProps<HTMLMenuElement>;
            meta: ComponentProps<HTMLMetaElement>;
            meter: ComponentProps<HTMLMeterElement>;
            nav: ComponentProps<HTMLElement>;
            noscript: ComponentProps<HTMLElement>;
            object: ComponentProps<HTMLObjectElement>;
            ol: ComponentProps<HTMLOListElement>;
            optgroup: ComponentProps<HTMLOptGroupElement>;
            option: ComponentProps<HTMLOptionElement>;
            output: ComponentProps<HTMLOutputElement>;
            p: ComponentProps<HTMLParagraphElement>;
            picture: ComponentProps<HTMLElement>;
            portal: ComponentProps<HTMLElement>;
            pre: ComponentProps<HTMLPreElement>;
            progress: ComponentProps<HTMLProgressElement>;
            q: ComponentProps<HTMLQuoteElement>;
            rp: ComponentProps<HTMLElement>;
            rt: ComponentProps<HTMLElement>;
            ruby: ComponentProps<HTMLElement>;
            s: ComponentProps<HTMLElement>;
            samp: ComponentProps<HTMLElement>;
            script: ComponentProps<HTMLScriptElement>;
            search: ComponentProps<HTMLElement>;
            section: ComponentProps<HTMLElement>;
            select: ComponentProps<HTMLSelectElement>;
            slot: ComponentProps<HTMLSlotElement>;
            small: ComponentProps<HTMLElement>;
            source: ComponentProps<HTMLSourceElement>;
            span: ComponentProps<HTMLSpanElement>;
            strong: ComponentProps<HTMLElement>;
            style: ComponentProps<HTMLStyleElement>;
            sub: ComponentProps<HTMLElement>;
            summary: ComponentProps<HTMLElement>;
            sup: ComponentProps<HTMLElement>;
            table: ComponentProps<HTMLTableElement>;
            tbody: ComponentProps<HTMLTableSectionElement>;
            td: ComponentProps<HTMLTableCellElement>;
            template: ComponentProps<HTMLTemplateElement>;
            textarea: ComponentProps<HTMLTextAreaElement>;
            tfoot: ComponentProps<HTMLTableSectionElement>;
            th: ComponentProps<HTMLTableCellElement>;
            thead: ComponentProps<HTMLTableSectionElement>;
            time: ComponentProps<HTMLTimeElement>;
            title: ComponentProps<HTMLTitleElement>;
            tr: ComponentProps<HTMLTableRowElement>;
            track: ComponentProps<HTMLTrackElement>;
            u: ComponentProps<HTMLElement>;
            ul: ComponentProps<HTMLUListElement>;
            var: ComponentProps<HTMLElement>;
            video: ComponentProps<HTMLVideoElement>;
            wbr: ComponentProps<HTMLElement>;
        }
    }
}

export { }
