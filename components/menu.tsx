type MenuProps = React.HTMLAttributes<HTMLMenuElement> & {
    children: React.ReactNode;
}

export const Menu = ({ children, ...props }: MenuProps) => {
    return (
        <menu {...props}>
            {children}
        </menu>
    );
}