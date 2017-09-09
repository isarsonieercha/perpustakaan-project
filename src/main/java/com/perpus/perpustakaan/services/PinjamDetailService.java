///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.services;

import com.perpus.perpustakaan.entity.PinjamDetail;
import com.perpus.perpustakaan.repo.PinjamDetailRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

///**
// *
// * @author ISAR SONIE ERCHA
// */
@Service("pinjamDetailsService")
@Transactional
public class PinjamDetailService {

    @Autowired
    private PinjamDetailRepo pinjamDetailRepo;
 
    public PinjamDetail insertNewPinjamDetail(PinjamDetail pinjamDetail) {
        return pinjamDetailRepo.save(pinjamDetail);
    }

    public List<PinjamDetail> findAllPinjamDetail() {
        return IteratorUtils.toList(pinjamDetailRepo.findAll().iterator());
    }

    public PinjamDetail findPinjamDetailById(Long id) {
        return pinjamDetailRepo.findOne(id);
    }

    public PinjamDetail updatePinjamDetail(PinjamDetail pinjamDetail) {
        return pinjamDetailRepo.save(pinjamDetail);
    }

    public boolean removePinjamDetail(Long id) {
        pinjamDetailRepo.delete(id);
        return true;
    }
          
    public List<PinjamDetail> findByPinjamId(Long pinjamId){
        return pinjamDetailRepo.findByPinjamId(pinjamId);
    }
    
    public List<PinjamDetail> findByStatus(String status){
        return pinjamDetailRepo.findByStatus("%" + status + "%");
    }
    
    public List<PinjamDetail> findByJmlBuku(int tglPinjamDetail){
        return pinjamDetailRepo.findByJmlBuku(tglPinjamDetail);
    }
    
    public List<PinjamDetail> findByTerlambat(int terlambat){
        return pinjamDetailRepo.findByTerlambat(terlambat);
    }
}

