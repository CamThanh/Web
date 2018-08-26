import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { CungquanghangComponent } from "./cungquanghang/cungquanghang.component";
import { ReviewComponent } from "./review/review.component";
import { ComposeComponent } from "./compose/compose.component";
import { SaccamthanhComponent } from "./saccamthanh/saccamthanh.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'homepage', component: HomepageComponent },
            { path: 'cungquanghang', component: CungquanghangComponent },
            { path: 'review', component: ReviewComponent },
            { path: 'sangtac', component: ComposeComponent  },
            { path: 'saccamthanh', component: SaccamthanhComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class MainViewRoutingModule {

}