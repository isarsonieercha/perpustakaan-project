import { Component, OnInit } from '@angular/core';
import { Penerbit } from "../../interface/penerbit";
import { PenerbitService } from "../../service/penerbit.service";


@Component({
  selector: 'app-penerbit-list',
  templateUrl: './penerbit-list.component.html',
  styleUrls: ['./penerbit-list.component.css']
})
export class PenerbitListComponent {
  listPenerbit: Penerbit[] = [];
  newPenerbit: Penerbit = new Penerbit();
  error: string;
  isError: boolean = false;
  insertNew: boolean = false;
  isEdit: boolean = false;

  constructor(private penerbitService: PenerbitService) {
    this.loadPenerbitData();
  }

  loadPenerbitData() {
    this.penerbitService.findAllPenerbit().subscribe(output =>{
      console.log(output);
      this.listPenerbit = output;
    }, error => {
      this.isError = error;
    });
  }

  onRemovePenerbit(id: string) {
    console.log(id);
    this.penerbitService.deletePenerbit(id).subscribe(data => {
      if (data) {
        this.loadPenerbitData();
      }
    }, error => {
      this.isError = error;
    });
  }

  onUpdatePenerbit() {
    this.penerbitService.updatePenerbit(this.newPenerbit).subscribe(output => {
      this.loadPenerbitData();
      this.newPenerbit = new Penerbit();
      this.insertNew = false;
    }, error => {
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }
  
  onEdit(penerbit){
    this.isEdit=true;
    this.newPenerbit=penerbit;
    this.insertNew=true;
  }
}
