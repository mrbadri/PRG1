import { useState } from "react";

import getInitialLocale from "@/src/utils/locales/getInitialLocale";

const useLocale = (initialLocale = getInitialLocale()) => {
    const [locale, setLocale] = useState(initialLocale);

    if (typeof window !== "undefined") localStorage.setItem("locale", locale);

    return [locale, setLocale];
};

export default useLocale;
