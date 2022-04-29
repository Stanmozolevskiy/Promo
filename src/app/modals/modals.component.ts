import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   hasModalBeenPopulated = false;
   baseImageUrl = "assets/Small and optimised portfolio/modals/";
   modal!:any; 
   images:number[] = Array(12)

  public generateImageForModal(src:number) {
    if (this.hasModalBeenPopulated)
      this.modal.removeChild(document.getElementById("modal-Image"));
   
    this.hasModalBeenPopulated = true;
    this.modal = document.getElementById("modal");
    let image = new Image();
    image.id = "modal-Image";
    image.src = this.baseImageUrl + src + ".jpg";
    this.modal.appendChild(image);
  }

}
