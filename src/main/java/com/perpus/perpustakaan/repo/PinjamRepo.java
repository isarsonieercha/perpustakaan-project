///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.repo;

import com.perpus.perpustakaan.entity.Pinjam;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

///**
// *
// * @author ISAR SONIE ERCHA
// */
public interface PinjamRepo extends CrudRepository<Pinjam, Long> {
    
    @Query("SELECT p FROM Pinjam p WHERE p.buku.id= :bukuId")
    public List<Pinjam> findByBukuId(@Param("bukuId") Long bukuId);
    
    @Query("SELECT p FROM Pinjam p WHERE p.anggota.id= :anggotaId")
    public List<Pinjam> findByAnggotaId(@Param("anggotaId") Long anggotaId);
    
    @Query("SELECT p FROM Pinjam p WHERE (p.tglPinjam) = :tglPinjam")
    public List<Pinjam> findByTglPinjam(@Param("tglPinjam") int tglPinjam);
    
    @Query("SELECT p FROM Pinjam p WHERE (p.tglKembali) = :tglKembali")
    public List<Pinjam> findByTglKembali(@Param("tglKembali") int tglKembali);
}
