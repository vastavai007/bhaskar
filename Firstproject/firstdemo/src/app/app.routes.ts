import { Routes } from '@angular/router';
import { link } from 'node:fs';
import { HomeComponent } from './Pages/home/home.component';
import { HelloComponent } from './Pages/hello/hello.component';
import { ClientComponent } from './client/client.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'hello',
        component:HelloComponent
    }
    {
        path:'client',
        component:ClientComponent
    }
];
