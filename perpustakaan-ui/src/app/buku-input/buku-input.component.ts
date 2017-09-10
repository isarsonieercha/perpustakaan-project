import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Buku } from '../../interface/buku';
import { BukuService } from '../../service/buku.service';
import { Penerbit } from '../../interface/penerbit';
import {NgProgressService} from "ngx-progressbar";
import {ToastsManager} from "ng2-toastr/ng2-toastr";
import { PenerbitService } from '../../service/penerbit.service';

@Component({
  selector: 'app-buku-input',
  templateUrl: './buku-input.component.html',
  styleUrls: ['./buku-input.component.css']
})
export class BukuInputComponent implements OnInit {

  newBuku: Buku = new Buku();
  anggota: Buku[]= [];
  isError: boolean = false;
  error: string;
  constructor(private bukuService: BukuService,
    private router: Router) { }

    onBukuSave(){
      this.bukuService.saveNewBuku(this.newBuku).subscribe(insert =>{
        console.log(insert);
        this.newBuku = new Buku();
        this.router.navigate(["list-buku"]);
      })
    }

    ngOnInit() {
      this.loadPenerbit();
    }

    loadPenerbit() {
      this
        .penerbitService
        .findAllDepartement()
        .subscribe(output => {
          console.log(output);
          this.Penerbit = output;
        }, error => {
          this.isError = true;
          this.error = error;
          console.log(error);
        });
    }

    onInsertNewBuku() {
        this.progressService.start();
        this
          .bukuService
          .saveNewEmployee(this.newBuku)
          .subscribe(output => {
            this.progressService.done();
            this.toastr.success('Buku saved.', null, {toastLife: 3000});
            console.log(output);
            //kembali ke list buku
            this.newBuku = new Buku();
            //this.router.navigate(["list-employee"]);
          }, error => {
            this.progressService.done();
            this.toastr.error('Something wrong, try again', 'Oops!',  {toastLife: 3000});
          });
    }

  }
