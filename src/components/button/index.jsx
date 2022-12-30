import { Button } from "antd";
import classNames from "../../../node_modules/classnames/index";

const CustomButton = ({ children, className, color = "primary", type, ...params }) => {
    const BaseClassNames = classNames({
        [`bg-${color}-500 shadow-md shadow-info-300`]: type === "primary"
    });


    console.log("BaseClassNames" , BaseClassNames);

    return (
        <Button
            className={classNames(BaseClassNames, className,'border-none' ,'rounded-sm')}
            type="primary"
            {...params}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
