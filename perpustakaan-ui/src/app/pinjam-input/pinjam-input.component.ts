import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { NgProgressService } from "ngx-progressbar";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { Buku } from "../../interface/buku";
import { BukuService } from "../../service/buku.service";
import { Anggota } from "../../interface/anggota";
import { AnggotaService } from "../../service/anggota.service";
import { Pinjam } from "../../interface/pinjam";
import { PinjamService } from "../../service/pinjam.service";

@Component({
  selector: 'app-buku-input',
  templateUrl: './buku-input.component.html',
  styleUrls: ['./buku-input.component.css']
})
export class BukuInputComponent implements OnInit {

    newPinjam: Pinjam = new Pinjam();
    newBuku: Buku = new Buku();
    buku: Buku[] = [];
    newAnggota: Anggota = new Anggota();
    anggota: Anggota[] = [];
    isError: boolean = false;
    error: string;

  constructor(private bukuService: BukuService,
    private anggotaService: AnggotaService,
    private pinjamService: PinjamService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private router: Router,
    public progressService: NgProgressService) {

    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.loadBuku();
    this.loadAnggota();
  }

  loadBuku() {
    this.progressService.start();
    this.bukuService.findAllBuku().subscribe(output => {
      console.log(output);
      this.buku = output;
      this.progressService.done();
    }, error => {
      this.progressService.done();
      this.isError = true;
      this.error = error;
      console.log(error);
    })
  }

  loadAnggota() {
    this.progressService.start();
    this.anggotaService.findAllAnggota().subscribe(output => {
      console.log(output);
      this.anggota = output;
      this.progressService.done();
    }, error => {
      this.progressService.done();
      this.isError = true;
      this.error = error;
      console.log(error);
    })
  }

  onInsertNewPinjam() {
    this.progressService.start();
    this.pinjamService.saveNewPinjam(this.newPinjam).subscribe(output => {
      console.log(output);
      this.toastr.success('Pinjam Added!', null, { toastLife: 3000 });
      this.newPinjam = new Pinjam();
      this.router.navigate(["list-pinjam"]);
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
