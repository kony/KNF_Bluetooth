//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "JSBindingNFC",
    appName: "JSBindingNFC",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.75",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "JSBindingNFC",
    isMFApp: false,
    eventTypes: [],
    url: "https://mobilefabric-demo.konycloud.com/JSBindingNFC/MWServlet",
    secureurl: "https://mobilefabric-demo.konycloud.com/JSBindingNFC/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;