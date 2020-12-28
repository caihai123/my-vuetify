import registerServiceWorker from "service-worker-loader";

console.log(registerServiceWorker);

registerServiceWorker({ scope: "/" });
