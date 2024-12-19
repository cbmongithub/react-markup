import { createElement } from "react";

const tags = [
    "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "picture", "portal", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "search", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"
];

const createDynamic = (tag: string) => {
    const Comp = ({ children, ...props }: React.ComponentProps<any>) => {
        return createElement(tag, props, children);
    };
    Comp.displayName = tag.charAt(0).toUpperCase() + tag.slice(1);
    return Comp;
};

const Dynamic = tags.reduce((acc, val) => {
    acc[val.charAt(0).toUpperCase() + val.slice(1)] = createDynamic(val);
    return acc;
}, {} as Record<string, React.FC<any>>);

export default Dynamic;

