import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginData } from '../models/user.model';

export interface UserRegistrationData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegistrationResponse {
  message?: string;
  userId?: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  userId: string;
  email: string;
  fullName: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = environment.api_url;
  private readonly http: HttpClient = inject(HttpClient);

  public registerUser(userData: UserRegistrationData): Observable<RegistrationResponse> {
    const endpoint = `${this.apiUrl}api/account/register`;
    
    return this.http.post<RegistrationResponse>(endpoint, userData);
  }

  public loginUser(userData: UserLoginData): Observable<LoginResponse> {
    const endpoint = `${this.apiUrl}api/account/login`;

    return this.http.post<LoginResponse>(endpoint, userData);
  }
}