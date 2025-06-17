// user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = 'https://upload-archivematica.laplata.gob.ar'; // luego configurable

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  createUser(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  updateUser(id: string, data: any) {
    return this.http.put(`${this.baseUrl}/users/${id}`, data);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
}

