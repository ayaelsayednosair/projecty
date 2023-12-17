import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServeComponent } from './serve/serve.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path: '', component: AppComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Serve', component: ServeComponent },
  { path: 'Menu', component: MenuComponent  },
  { path: 'Contact', component: ContactComponent },

 { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
