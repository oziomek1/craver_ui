import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesComponent } from './pages/messages/messages.component';
import { MessagesDetailsComponent } from './pages/messages-details/messages-details.component';

const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'messages',
    component: MessagesComponent
  },
  // map '/persons/:id' to person details component
  {
    path: 'messages/:id',
    component: MessagesDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/messages',
    pathMatch: 'full'
  },
];

// HERE: New module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
