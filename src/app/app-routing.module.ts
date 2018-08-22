import { NgModule } from "../../node_modules/@angular/core";
import { RouterModule } from "../../node_modules/@angular/router";
import { MainViewModule } from "./main-view/main-view.module";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: () => MainViewModule
            }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}