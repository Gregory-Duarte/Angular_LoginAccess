import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { UserModel } from '../../models/user.model';

@Injectable()

export class HttpService {
    constructor(private http: HttpClient) { }

    UserGetAll() {
        return this.http.get<UserModel[]>(`${environment.apiUrl}/users`);
    }

    UserGetById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    UserRegister(user: UserModel) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    UserUpdate(user: UserModel, id: number) {
        user.id = id
        return this.UserRegister(user);
    }

    Delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
}