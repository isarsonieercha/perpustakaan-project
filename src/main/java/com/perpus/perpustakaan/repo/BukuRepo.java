///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.repo;
//
import com.perpus.perpustakaan.entity.Buku;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

///**
// *
// * @author ISAR SONIE ERCHA
// */
public interface BukuRepo extends CrudRepository<Buku, Long> {
    
    @Query("SELECT b FROM Buku b WHERE b.penerbit.id= :penerbitId")
    public List<Buku> findByPenerbitId(@Param("penerbitId") Long penerbitId);
    
    @Query("SELECT b FROM Buku b WHERE LOWER(b.judul) LIKE LOWER(:judul)")
    public List<Buku> findByJudul(@Param("judul") String judul);
    
    @Query("SELECT b FROM Buku b WHERE LOWER(b.pengarang) LIKE LOWER(:pengarang)")
    public List<Buku> findByPengarang(@Param("pengarang") String pengarang);
}
