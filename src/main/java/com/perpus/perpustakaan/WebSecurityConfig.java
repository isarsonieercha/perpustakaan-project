///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan;

import com.perpus.perpustakaan.services.AnggotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;

///**
// *
// * @author Administrator
// */
@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
    @Autowired AnggotaService anggotaService;
    
    @Autowired
    public void configAuth(AuthenticationManagerBuilder auth) throws Exception{
        auth.userDetailsService(anggotaService);
    }
    
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.addFilterBefore(new CorsFilter(), ChannelProcessingFilter.class);
        http.authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers(HttpMethod.POST, "/perpustakaan/anggota/register").permitAll()
                .antMatchers(HttpMethod.POST, "/perpustakaan/anggota/login").permitAll()
                .anyRequest().fullyAuthenticated()
                .and().httpBasic().and().csrf().disable();
    }
    
}
