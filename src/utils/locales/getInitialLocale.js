import LOCALES from "@/src/constant/locales";

const getInitialLocale = () => {
    if (typeof window !== "undefined") {
        const localeSaved = localStorage.getItem("locale");

        if (localeSaved) {
            // use locale saved
            return localeSaved;
        } else {
            // for the first user login
            switch (navigator.language) {
                case "fa":
                    return LOCALES.FA;

                default:
                    return LOCALES.EN;
            }
        }
    }

    return LOCALES.EN;
};

export default getInitialLocale;
