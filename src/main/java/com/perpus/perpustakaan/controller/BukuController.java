///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.controller;

import com.perpus.perpustakaan.dto.SearchForm;
import com.perpus.perpustakaan.entity.Buku;
import com.perpus.perpustakaan.services.BukuService;
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
@RequestMapping("/perpustakaan/buku")
public class BukuController {
    @Autowired
    private BukuService bukuService;
    
    @RequestMapping(method = RequestMethod.POST)
    public Buku insertNewBuku(@RequestBody Buku buku) {
        return bukuService.insertNewBuku(buku);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Buku> findAllBuku() {
        return bukuService.findAllBuku();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Buku findBukuById(@PathVariable("id") Long id) {
        return bukuService.findBukuById(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Buku updateBuku(@RequestBody Buku buku) {
        return bukuService.updateBuku(buku);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removeBukuById(@PathVariable("id") Long id) {
        return bukuService.removeBuku(id);
    }
    
    @RequestMapping(method = RequestMethod.GET, value = "/penerbit/{id}")
    public List<Buku> findByPenerbit(@PathVariable("id") Long id) {
        return bukuService.findByPenerbitId(id);
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/judul")
    public List<Buku> findByJudul(@RequestBody SearchForm form) {
        return bukuService.findByJudul(form.getSearchKey());
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/pengarang")
    public List<Buku> findByPengarang(@RequestBody SearchForm form) {
        return bukuService.findByPengarang(form.getSearchKey());
    }
}
