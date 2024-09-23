import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'contact-us',
        loadComponent: () => import('./contact-us/contact-us.component').then(C => C.ContactUsComponent)
    }
];
