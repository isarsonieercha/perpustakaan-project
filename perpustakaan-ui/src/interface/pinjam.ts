import { Buku } from "./buku";
import { Anggota } from "./anggota";

export class Pinjam {
    id: number;
    tglPinjam: string;
    tglHarusKembali: string;
    tglKembali: string;
    buku: Buku;
    anggota: Anggota;
}