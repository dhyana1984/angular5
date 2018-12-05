import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
const bootApplication = () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
};
if (module["hot"]) {
  module["hot"].accept();
  module["hot"].dispose(() => {
    const oldRootElem = document.querySelector("app-root");
    const newRootElem = document.createElement("app-root");
    oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
    platformBrowserDynamic().destroy();
    
  });
}
if (document.readyState === "complete") {
  alert(1)
  bootApplication();
  alert(2)
} else {
  alert(3)
  document.addEventListener("DOMContentLoaded", bootApplication);
  alert(4)
}
