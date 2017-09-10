import { Component, OnInit } from '@angular/core';
import { Anggota } from '../../interface/anggota';
import { AnggotaService } from '../../service/anggota.service';

@Component({
  selector: 'app-anggota-list',
  templateUrl: './anggota-list.component.html',
  styleUrls: ['./anggota-list.component.css']
})
export class AnggotaListComponent implements OnInit {

  listAnggota: Anggota[]=[];
  isError: boolean = false;
  error: string; 
  constructor(private anggotaService: AnggotaService) {

   }

   loadAnggotaData(){
     this.anggotaService.findAllAnggota().subscribe(output =>{
      console.log(output);
      this.listAnggota = output;
    })
   }
  ngOnInit() {
  }

}
