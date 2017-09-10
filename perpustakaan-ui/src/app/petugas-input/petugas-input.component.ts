import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { NgProgressService } from "ngx-progressbar";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { Petugas } from "../../interface/petugas";
import { PetugasService } from "../../service/petugas.service";

@Component({
  selector: 'app-petugas-input',
  templateUrl: './petugas-input.component.html',
  styleUrls: ['./petugas-input.component.css']
})
export class PetugasInputComponent implements OnInit {

  newPetugas: Petugas = new Petugas();
  isError: boolean = false;
  error: string;

  constructor(private petugasService: PetugasService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    public progressService: NgProgressService,
    private router: Router) {
    this.toastr.setRootViewContainerRef(vcr)
  }

  onInsertNewPetugas() {
    this.progressService.start();
    this.petugasService.saveNewPetugas(this.newPetugas).subscribe(output => {
      this.newPetugas = new Petugas();
      this.router.navigate(["list-petugas"]);
      this.progressService.done();
      this.toastr.success('Petugas Added!', null, { toastLife: 3000 });
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
