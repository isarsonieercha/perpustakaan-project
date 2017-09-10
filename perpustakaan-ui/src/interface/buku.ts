import { Penerbit } from "./penerbit";

export class Buku {
    id: number;
    judul: string;
    pengarang: string;
    jumlah: number;
    penerbit: Penerbit;
}