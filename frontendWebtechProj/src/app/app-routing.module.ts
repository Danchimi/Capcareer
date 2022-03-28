import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { ReadComponent } from "./read/read.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {path: 'create', component:CreateComponent},
    {path: 'create/:id', component:CreateComponent},
    {path: 'read' , component: ReadComponent},
    {path: 'home' , component:HomeComponent}
];
@NgModule({
   
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})
export class AppRoutingModule { }
