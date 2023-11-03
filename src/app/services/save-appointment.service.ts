import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveAppointmentService {
  private agregarObjetoSubject = new Subject<void>();

  addAppointment$ = this.agregarObjetoSubject.asObservable();

  activarAgregarObjeto() {
    this.agregarObjetoSubject.next();
  }
}
