import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProduitComonent } from './produit/produit.component';


export const appRoutes: Routes = [
    {path :'produit' , component: ProduitComonent},
    {path :'dashbord' , component: DashbordComponent},
    {path :'' ,redirectTo: '/dashbord', pathMatch : 'full'}
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing:true}
        )
    ],

    exports : [RouterModule]

})

export class AppRoutingModule{

}
