import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;

  constructor(private userService: UserService) {
    function ShowHide() {
      console.log("Se esconde el dvi de detalle");
    //  $('#GridPermisodet').modal('hide');
    };
    function ShowGrid() {
    console.log("Se muestra el dvi de detalle");
    //    $('#GridPermisodet').modal('show');
    };
   }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    
  
  

  }

  

}


