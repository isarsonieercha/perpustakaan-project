///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.controller;

import com.perpus.perpustakaan.entity.Penerbit;
import com.perpus.perpustakaan.services.PenerbitService;
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
@RequestMapping("/perpustakaan/penerbit")
public class PenerbitController {
    @Autowired
    private PenerbitService penerbitService;

    @RequestMapping(method = RequestMethod.POST)
    public Penerbit insertNewPenerbit(@RequestBody Penerbit pen) {
        return penerbitService.insertNewPenerbit(pen);
    }

    @RequestMapping(method = RequestMethod.GET) 
    public List<Penerbit> findAllPenerbit() {
        return penerbitService.findAllPenerbit();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Penerbit findPenerbitById(@PathVariable("id") Long id) {
        return penerbitService.findPenerbitById(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Penerbit updatePenerbit(@RequestBody Penerbit pen) {
        return penerbitService.updatePenerbit(pen);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removePenerbitById(@PathVariable("id") Long id) {
        return penerbitService.removePenerbit(id);
    }
}
