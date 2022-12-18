import MainLayout from "./main";
import AuthLayout from "./auth";

const handler = {
    Auth: AuthLayout,
    Main: MainLayout
};

const handleLayout = (type) => {
    if (handler?.[type]) return handler?.[type];
    return MainLayout;
};

export default handleLayout;
