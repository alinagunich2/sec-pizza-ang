import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { catchError, map,tap,of,retry} from 'rxjs';

@Injectable()
export class AuthInterseptor implements HttpInterceptor{

    constructor(private authServise:AuthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req)
        
        const authTocen = this.authServise.getTocen()
       const newReq =  req.clone({
            headers:req.headers.set('Authorization',authTocen)
        })

        return next.handle(newReq).pipe(
            tap({
                next:(even)=>{
                    if(even instanceof HttpRequest){
                        console.log(even)
                    }
                }
            })
        )
    }
}