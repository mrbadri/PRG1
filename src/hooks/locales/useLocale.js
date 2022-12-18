import { useEffect, useState } from "react";

import getInitialLocale from "@/src/utils/locales/getInitialLocale";

const useLocale = (initialLocale = getInitialLocale()) => {
    const [locale, setLocale] = useState(initialLocale);

    useEffect(() => {
        if (typeof window !== "undefined") localStorage.setItem("locale", locale);
    }, [locale]);

    return { locale, setLocale };
};

export default useLocale;
