
import {AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'
import {ServicesComponent} from './services/services.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {SectionComponent} from './section/section.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent,  pathMatch: "full" },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "about",  component: AboutComponent},

  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'section', component: SectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
