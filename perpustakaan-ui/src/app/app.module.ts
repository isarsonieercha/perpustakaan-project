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
import { AnggotaInputComponent } from './anggota-input/anggota-input.component';
import { BukuListComponent } from './buku-list/buku-list.component';
import { BukuInputComponent } from './buku-input/buku-input.component';
import { PenerbitListComponent } from './penerbit-list/penerbit-list.component';
import { PenerbitInputComponent } from './penerbit-input/penerbit-input.component';
import { BukuService } from "../service/buku.service";
import { PenerbitService } from "../service/penerbit.service";
import { PetugasListComponent } from './petugas-list/petugas-list.component';
import { PetugasInputComponent } from './petugas-input/petugas-input.component';
import { PinjamListComponent } from './pinjam-list/pinjam-list.component';

export const AppRoutes : any =[
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "list-anggota", component: AnggotaListComponent, canActivate: [AuthGuard]},
  { path: "input-anggota", component: AnggotaInputComponent, canActivate: [AuthGuard]},
  { path: "list-buku", component: BukuListComponent, canActivate: [AuthGuard]},
  { path: "input-buku", component: BukuInputComponent, canActivate: [AuthGuard]},
  { path: "list-penerbit", component: PenerbitListComponent, canActivate: [AuthGuard]},
  { path: "input-penerbit", component: PenerbitInputComponent, canActivate: [AuthGuard]},
  { path: "**", redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnggotaListComponent,
    AnggotaInputComponent,
    BukuListComponent,
    BukuInputComponent,
    PenerbitListComponent,
    PenerbitInputComponent,
    PetugasListComponent,
    PetugasInputComponent,
    PinjamListComponent
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
  providers: [AnggotaService, BukuService, PenerbitService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
