const mode = ["DEV", "UAT", "PROD", "LOCAL"];
const ENV = mode[1];

const environment = {
    DEV: {
        baseURLServer: process.env.REACT_APP_BASE_URL_SERVER_DEV,
        baseURLView: process.env.REACT_APP_BASE_URL_VIEW_DEV
    },

    UAT: {
        baseURLServer: process.env.REACT_APP_BASE_URL_SERVER_UAT,
        baseURLView: process.env.REACT_APP_BASE_URL_VIEW_UAT
    },

    PROD: {
        baseURLServer: process.env.REACT_APP_BASE_URL_SERVER_PROD,
        baseURLView: process.env.REACT_APP_BASE_URL_VIEW_PROD
    },

    LOCAL: {
        baseURLServer: process.env.REACT_APP_BASE_URL_SERVER_LOCAL,
        baseURLView: process.env.REACT_APP_BASE_URL_VIEW_LOCAL
    }
};

// export data
const { baseURLServer, baseURLView } = environment[ENV];

// config
const config = {
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 8,
    navType: "light", // light, dark
    locale: "en", // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
    rtlLayout: false,
    environment: ENV,
    baseURLView,
    baseURLServer
};

export const BASE_PATH = "";

export const DASHBOARD_PATH = "/";

export default config;
