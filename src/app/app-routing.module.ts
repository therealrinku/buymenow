import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "src/components/navbar/navbar.component";
import { CreatewalletComponent } from "./createwallet/createwallet.component";
import { HomepageComponent} from "./homepage/homepage.component";

const routes= [
    {path:"", component:HomepageComponent},
    {path:"create-wallet",component:CreatewalletComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}

const Routes:Array<any> = [HomepageComponent,CreatewalletComponent];
const Components:Array<any> = [NavbarComponent];

export const RoutesAndComponents=[...Routes,...Components]
