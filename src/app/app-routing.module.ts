import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: '../pages/news/news.module#NewsPageModule'
    },
    {
        path: 'login',
        loadChildren: '../pages/login/login.module#LoginPageModule',
        canActivate: [AngularFireAuthGuard],
        data: redirectLoggedInTo(['/events'])
    },
    {path: 'news', loadChildren: '../pages/news/news.module#NewsPageModule'},
    {
        path: 'events',
        loadChildren: '../pages/events/events.module#EventsPageModule',
        canActivate: [AngularFireAuthGuard],
        data: redirectUnauthorizedTo(['/login'])
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
