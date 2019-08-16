import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: '../pages/login/login.module#LoginPageModule' },
  { path: 'news', loadChildren: '../pages/news/news.module#NewsPageModule' },
  { path: 'events', loadChildren: '../pages/events/events.module#EventsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
