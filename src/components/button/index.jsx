import { Button } from "antd";

const CustomButton = ({ children, className, color = "primary", ...params }) => {
    return (
        <Button className={`${className} bg-${color}-500 rounded-sm`} {...params}>
            {children}
        </Button>
    );
};

export default CustomButton;
