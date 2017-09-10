import { Component, OnInit } from '@angular/core';
import { Penerbit } from '../../interface/penerbit';
import { PenerbitService } from '../../service/penerbit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-penerbit-input',
  templateUrl: './penerbit-input.component.html',
  styleUrls: ['./penerbit-input.component.css']
})
export class PenerbitInputComponent implements OnInit {

  penerbit:Penerbit[]=[];
  newPenerbit:Penerbit = new Penerbit;
  isError: boolean = false;
  error: string;
  constructor(private penerbitService: PenerbitService,
    private router: Router) { }

  ngOnInit() {
  }

onSaveNewPenerbit(penerbit){
  this.penerbitService.saveNewPenerbit(this.newPenerbit).subscribe(insert =>{
    this.penerbit.push(insert);
    this.newPenerbit = new Penerbit();
    this.router.navigate(["list-penerbit"]);
  })
}

}

