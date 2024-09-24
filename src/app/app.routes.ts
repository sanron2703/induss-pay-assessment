import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then(C => C.LayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./landing-page/landing-page.component').then(C => C.LandingPageComponent)
            },
            {
                path: 'contact-us',
                loadComponent: () => import('./contact-us/contact-us.component').then(C => C.ContactUsComponent)
            }
        ],
    },
    // { path: '', redirectTo: '', pathMatch: 'full' },
];
