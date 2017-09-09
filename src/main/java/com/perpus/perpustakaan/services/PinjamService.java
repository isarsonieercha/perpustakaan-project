///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.services;

import com.perpus.perpustakaan.entity.Pinjam;
import com.perpus.perpustakaan.repo.PinjamRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

///**
// *
// * @author ISAR SONIE ERCHA
// */
@Service("pinjamService")
@Transactional
public class PinjamService {

    @Autowired
    private PinjamRepo pinjamRepo;
 
    public Pinjam insertNewPinjam(Pinjam pinjam) {
        return pinjamRepo.save(pinjam);
    }

    public List<Pinjam> findAllPinjam() {
        return IteratorUtils.toList(pinjamRepo.findAll().iterator());
    }

    public Pinjam findPinjamById(Long id) {
        return pinjamRepo.findOne(id);
    }

    public Pinjam updatePinjam(Pinjam pinjam) {
        return pinjamRepo.save(pinjam);
    }

    public boolean removePinjam(Long id) {
        pinjamRepo.delete(id);
        return true;
    }
          
    public List<Pinjam> findByBukuId(Long bukuId){
        return pinjamRepo.findByBukuId(bukuId);
    }
    
    public List<Pinjam> findByAnggotaId(Long anggotaId){
        return pinjamRepo.findByAnggotaId(anggotaId);
    }
    
    public List<Pinjam> findByTglPinjam(int tglPinjam){
        return pinjamRepo.findByTglPinjam(tglPinjam);
    }
    
    public List<Pinjam> findByTglKembali(int tglKembali){
        return pinjamRepo.findByTglKembali(tglKembali);
    }
}

