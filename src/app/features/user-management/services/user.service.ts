import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { URLs } from "src/app/core/apis/apiUrls";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.BASE_URL + URLs.users);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.BASE_URL + URLs.singleUser}/${userId}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(environment.BASE_URL + URLs.users, user);
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.BASE_URL + URLs.singleUser }/${user.id}`, user);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${environment.BASE_URL + URLs.singleUser }/${userId}`);
  }
}
