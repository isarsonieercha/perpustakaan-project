///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.controller;

import com.perpus.perpustakaan.dto.LoginObject;
import com.perpus.perpustakaan.entity.Petugas;
import com.perpus.perpustakaan.services.PetugasService;
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
//
@RestController
@RequestMapping("/perpustakaan/petugas")
public class PetugasController {
    @Autowired
    private PetugasService petugasService;
    
    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public Petugas registerPetugas(@RequestBody Petugas pet) throws Exception{
        return petugasService.registerPetugas(pet);
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public Petugas loginPetugas(@RequestBody LoginObject login) throws Exception{
        return petugasService.loginPetugas(login.getUsername(), login.getPassword());
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Petugas> findAllPetugas() {
        return petugasService.findAllPetugas();
    }
    
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removePetugasaById(@PathVariable("id") Long id) {
        return petugasService.removePetugas(id);
    }
}
