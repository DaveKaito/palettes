import { Component, OnInit, Inject } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ApiService } from "src/app/data/api.service";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";

export interface DialogData {}

@Component({
  selector: "app-colors",
  templateUrl: "./colors.component.html",
  styleUrls: ["./colors.component.scss"],
})
export class ColorsComponent implements OnInit {
  data;
  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  //getting initial palettes based on provided color array in api.service
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

  // Angular Drag&Drop function
  drop(event: CdkDragDrop<0>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    console.error();
    console.log("item moved");
  }

  // Array with the color Modes for the select function
  colorModes = ["monochrome", "analogic", "complement"];

  // Default selected mode on page load
  selectedMode = "complement";

  // After changing the hex value and pressing enter the desired color palette will be displayed
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

  openDialog(): void {
    const dialogRef = this.dialog.open(HexDialogComponent, {
      width: "550px",
      data: this.data,
    });
  }

  ngOnInit() {
    this.getPalettes();
  }
}
@Component({
  selector: "hex-dialog",
  templateUrl: "./hex-dialog/hex-dialog.component.html",
  styleUrls: ["./hex-dialog/hex-dialog.component.scss"],
})
export class HexDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<HexDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
