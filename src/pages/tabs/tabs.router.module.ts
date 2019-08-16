import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'main',
    component: TabsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../news/news.module').then(m => m.NewsPageModule)
          }
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../events/events.module').then(m => m.EventsPageModule)
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/main/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
