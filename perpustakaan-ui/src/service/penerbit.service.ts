import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let url: string = 'http://localhost:9090/perpustakaan/penerbit';

@Injectable()
export class PenerbitService{

    constructor(private http : Http){
    }

    findAllPenerbit(){
        return this
            .http
            .get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deletePenerbit(id: string){
        return this
            .http
            .delete(url + '/' + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    saveNewPenerbit(penerbit){
        let headers = new Headers({'Content-Type':'application/json', 'Cache-Control':'no-cahe'});
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(url,penerbit,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    updatePenerbit(penerbit){
        let headers = new Headers({'Content-Type':'application/json', 'Cache-Control':'no-cahe'});
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .put(url,penerbit,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
        
    }
}