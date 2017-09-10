import { Component, OnInit } from '@angular/core';
import { PetugasService } from "../../service/petugas.service";
import { Petugas } from "../../interface/petugas";

@Component({
  selector: 'app-petugas-list',
  templateUrl: './petugas-list.component.html',
  styleUrls: ['./petugas-list.component.css']
})
export class PetugasListComponent {
  petugass: Petugas[] = [];
  newPetugas: Petugas = new Petugas();
  error: string;
  isError: boolean = false;
  insertNew: boolean = false;
  isEdit: boolean = false;

  constructor(private petugasService: PetugasService) {
    this.loadPetugasData();
  }

  loadPetugasData() {
    this.petugasService.findAllPetugas().subscribe(output => {
      console.log(output);

      this.petugass = output;
    }, error => {
      this.isError = error;
    });
  }

  onRemovePetugas(id: string) {
    console.log(id);
    this.petugasService.deletePetugas(id).subscribe(data => {
      if (data) {
        this.loadPetugasData();
      }
    }, error => {
      this.isError = error;
    });
  }

  onUpdatePetugas() {
    this.petugasService.updatePetugas(this.newPetugas).subscribe(output => {
      this.loadPetugasData();
      this.newPetugas = new Petugas();
      this.insertNew = false;
    }, error => {
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }

  onInsertNewPetugas() {
    if (!this.isEdit) {
      this.petugasService.saveNewPetugas(this.newPetugas).subscribe(output => {
        this.petugass.push(output);
        this.newPetugas = new Petugas();
        this.insertNew = false;
      }, error => {
        this.isError = true;
        this.error = error;
        console.log(error);
      });
    } else {
      this.onUpdatePetugas();
    }
  }

  onEdit(petugas){
    this.isEdit=true;
    this.newPetugas=petugas;
    this.insertNew=true;
  }
}
