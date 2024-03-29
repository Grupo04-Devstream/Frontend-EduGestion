import { Injectable, computed, inject, signal } from '@angular/core';
import { UsuarioRequest, UsuariosResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

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
      .subscribe((res) => {
        this.#state.set({ loading: false, users: res });
      });
  }

  public async createUser(user: UsuarioRequest) {
    const res = this.http
      .post<UsuariosResponse>('http://localhost:8080/api/v1/usuarios', user)
      .subscribe((res) => {
        this.#state.set({
          users: [...this.#state().users, res],
          loading: false,
        });
      });

    return res;
  }

  public async deleteUser(id: number) {
    const res = this.http
      .delete(`http://localhost:8080/api/v1/usuarios/${id}`)
      .subscribe(() => {
        this.#state.set({
          users: this.#state().users.filter((user) => user.id !== id),
          loading: false,
        });
      });
    return res;
  }

  public async getUserById(id: String | Number) {
    const response = this.http
      .get<UsuariosResponse>(`http://localhost:8080/api/v1/usuarios/${id}`);
    const res = await lastValueFrom(response);
    return res;
  }

  public async updateUser(id: String | Number, user: UsuarioRequest) {
    const response = this.http
      .put<UsuariosResponse>(
        `http://localhost:8080/api/v1/usuarios/${id}`,
        user
      );
    const res = await lastValueFrom(response);
    this.#state.set({
      users: this.#state().users.map((user) => {
        if (user.id == id) {
          return res;
        }
        return user;
      }),
      loading: false,
    });
    return res;
  }
}
