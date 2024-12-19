type NavProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
}

export const Nav = ({ children, ...props }: NavProps) => {
    return (
        <nav {...props}>
            {children}
        </nav>
    );
}