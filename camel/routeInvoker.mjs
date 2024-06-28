import * as camel from "sdk/integrations"

const message = "Initial message";
const response = camel.invokeRoute('direct:inbound1', message, []);
console.log("[routeInvoker.mjs]: " + response);