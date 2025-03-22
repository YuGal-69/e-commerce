import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

export const routes: Routes = [
    {
        path:'navbar',component:NavbarComponent
    },
    {
        path:'footer', component:FooterComponent
    },
    {
        path:'home', component:HomeComponent
    },
    {
        path:'product-description', component:ProductDescriptionComponent
    }
];
