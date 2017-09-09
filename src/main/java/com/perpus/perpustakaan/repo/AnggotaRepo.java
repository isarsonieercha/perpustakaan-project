///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.repo;
//
import com.perpus.perpustakaan.entity.Anggota;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author ISAR SONIE ERCHA
 */
public interface AnggotaRepo extends CrudRepository<Anggota, Long> {
    @Query("Select a from Anggota a where LOWER(a.email) = LOWER(:email)")
    public Anggota findByEmail(@Param("email") String email);
}
