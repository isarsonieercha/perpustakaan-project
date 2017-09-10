import { Component, OnInit } from '@angular/core';
import { Buku } from '../../interface/buku';
import { Penerbit } from '../../interface/penerbit';
import { BukuService } from '../../service/buku.service';
import { PenerbitService } from '../../service/penerbit.service';
import {NgProgressService} from "ngx-progressbar";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.component.html',
  styleUrls: ['./buku-list.component.css']
})

@Component({selector: 'app-buku-list', templateUrl: './buku-list.component.html', styleUrls: ['./buku-list.component.css']})
export class BukuListComponent implements OnInit {

  buku : Buku[] = [];
  penerbit : Penerbit[] = [];
  newBuku : Buku = new Buku();
  isError : boolean = false;
  error : string;
  insertNew : boolean = false;
  isEdit: boolean = false;
  constructor(private bukuService : BukuService,
    private penerbitService : PenerbitService,
    public progressService: NgProgressService,
    private toastr: ToastsManager,
    private _vcr: ViewContainerRef) {

      this.loadBukuData();
      this.toastr.setRootViewContainerRef(_vcr);
     }

     loadBukuData() {
      this.progressService.start();
      this
        .bukuService
        .findAllBuku()
        .subscribe(output => {
          this.progressService.done();
          console.log(output);
          this.buku = output;
        }, error => {
          this.progressService.done();
          this.isError = true;
          this.error = error;
          console.log(error);
        });
    }
    onRemoveBuku(id : string) {
      this
        .bukuService
        .deleteBuku(id)
        .subscribe(data => {
          if (data) {
            this.toastr.success('Buku deleted.', null, {toastLife: 3000});
            this.loadBukuData();
          }
        }, error => {
          this.isError = true;
          this.error = error;
          console.log(error);
        })
    }


    onUpdateBuku() {
      this
        .bukuService
        .updateBuku(this.newBuku)
        .subscribe(output => {
          console.log(output);
          this.loadBukuData();
          this.newBuku = new Buku();
          this.insertNew = false;
        }, error => {
          this.isError = true;
          this.error = error;
          console.log(error);
        });
    }

    onEdit(employee) {
      this.isEdit = true;
      this.newBuku = employee;
      this.insertNew = true;
    }

    compareFn(c1: Penerbit, c2: Penerbit): boolean {
      return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
  }
