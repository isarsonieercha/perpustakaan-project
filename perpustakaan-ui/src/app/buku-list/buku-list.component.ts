import { Component, OnInit } from '@angular/core';
import { Buku } from "../../interface/buku";
import { Penerbit } from "../../interface/penerbit";
import { BukuService } from "../../service/buku.service";
import { PenerbitService } from "../../service/penerbit.service";

@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.component.html',
  styleUrls: ['./buku-list.component.css']
})
export class BukuListComponent{

  bukus: Buku[] = [];
  penerbits: Penerbit[] = [];
  newBuku: Buku = new Buku();
  error: string;
  isError: boolean = false;
  insertNew: boolean = false;
  isEdit: boolean = false;

  constructor(private bukuService: BukuService,
    private penerbitService: PenerbitService) { 
    this.loadBukuData();
    this.loadPenerbit();
  }

  loadBukuData(){
    this.bukuService.findAllBuku().subscribe(output=>{
      console.log(output);
      
      this.bukus = output;
     },error=>{
        this.isError=error;
     });
  }

  loadPenerbit(){
    this.penerbitService.findAllPenerbit().subscribe(output=>{
      console.log(output);
      this.penerbits = output;
    }, error=>{
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }

  onRemoveBuku(id: string){
    console.log(id);
    this.bukuService.deleteBuku(id).subscribe(data=>{
      if(data){
        this.loadBukuData();
      }
     },error=>{
        this.isError=error;
     });
  }


  onUpdateBuku(){
    this.bukuService.updateBuku(this.newBuku).subscribe(output=>{
      this.loadBukuData();
      this.newBuku= new Buku();
      this.insertNew = false;
    }, error=>{
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }

  compareFn(c1: Penerbit, c2: Penerbit): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onEdit(buku){
    this.isEdit=true;
    this.newBuku=buku;
    this.insertNew=true;
  }
}
