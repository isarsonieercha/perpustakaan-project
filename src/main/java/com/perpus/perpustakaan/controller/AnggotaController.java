///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.controller;

import com.perpus.perpustakaan.dto.LoginObject;
import com.perpus.perpustakaan.entity.Anggota;
import com.perpus.perpustakaan.services.AnggotaService;
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
@RequestMapping("/perpustakaan/anggota")
public class AnggotaController {
    @Autowired
    private AnggotaService anggotaService;
    
    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public Anggota register(@RequestBody Anggota agg) throws Exception{
        return anggotaService.register(agg);
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public Anggota login(@RequestBody LoginObject login) throws Exception{
        return anggotaService.login(login.getUsername(), login.getPassword());
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Anggota> findAllAnggota() {
        return anggotaService.findAllAnggota();
    }
    
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removeAnggotaById(@PathVariable("id") Long id) {
        return anggotaService.removeAnggota(id);
    }
}
