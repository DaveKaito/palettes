import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ApiService } from "src/app/data/api.service";

@Component({
  selector: "app-colors",
  templateUrl: "./colors.component.html",
  styleUrls: ["./colors.component.scss"],
})
export class ColorsComponent implements OnInit {
  data;
  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) {}
  getPalettes() {
    this.apiService.getInitialPalettes().subscribe(
      (data) => {
        this.data = data.colors;
        console.log(this.data);
      },
      (err) => console.error(err),
      () => console.log("done loading palette")
    );
  }

  drop(event: CdkDragDrop<0>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    console.error();
    console.log("item moved");
  }
  hexValue;

  getHexValue(value: string) {
    this.hexValue = value;
    console.log(this.hexValue);
  }
  colorModes = ["monochrome", "analogic", "complement"];

  selectedMode = "complement";

  mode;
  getUserInput() {
    if (this.mode !== undefined) {
      this.mode = this.selectedMode;
    } else {
      this.mode = "complement";
    }
    console.log(this.mode);
  }

  getUserPalette(hexValue, mode) {
    this.apiService.getPalettes(hexValue, mode).subscribe(
      (data) => {
        this.data = data.colors;
        console.log(this.data);
      },
      (err) => console.error(err),
      () => console.log("done loading user palette")
    );
  }

  ngOnInit() {
    this.getPalettes();
  }
}
