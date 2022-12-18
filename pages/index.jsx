import { FormattedMessage } from "react-intl";
import Landing from "@/src/components/landing";
import useLocale from "@/src/hooks/locales/useLocale";
import useConfig from "/src/hooks/config/useConfig";

function Home() {
    const { locale, onChangeLocale } = useConfig();
    console.log("locale in page:", locale);

    return (
        <>
            <div className="center flex-col h-screen w-screen max-w-screen">
                <button
                    className="bg-red-600 p-2 text-red-50 rounded-sm mb-2"
                    onClick={() => {
                        onChangeLocale("fa");
                    }}
                >
                    Change Locale
                </button>
                <h1>
                    <FormattedMessage id="tic-tac-toe" />
                </h1>
                <p className="w-96 text-[10px] text-justify">
                    <FormattedMessage id="lorem" />
                </p>
            </div>

            <Landing />
        </>
    );
}

Home.typeLayout = "Main";

export default Home;
