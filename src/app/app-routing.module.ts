import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "src/components/navbar/navbar.component";
import { HomepageComponent} from "./homepage/homepage.component";

const routes= [
    {path:"", component:HomepageComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}

const Routes:Array<any> = [HomepageComponent];
const Components:Array<any> = [NavbarComponent];

export const RoutesAndComponents=[...Routes,...Components]
