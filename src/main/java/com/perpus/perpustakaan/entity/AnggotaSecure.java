/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpus.perpustakaan.entity;

import java.util.Collection;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;

/**
 *
 * @author Administrator
 */
public class AnggotaSecure extends Anggota implements UserDetails{
    
    private List<String> userRoles;
    
    public AnggotaSecure(Anggota anggota, List<String> roles){
        super(anggota);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String rules = StringUtils.collectionToCommaDelimitedString(userRoles);       
        return AuthorityUtils.commaSeparatedStringToAuthorityList(rules);
    }

    @Override
    public String getUsername() {
        return super.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
}
