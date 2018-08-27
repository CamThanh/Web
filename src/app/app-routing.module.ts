import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
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
                        loadChildren: './main-view/main-view.module#MainViewModule'
                    }
                ]
            }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}