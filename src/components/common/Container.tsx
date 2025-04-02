type Props = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

export default function Container({ children, className = "", ...props }: Props) {
    return (
        <div className={`container-main ${className}`} {...props}>
            {children}
        </div>
    );
}