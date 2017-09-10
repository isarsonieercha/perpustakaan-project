import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { NgProgressService } from "ngx-progressbar";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { Penerbit } from "../../interface/penerbit";
import { PenerbitService } from "../../service/penerbit.service";

@Component({
  selector: 'app-penerbit-input',
  templateUrl: './penerbit-input.component.html',
  styleUrls: ['./penerbit-input.component.css']
})
export class PenerbitInputComponent implements OnInit {

  newPenerbit: Penerbit = new Penerbit();
  penerbits: Penerbit[] = [];
  isError: boolean = false;
  error: string;

  constructor(private penerbitService: PenerbitService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    public progressService: NgProgressService,
    private router: Router) {
    this.toastr.setRootViewContainerRef(vcr)
  }

  onInsertNewPenerbit() {
    this.progressService.start();
    this.penerbitService.saveNewPenerbit(this.newPenerbit).subscribe(output => {
      console.log(output);
      this.newPenerbit = new Penerbit();
      this.router.navigate(["list-penerbit"]);
      this.progressService.done();
      this.toastr.success('Penerbit Added!', null, { toastLife: 3000 });
    }, error => {
      this.toastr.error('{{error}}', null, { toastLife: 3000 });
      this.progressService.done();
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }
  ngOnInit() {
  }

}
