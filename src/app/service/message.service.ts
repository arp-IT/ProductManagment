import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<any>();
    private subjectProductUpdate = new Subject<any>();

    sendMessage(data: any) {
        this.subject.next({ selectedProduct: data });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }


    setProductUpdate(status: any) {
        this.subjectProductUpdate.next({ status: status });
    }

    getProductUpdate(): Observable<any> {
        return this.subjectProductUpdate.asObservable();
    }

}