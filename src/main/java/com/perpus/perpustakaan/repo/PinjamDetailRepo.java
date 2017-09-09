///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.repo;

import com.perpus.perpustakaan.entity.PinjamDetail;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

///**
// *
// * @author ISAR SONIE ERCHA
// */
public interface PinjamDetailRepo extends CrudRepository<PinjamDetail, Long> {
    
    @Query("SELECT pd FROM PinjamDetail pd WHERE pd.pinjam.id= :pinjamId")
    public List<PinjamDetail> findByPinjamId(@Param("pinjamId") Long pinjamId);   
        
    @Query("SELECT pd FROM PinjamDetail pd WHERE pd.jmlBuku = :jmlBuku")
    public List<PinjamDetail> findByJmlBuku(@Param("jmlBuku") int jmlBuku);
    
    @Query("SELECT pd FROM PinjamDetail pd WHERE LOWER(pd.status) LIKE LOWER(:status)")
    public List<PinjamDetail> findByStatus(@Param("status") String status);
    
    @Query("SELECT pd FROM PinjamDetail pd WHERE pd.terlambat = :terlambat")
    public List<PinjamDetail> findByTerlambat(@Param("terlambat") int terlambat);
}
