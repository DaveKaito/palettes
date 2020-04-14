import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Palettes } from "./api.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  apiUrl: string = "https://www.thecolorapi.com/scheme?";

  defaultColors = ["4E0250", "8FE388", "EFCA08", "F08700"];

  userMode;

  constructor(private http: HttpClient) {}

  getInitialPalettes(): Observable<Palettes> {
    return this.http.get<Palettes>(
      `${this.apiUrl}hex=${
        this.defaultColors[
          Math.floor(Math.random() * this.defaultColors.length)
        ]
      }&mode=analogic&count=5`
    );
  }

  getPalettes(value, userMode): Observable<Palettes> {
    return this.http.get<Palettes>(
      `${this.apiUrl}hex=${value}&mode=${userMode}&count=5`
    );
  }
}
