import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ColorsComponent } from "./layout/colors/colors.component";

const routes: Routes = [{ path: "", component: ColorsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
