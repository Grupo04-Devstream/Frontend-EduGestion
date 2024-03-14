import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NivelesService } from '../../../services/niveles.service';

@Component({
  selector: 'app-niveles',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './niveles.component.html',
  styleUrl: './niveles.component.css'
})
export default class NivelesComponent implements OnInit {

  nivelForm: FormGroup;
  grados:any;
  niveles:any;
  

  constructor(
    public fb: FormBuilder,
    public nivelService: NivelesService,
    ){

  }

  ngOnInit(): void{
    this.nivelForm = this.fb.group({
      id:[''],
      nombre : ['', Validators.required],
    });
    this.getAllNiveles();
    

  }
  getAllNiveles(){
    this.nivelService.getAllNiveles().subscribe(resp=>{
      this.niveles = resp;
    },
    error =>(console.log(error))
    );
  
  }


  guardar(): void{
    this.nivelService.saveNivel(this.nivelForm.value).subscribe(resp =>{
      console.log(this.nivelForm.value);
      this.nivelForm.reset();
      this.niveles=this.niveles.filter((nivel:any)=>resp.id!==nivel.id);
      this.getAllNiveles();
    },
    error=>{ console.error(error)}
    )
  }

  eliminar(nivel: { id: number, nombre: string }):void{
    this.nivelService.deleteNivel(nivel.id).subscribe(resp=>{
      console.log(resp);
      this.getAllNiveles();
    },
    error=>{ console.error(error)}
    )
  }
  update(nivel: { id: number, nombre: string }):void{
    const nombre = this.nivelForm.get('nombre')?.value;
    const datos_js = { id: nivel.id, nombre: nombre }
    
    this.nivelService.updateNivel(datos_js).subscribe(rep=>{
      console.log(datos_js);
      this.getAllNiveles();

    },
    error=>{ console.error(error)}
    )
  }

}
