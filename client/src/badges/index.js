import { lazy } from "react";

const AngularJS = lazy(() => import(`./AngularJS`));
const Apache = lazy(() => import(`./Apache`));
const BadgeReact = lazy(() => import(`./BadgeReact`));
const Bootstrap = lazy(() => import(`./Bootstrap`));
const CloudFlare = lazy(() => import(`./CloudFlare`));
const FontAwesome = lazy(() => import(`./FontAwesome`));
const GoogleAnalytics = lazy(() => import(`./GoogleAnalytics`));
const GoogleFontApi = lazy(() => import(`./GoogleFontApi`));
const Gravatar = lazy(() => import(`./Gravatar`));
const jQuery = lazy(() => import(`./jQuery`));
const MySQL = lazy(() => import(`./MySQL`));
const Nginx = lazy(() => import(`./Nginx`));
const PHP = lazy(() => import(`./PHP`));
const Twitter = lazy(() => import(`./Twitter`));
const WooCommerce = lazy(() => import(`./WooCommerce`));
const WordPress = lazy(() => import(`./WordPress`));
const GoogleTagManager = lazy(() => import(`./GoogleTagManager`));
const MetaTags = lazy(() => import(`./MetaTags`));
const Typekit = lazy(() => import(`./Typekit`));

export { 
    AngularJS,
    Apache,
    BadgeReact,
    Bootstrap,
    CloudFlare,
    FontAwesome,
    GoogleAnalytics,
    GoogleFontApi,
    Gravatar,
    jQuery,
    MySQL,
    Nginx,
    PHP,
    Twitter,
    WooCommerce,
    WordPress,
    GoogleTagManager,
    MetaTags,
    Typekit
};