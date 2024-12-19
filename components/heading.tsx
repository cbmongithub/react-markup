let heading: RM.HeadingProps["as"] = 'h1';

export const Heading = ({ as: Tag, children, ...props }: RM.HeadingProps) => {
    heading = Tag;
    return <Tag {...props}>{children}</Tag>;
};

Heading.name = heading;