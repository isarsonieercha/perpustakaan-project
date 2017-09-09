///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package com.perpus.perpustakaan;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

///**
// *
// * @author Administrator
// */
@Component
public class CorsFilter extends OncePerRequestFilter{

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain fc) throws ServletException, IOException {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "authorization, content-type," + "xsrf-token, Cache-Control");
        res.addHeader("Access-Control-Expose-Headers", "xsrf-token");
        
        if("OPTIONS".equals(req.getMethod())){
            res.setStatus(HttpServletResponse.SC_OK);
        } else {
            fc.doFilter(req, res);
        }
    }
    
}
