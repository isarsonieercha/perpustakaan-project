///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.controller;

import com.perpus.perpustakaan.entity.PinjamDetail;
import com.perpus.perpustakaan.services.PinjamDetailService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

///**
// *
// * @author Administrator
// */
@RestController
@RequestMapping("/perpustakaan/pinjamdetail")
public class PinjamDetailController {

    @Autowired
    private PinjamDetailService pinjamDetailService;

    @RequestMapping(method = RequestMethod.POST)
    public PinjamDetail insertPinjamDetail(@RequestBody PinjamDetail pinjamDt) {
        return pinjamDetailService.insertNewPinjamDetail(pinjamDt);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<PinjamDetail> findAllPinjamDt() {
        return pinjamDetailService.findAllPinjamDetail();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public PinjamDetail findPinjamDetailById(@PathVariable("id") Long id) {
        return pinjamDetailService.findPinjamDetailById(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public PinjamDetail updatePinjamDetail(@RequestBody PinjamDetail pinjamDetail) {
        return pinjamDetailService.updatePinjamDetail(pinjamDetail);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removePinjamDetailById(@PathVariable("id") Long id) {
        return pinjamDetailService.removePinjamDetail(id);
    }
}
