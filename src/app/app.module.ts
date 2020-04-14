import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from "./layout/nav/nav.component";
import { MaterialModule } from "./modules/material.module";
import {
  ColorsComponent,
  HexDialogComponent,
} from "./layout/colors/colors.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./data/api.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ColorsComponent,
    HexDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  entryComponents: [HexDialogComponent],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
