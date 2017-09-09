///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan.services;

import com.perpus.perpustakaan.entity.Anggota;
import com.perpus.perpustakaan.entity.AnggotaSecure;
import com.perpus.perpustakaan.repo.AnggotaRepo;
import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

///**
// *
// * @author ISAR SONIE ERCHA
// */
@Service("anggotaService")
@Transactional
public class AnggotaService implements UserDetailsService {

    @Autowired
    private AnggotaRepo anggotaRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Anggota agg = anggotaRepo.findByEmail(email);
        if (agg == null) {
            throw new UsernameNotFoundException("Who are you???" + email);
        } else {
            List<String> userRoles = new ArrayList<String>();
            userRoles.add("USER");
            return new AnggotaSecure(agg, userRoles);
        }
    }

    public Anggota register(Anggota agg) throws java.lang.Exception {
        Anggota temp = anggotaRepo.findByEmail(agg.getEmail());
        if (temp != null) {
            throw new Exception("Email Already Registered");
        }
        return anggotaRepo.save(agg);
    }

    public Anggota login(String email, String pass) throws Exception {
        Anggota anggota = anggotaRepo.findByEmail(email);
        if (anggota != null) {
            if (!anggota.getPassword().equals(DigestUtils.md5Hex(pass))) {
                anggota = null;
                throw new Exception("login fail");
            } else {
                return anggota;
            }
        } else {
            throw new Exception("login fail");
        }
    }

    public Anggota insertNewAnggota(Anggota anggota) {
        return anggotaRepo.save(anggota);
    }

    public List<Anggota> findAllAnggota() {
        return IteratorUtils.toList(anggotaRepo.findAll().iterator());
    }

    public Anggota findAnggotaById(Long id) {
        return anggotaRepo.findOne(id);
    }

    public Anggota updateAnggota(Anggota anggota) {
        return anggotaRepo.save(anggota);
    }

    public boolean removeAnggota(Long id) {
        anggotaRepo.delete(id);
        return true;
    }

}
