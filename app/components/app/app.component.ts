import { Component, enableProdMode, ViewEncapsulation } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";

import { IndexComponent } from "../index/index.component";
import { FlexComponent } from "../flex/flex.component";
import { DocsComponent } from "../docs/docs.component";

enableProdMode();

@Component({
	selector: "app",
	templateUrl: "app/components/app/app.component.html",
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: [
		"app/components/app/app.component.css",
		"app/shared/styles/body.css",
		"app/shared/styles/btn.css"
	],
	providers: [ ROUTER_PROVIDERS ],
	encapsulation: ViewEncapsulation.None
})

@RouteConfig([
	{ path: "/", name: "Index", component: IndexComponent, useAsDefault: true },
	{ path: "/flex", name: "Flex", component: FlexComponent },
	{ path: "/docs", name: "Docs", component: DocsComponent }
])

export class AppComponent {}
