import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from './dashboard/header.component';
import { NivelesService } from './services/niveles.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  


  constructor(

    ){

  }
  ngOnInit(): void{

  }


}
