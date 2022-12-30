import { FormattedMessage } from "react-intl";
import useConfig from "/src/hooks/config/useConfig";
import Button from "components/button";

function Home() {
    const { locale, onChangeLocale } = useConfig();

    return (
        <>
            <div className="center flex-col max-w-screen">
                <button
                    className="bg-red-600 p-2 text-red-50 rounded-sm mb-2"
                    onClick={() => {
                        onChangeLocale("fa");
                    }}
                >
                    Change Locale
                </button>

                <Button type="primary">Action</Button>
                <h1>
                    <FormattedMessage id="tic-tac-toe" />
                </h1>
                <p className="w-96 text-[10px] text-justify">
                    <FormattedMessage id="lorem" />
                </p>
            </div>
        </>
    );
}

Home.typeLayout = "Main";

export default Home;
