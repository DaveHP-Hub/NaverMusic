import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  constructor(private http: HttpClient) { }

getQueryVotes(query: string)
{
const URL = `https://localhost:44395/api/Vote/${query}`;
return this.http.get(URL);

}

getVotesDay(typeVote: string, apiname: string)
{
return this.getQueryVotes(`GetVotes?typeVote=${typeVote}&apiname=${apiname}`);
}


getQueryM(query: string)
{
const URL = `https://localhost:44395/api/Votes/${query}`;
return this.http.get(URL);

}

getVotesMonth(typeVote: string, apiname: string)
{
return this.getQueryM(`GetTuples?typeVote=${typeVote}&apiname=${apiname}`);

}


}
