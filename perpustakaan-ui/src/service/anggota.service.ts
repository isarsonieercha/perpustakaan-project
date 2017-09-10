import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Anggota } from "../interface/anggota";
import { Md5 } from "ts-md5/dist/md5";

let url: string = 'http://localhost:9090/perpustakaan/anggota';
@Injectable()
export class AnggotaService{
    constructor(private http: Http){
    }

    register(anggota){
        anggota.password = Md5.hashStr(anggota.password).toString();
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        let options = new RequestOptions({ headers: headers });
        return this
            .http
            .post(url + '/register', anggota, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    login(login: Anggota){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        let options = new RequestOptions({ headers: headers });
        return this
            .http
            .post(url + '/login', login, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    findAllAnggota(){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this.http.get(url, options).map(res => res.json()).catch(this.handleError);
    }

    handleError(error) {
        return Observable.throw(error.json() || 'Server error');
    }
    
}