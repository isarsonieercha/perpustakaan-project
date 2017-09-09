///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */

package com.perpus.perpustakaan.services;

import com.perpus.perpustakaan.entity.Petugas;
import com.perpus.perpustakaan.entity.PetugasSecure;
import com.perpus.perpustakaan.repo.PetugasRepo;
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
@Service("petugasService")
@Transactional
public class PetugasService implements UserDetailsService{

    @Autowired
    private PetugasRepo petugasRepo;
    
        @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Petugas pet = petugasRepo.findByEmail(email);
        if (pet == null) {
            throw new UsernameNotFoundException("Who are you???" + email);
        } else {
            List<String> userRoles = new ArrayList<String>();
            userRoles.add("USER");
            return new PetugasSecure(pet, userRoles);
        }
    }
    
    public Petugas registerPetugas(Petugas pet) throws java.lang.Exception {
        Petugas temp = petugasRepo.findByEmail(pet.getEmail());
        if (temp != null) {
            throw new Exception("Email Already Registered");
        }
        return petugasRepo.save(pet);
    }

    public Petugas loginPetugas(String email, String pass) throws Exception {
        Petugas petugas = petugasRepo.findByEmail(email);
        if (petugas != null) {
            if (!petugas.getPassword().equals(DigestUtils.md5Hex(pass))) {
                petugas = null;
                throw new Exception("login fail");
            } else {
                return petugas;
            }
        } else {
            throw new Exception("login fail");
        }
    }
 
    public Petugas insertNewPetugas(Petugas petugas) {
        return petugasRepo.save(petugas);
    }

    public List<Petugas> findAllPetugas() {
        return IteratorUtils.toList(petugasRepo.findAll().iterator());
    }

    public Petugas findPetugasById(Long id) {
        return petugasRepo.findOne(id);
    }

    public Petugas updatePetugas(Petugas petugas) {
        return petugasRepo.save(petugas);
    }

    public boolean removePetugas(Long id) {
        petugasRepo.delete(id);
        return true;
    }
}

