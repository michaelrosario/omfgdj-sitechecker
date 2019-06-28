import { lazy } from "react";

const AngularJS = lazy(() => import(`./AngularJS`));
const CloudFlare = lazy(() => import(`./CloudFlare`));
const FontAwesome = lazy(() => import(`./FontAwesome`));


export { AngularJS,CloudFlare,FontAwesome };