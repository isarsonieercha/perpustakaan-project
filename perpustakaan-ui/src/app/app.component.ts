import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnggotaService } from '../service/anggota.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private router: Router,
  private AnggotaServiice: AnggotaService){
    
  }

  onLogOut(){
    localStorage.clear();
    this
    .router
    .navigate(["login"]);
  }

  ngOnInit() {
    this
      .router
      .navigate(["list-anggota"]);
  }
}
