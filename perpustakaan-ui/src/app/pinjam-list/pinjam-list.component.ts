import { Component, OnInit } from '@angular/core';
import { Pinjam } from "../../interface/pinjam";
import { Buku } from "../../interface/buku";
import { Anggota } from "../../interface/anggota";
import { PinjamService } from "../../service/pinjam.service";
import { AnggotaService } from "../../service/anggota.service";
import { BukuService } from "../../service/buku.service";

@Component({
  selector: 'app-pinjam-list',
  templateUrl: './pinjam-list.component.html',
  styleUrls: ['./pinjam-list.component.css']
})
export class PinjamListComponent{

  pinjams: Pinjam[] = [];
  bukus: Buku[] = [];
  anggotas: Anggota[] = [];
  newPinjam: Pinjam = new Pinjam();
  error: string;
  isError: boolean = false;
  insertNew: boolean = false;
  isEdit: boolean = false;

  constructor(private pinjamService: PinjamService,
    private bukuService: BukuService,
    private anggotaService: AnggotaService) { 
    this.loadPinjamData();
    this.loadBuku();
    this.loadAnggota();
  }

  loadPinjamData(){
    this.pinjamService.findAllPinjam().subscribe(output=>{
      console.log(output);
      
      this.pinjams = output;
     },error=>{
        this.isError=error;
     });
  }

  loadBuku(){
    this.bukuService.findAllBuku().subscribe(output=>{
      console.log(output);
      this.bukus = output;
    }, error=>{
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }

  loadAnggota(){
    this.anggotaService.findAllAnggota().subscribe(output=>{
      console.log(output);
      this.anggotas = output;
    }, error=>{
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }

  onRemovePinjam(id: string){
    console.log(id);
    this.pinjamService.deletePinjam(id).subscribe(data=>{
      if(data){
        this.loadPinjamData();
      }
     },error=>{
        this.isError=error;
     });
  }


  onUpdatePinjam(){
    this.pinjamService.updatePinjam(this.newPinjam).subscribe(output=>{
      this.loadPinjamData();
      this.newPinjam = new Pinjam();
      this.insertNew = false;
    }, error=>{
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }

  compareFn(c1: Buku, c2: Buku): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onEdit(pinjams){
    this.isEdit=true;
    this.newPinjam = pinjams;
    this.insertNew=true;
  }
}
