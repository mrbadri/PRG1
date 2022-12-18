import HeaderMainLayout from "./header";

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-full max-h-full w-full max-w-full overflow-y-auto overflow-x-hidden">
            <HeaderMainLayout />
            <div>{children}</div>
        </div>
    );
};

export default MainLayout;
