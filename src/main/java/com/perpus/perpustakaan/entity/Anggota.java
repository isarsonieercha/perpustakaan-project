/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpus.perpustakaan.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


/**
 *
 * @author user
 */
@Entity
public class Anggota implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "anggota")
    private List<Pinjam> pinjams;
    
    @Column(length = 100, nullable = false, unique = true)
    private String namaAnggota;
    @Column(length = 50, nullable = false)
    private String jenisKelamin;
    @Column(length = 50, nullable = false, unique = true)
    private String noTelp;
    @Column(length = 150, nullable = false, unique = true)
    private String alamat;
    @Column(length = 50, nullable = false, unique = true)
    private String email;
    @Column(length = 50, nullable = false, unique = true)
    private String password;
    
    public Anggota(){
        
    }
    
    public Anggota(Anggota agg){
        this.id = agg.getId();
        this.email = agg.getEmail();
        this.password = agg.getPassword();
    }

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
     * @return the namaAnggota
     */
    public String getNamaAnggota() {
        return namaAnggota;
    }

    /**
     * @param namaAnggota the namaAnggota to set
     */
    public void setNamaAnggota(String namaAnggota) {
        this.namaAnggota = namaAnggota;
    }

    /**
     * @return the jenisKelamin
     */
    public String getJenisKelamin() {
        return jenisKelamin;
    }

    /**
     * @param jenisKelamin the jenisKelamin to set
     */
    public void setJenisKelamin(String jenisKelamin) {
        this.jenisKelamin = jenisKelamin;
    }

    /**
     * @return the noTelp
     */
    public String getNoTelp() {
        return noTelp;
    }

    /**
     * @param noTelp the noTelp to set
     */
    public void setNoTelp(String noTelp) {
        this.noTelp = noTelp;
    }

    /**
     * @return the alamat
     */
    public String getAlamat() {
        return alamat;
    }

    /**
     * @param alamat the alamat to set
     */
    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }

    /**
     * @return the pinjams
     */
    public List<Pinjam> getPinjams() {
        return pinjams;
    }

    /**
     * @param pinjams the pinjams to set
     */
    public void setPinjams(List<Pinjam> pinjams) {
        this.pinjams = pinjams;
    }

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }
    
    
}
