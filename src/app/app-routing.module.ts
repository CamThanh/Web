import { NgModule } from "../../node_modules/@angular/core";
import { RouterModule } from "../../node_modules/@angular/router";
import { MainViewModule } from "./main-view/main-view.module";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'homepage',
                pathMatch: 'full'
            },
            {
                path: '',
                component: MainLayoutComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () => MainViewModule
                    }
                ]
            }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}