import React from "react";

import Logo from "../../components/logo";
import Menu from "../../components/menu";
import ActionsHeader from "./actions";

function HeaderMainLayout() {
    return (
        <div className=" flex justify-between w-full bg-red-300 py-3 px-4">
            <ActionsHeader />
            <Menu />
            <Logo />
        </div>
    );
}

export default HeaderMainLayout;
