import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import useConfig from "@/src/hooks/config/useConfig";

// custom
import loadMessages from "@/utils/locales/loadMessage";
import useLocale from "@/hooks/locales/useLocale";

const Locales = ({ children }) => {
    const [message, setMessage] = useState();
    const { locale } = useLocale();
    const config = useConfig();


    useEffect(() => {
        loadMessages(locale).then((result) => {
            setMessage(result.default);
        });
    }, [locale]);

    if (message)
        return (
            <IntlProvider locale={locale} messages={message}>
                {children}
            </IntlProvider>
        );

    return <></>;
};

export default Locales;
