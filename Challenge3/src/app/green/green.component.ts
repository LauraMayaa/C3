import { Component } from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.scss']
})
export class GreenComponent {
  public isAdmin: boolean = true

  public Admin() {
    this.isAdmin = !this.isAdmin
  }





}
