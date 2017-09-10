import { Component, OnInit } from '@angular/core';
import { Penerbit } from '../../interface/penerbit';
import { PenerbitService } from '../../service/penerbit.service';

@Component({
  selector: 'app-penerbit-list',
  templateUrl: './penerbit-list.component.html',
  styleUrls: ['./penerbit-list.component.css']
})
export class PenerbitListComponent implements OnInit {

  penerbit:Penerbit[]=[];
  newPenerbit:Penerbit = new Penerbit;
  isError: boolean = false;
  error: string;
  insertNew: boolean = false;
  isEdit: boolean = false;

  constructor(private penerbitService:PenerbitService) {
    this.loadPenerbitData();
  }

  loadPenerbitData(){
    this.penerbitService.findAllPenerbit().subscribe(output =>{
      console.log(output);
      this.penerbit = output;
      this.newPenerbit = new Penerbit();
    })
  }

  onPenerbitUpdate(){
    this.penerbitService.updatePenerbit(this.newPenerbit).subscribe(update =>{
      console.log(update);
      this.loadPenerbitData();
      this.newPenerbit = new Penerbit();
    }, error=>{
      this.isError = true;
      this.error = error;
      console.log(error);
    })
  }

  onRemoveDep(id : string){
    console.log(id);
    this.penerbitService.deletePenerbit(id).subscribe(data =>{
      if(data){
        this.loadPenerbitData();
      } console.log(data);
    })
  }

  onEdit(penerbit){
    this.isEdit = true;
    this.newPenerbit = penerbit;
  }

}
