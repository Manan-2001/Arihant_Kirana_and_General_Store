import { Routes } from '@angular/router';
import { AddItemPageComponent } from './Admin/add-item-page/add-item-page.component';
import { ItemPageComponent } from './User/item-page/item-page.component';
import { CartPageComponent } from './User/cart-page/cart-page.component';

export const routes: Routes = [
    {
        path:"add-item",
        component:AddItemPageComponent
    },
    {
        path:"items",
        component:ItemPageComponent
    },
    {
        path:"cart",
        component:CartPageComponent
    }
];
