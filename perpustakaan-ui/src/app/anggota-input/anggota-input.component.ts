import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Anggota } from '../../interface/anggota';
import { AnggotaService } from '../../service/anggota.service';

@Component({
  selector: 'app-anggota-input',
  templateUrl: './anggota-input.component.html',
  styleUrls: ['./anggota-input.component.css']
})
export class AnggotaInputComponent implements OnInit {

  newAnggota: Anggota = new Anggota();
  anggota: Anggota[]= [];
  isError: boolean = false;
  error: string; 
  constructor(private anggotaService: AnggotaService,
  private router: Router) { }

  onAnggotaSave(){
    this.anggotaService.newAnggota(this.newAnggota).subscribe(insert =>{
      console.log(insert);
      this.newAnggota = new Anggota();
      this.router.navigate(["list-anggota"]);
    })
  }

  ngOnInit() {
  }

}
