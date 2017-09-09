///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.repo;

import com.perpus.perpustakaan.entity.Petugas;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
//
///**
// *
// * @author ISAR SONIE ERCHA
// */
public interface PetugasRepo extends CrudRepository<Petugas, Long> {
    @Query("Select pt from Petugas pt where LOWER(pt.email) = LOWER(:email)")
    public Petugas findByEmail(@Param("email") String email);
}
