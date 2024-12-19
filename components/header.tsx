export const Header = ({ children, ...props }: RM.ComponentProps<HTMLElement>) => {
    return (
        <header {...props}>
            {children}
        </header>
    );
}