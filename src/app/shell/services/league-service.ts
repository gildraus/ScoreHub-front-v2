import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface League {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  version: number;
}

@Injectable({
    providedIn: 'root'
})


export class LeagueService {

    constructor(private http: HttpClient) {}
    private apiUrl = environment.api_url;

    //TO DO: does not work, need to fix the API
    leagueList() {
        const url =  this.apiUrl + "league";
        return this.http.get(url);
    }
}