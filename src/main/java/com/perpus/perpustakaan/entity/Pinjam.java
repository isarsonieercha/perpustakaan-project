/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpus.perpustakaan.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;

/**
 *
 * @author user
 */
@Entity
public class Pinjam implements Serializable{

    @OneToMany(mappedBy = "pinjam")
    private List<PinjamDetail> pinjamDetails;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Buku buku;
    @ManyToOne
    private Anggota anggota;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date tglPinjam;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date tglHarusKembali;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date tglKembali;
    
    
    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the buku
     */
    public Buku getBuku() {
        return buku;
    }

    /**
     * @param buku the buku to set
     */
    public void setBuku(Buku buku) {
        this.buku = buku;
    }

    /**
     * @return the anggota
     */
    public Anggota getAnggota() {
        return anggota;
    }

    /**
     * @param anggota the anggota to set
     */
    public void setAnggota(Anggota anggota) {
        this.anggota = anggota;
    }

    /**
     * @return the pinjamDetails
     */
    public List<PinjamDetail> getPinjamDetails() {
        return pinjamDetails;
    }

    /**
     * @param pinjamDetails the pinjamDetails to set
     */
    public void setPinjamDetails(List<PinjamDetail> pinjamDetails) {
        this.pinjamDetails = pinjamDetails;
    }

    /**
     * @return the tglPinjam
     */
    public Date getTglPinjam() {
        return tglPinjam;
    }

    /**
     * @param tglPinjam the tglPinjam to set
     */
    public void setTglPinjam(Date tglPinjam) {
        this.tglPinjam = tglPinjam;
    }

    /**
     * @return the tglHarusKembali
     */
    public Date getTglHarusKembali() {
        return tglHarusKembali;
    }

    /**
     * @param tglHarusKembali the tglHarusKembali to set
     */
    public void setTglHarusKembali(Date tglHarusKembali) {
        this.tglHarusKembali = tglHarusKembali;
    }

    /**
     * @return the tglKembali
     */
    public Date getTglKembali() {
        return tglKembali;
    }

    /**
     * @param tglKembali the tglKembali to set
     */
    public void setTglKembali(Date tglKembali) {
        this.tglKembali = tglKembali;
    }
    
}
