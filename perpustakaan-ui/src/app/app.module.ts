import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AnggotaService } from '../service/anggota.service';
import { AuthGuard } from '../guards/auth.guards';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr';
import { NgProgressModule } from 'ngx-progressbar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnggotaListComponent } from './anggota-list/anggota-list.component';

export const AppRoutes : any =[
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "list-anggota", component: AnggotaListComponent},
  { path: "**", redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnggotaListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    NgProgressModule,
    RouterModule.forRoot(AppRoutes,{useHash: true})
  ],
  providers: [AnggotaService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
