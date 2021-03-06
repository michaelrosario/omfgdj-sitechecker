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
const Handlebars = lazy(() => import(`./Handlebars`));
const Responsive = lazy(() => import(`./Responsive`));
const Chartbeat = lazy(() => import(`./Chartbeat`));
const NewRelic = lazy(() => import(`./NewRelic`));
const Titan = lazy(() => import(`./Titan`));
const OWLCarousel = lazy(() => import(`./OWLCarousel`));
const Segment = lazy(() => import(`./Segment`));
const Webpack = lazy(() => import(`./Webpack`));
const Nodejs = lazy(() => import(`./Nodejs`));
const Express = lazy(() => import(`./Express`));

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
    Typekit,
    Handlebars,
    Responsive,
    Chartbeat,
    NewRelic,
    Titan,
    OWLCarousel,
    Segment,
    Webpack,
    Nodejs,
    Express
};