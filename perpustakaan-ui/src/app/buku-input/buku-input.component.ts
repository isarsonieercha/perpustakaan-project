import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { NgProgressService } from "ngx-progressbar";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { Buku } from "../../interface/buku";
import { Penerbit } from "../../interface/penerbit";
import { BukuService } from "../../service/buku.service";
import { PenerbitService } from "../../service/penerbit.service";

@Component({
  selector: 'app-buku-input',
  templateUrl: './buku-input.component.html',
  styleUrls: ['./buku-input.component.css']
})
export class BukuInputComponent implements OnInit {

  newBuku: Buku = new Buku();
  penerbits: Penerbit[] = [];
  isError: boolean = false;
  error: string;

  constructor(private bukuService: BukuService,
    private penerbitService: PenerbitService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private router: Router,
    public progressService: NgProgressService) {

    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.loadPenerbit();
  }

  loadPenerbit() {
    this.progressService.start();
    this.penerbitService.findAllPenerbit().subscribe(output => {
      console.log(output);
      this.penerbits = output;
      this.progressService.done();
    }, error => {
      this.progressService.done();
      this.isError = true;
      this.error = error;
      console.log(error);
    })
  }

  onInsertNewBuku() {
    this.progressService.start();
    this.bukuService.saveNewBuku(this.newBuku).subscribe(output => {
      console.log(output);
      this.toastr.success('Buku Added!', null, { toastLife: 3000 });
      this.newBuku = new Buku();
      this.router.navigate(["list-buku"]);
      this.progressService.done();
    }, error => {
      this.toastr.error('{{error}}', null, { toastLife: 3000 });
      this.progressService.done();
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }


}
