import { Injectable, computed, inject, signal } from '@angular/core';
import { UsuariosResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';

interface State {
  users: UsuariosResponse[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: true,
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsuariosResponse[]>('http://localhost:8080/api/v1/usuarios')
      .subscribe(res => {
        this.#state.set({ loading: false, users: res});
      });
  }
}
