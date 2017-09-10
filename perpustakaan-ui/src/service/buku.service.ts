import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let url: string = 'http://localhost:9090/perpustakaan/buku';

@Injectable()
export class BukuService{

    constructor(private http : Http){
    }

    findAllBuku(){
        return this
            .http
            .get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deleteBuku(id: string){
        return this
            .http
            .delete(url + '/' + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    saveNewBuku(buku){
        let headers = new Headers({'Content-Type':'application/json', 'Cache-Control':'no-cahe'});
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(url,buku,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    updateBuku(buku){
        let headers = new Headers({'Content-Type':'application/json', 'Cache-Control':'no-cahe'});
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .put(url,buku,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
        
    }
}