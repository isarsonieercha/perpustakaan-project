import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let url: string = 'http://localhost:9090/perpustakaan/pinjam';

@Injectable()
export class PinjamService{

    constructor(private http : Http){
    }

    findAllPinjam(){
        return this
            .http
            .get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deletePinjam(id: string){
        return this
            .http
            .delete(url + '/' + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    saveNewPinjam(pinjam){
        let headers = new Headers({'Content-Type':'application/json', 'Cache-Control':'no-cahe'});
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(url,pinjam,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    updatePinjam(pinjam){
        let headers = new Headers({'Content-Type':'application/json', 'Cache-Control':'no-cahe'});
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .put(url,pinjam,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
        
    }
}