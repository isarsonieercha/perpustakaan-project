/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpus.perpustakaan.entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 *
 * @author user
 */
@Entity
public class PinjamDetail implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Pinjam pinjam;
    private int jmlBuku;
    private String status;
    private int terlambat;
    private int jmlDenda;

    /**
     * @return the id
     */
    public long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * @return the pinjam
     */
    public Pinjam getPinjam() {
        return pinjam;
    }

    /**
     * @param pinjam the pinjam to set
     */
    public void setPinjam(Pinjam pinjam) {
        this.pinjam = pinjam;
    }

    /**
     * @return the status
     */
    public String getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(String status) {
        this.status = status;
    }
    /**
     * @return the jmlBuku
     */
    public int getJmlBuku() {
        return jmlBuku;
    }

    /**
     * @param jmlBuku the jmlBuku to set
     */
    public void setJmlBuku(int jmlBuku) {
        this.jmlBuku = jmlBuku;
    }

    /**
     * @return the jmlDenda
     */
    public int getJmlDenda() {
        return jmlDenda;
    }

    /**
     * @param jmlDenda the jmlDenda to set
     */
    public void setJmlDenda(int jmlDenda) {
        this.jmlDenda = jmlDenda;
    }

    /**
     * @return the terlambat
     */
    public int getTerlambat() {
        return terlambat;
    }

    /**
     * @param terlambat the terlambat to set
     */
    public void setTerlambat(int terlambat) {
        this.terlambat = terlambat;
    }
    
    
}
