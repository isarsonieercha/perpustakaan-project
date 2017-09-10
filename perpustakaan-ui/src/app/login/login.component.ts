import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { NgProgressService } from "ngx-progressbar";
import { Router } from "@angular/router";
import { AnggotaService } from '../../service/anggota.service';
import { Anggota } from '../../interface/anggota';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Anggota = new Anggota();

  constructor(private AnggotaService: AnggotaService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private router: Router,
    public progressService: NgProgressService) {
      this.toastr.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
  }

  onProcessLogin(){
    this.progressService.start();
    this.AnggotaService.login(this.login).subscribe(output => {
      console.log(output);
      if (output) {
        this.progressService.done();
        let hash = Md5.hashStr(this.login.password).toString();
        let token = btoa(this.login.email + ':' + hash);
        localStorage.setItem('token', token);
        console.log('Token: ' + localStorage.getItem('token'));
        this.router.navigate(["list-anggota"]);
      } else {
        this.progressService.done();
        this.toastr.error('Login Fail', null, { toastLife: 3000 });
      }
    }, error => {
      this.progressService.done();
      this.toastr.error(error, null, { toastLife: 3000 });
      console.log(error);
    });
  }

}
