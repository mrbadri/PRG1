import { createContext, useEffect } from "react";

// project import
import defaultConfig from "@/src/config";
import useLocalStorage from "@/src/hooks/localStorage/useLocalStorage";

// initial state
const initialState = {
    ...defaultConfig,
    onChangeLocale: () => {},
    onChangeRTL: () => {}
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
    const [config, setConfig] = useLocalStorage("config", {
        locale: initialState.locale,
        rtlLayout: initialState.rtlLayout
    });

    const onChangeLocale = (locale) => {
        setConfig({
            ...config,
            locale
        });
    };

    const onChangeRTL = (rtlLayout) => {
        setConfig({
            ...config,
            rtlLayout
        });
    };

    useEffect(() => {
        setConfig(config);
    }, []);

    return (
        <ConfigContext.Provider
            value={{
                ...config,
                onChangeLocale,
                onChangeRTL
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

export { ConfigProvider, ConfigContext };
