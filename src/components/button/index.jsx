const Button = ({ children, className, color, ...params }) => {
    return (
        <button className={`${className}`} {...params}>
            {children}
        </button>
    );
};

export default Button;
