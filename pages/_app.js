import "@/src/styles/globals.scss";

import DirectionProvider from "@/src/components/direction";
import Locales from "@/src/components/locales";
import handleLayout from "@/src/layout";

function MyApp({ Component, pageProps }) {
    // Handle layout
    const Layout = handleLayout(Component?.typeLayout);

    return (
        <DirectionProvider>
            <Locales>
                <Layout>
                    <Component className="text-green-700" {...pageProps} />
                </Layout>
            </Locales>
        </DirectionProvider>
    );
}

export default MyApp;
