import { JSX } from "react";

declare global {
    namespace RM {
        type ComponentProps<T = HTMLElement> = React.ComponentProps<T> & {
            children?: React.ReactNode;
        }

        type ElementMap<T = JSX.IntrinsicElements> = {
            [K in keyof T]: ComponentProps<T[K]>;
        }

        type Element = ElementMap & {
            [key: string]: ComponentProps;
        }

        type HeadingProps = RM.ComponentProps<HTMLHeadingElement> & {
            as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
            children: string;
        }

    }
}

export { } // This ensures the file is treated as a module