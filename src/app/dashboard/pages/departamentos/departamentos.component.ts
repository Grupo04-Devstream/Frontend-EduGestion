import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../../services/departamentos.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { flatMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css'
})
export default class DepartamentosComponent{
  data: any[]= [];
  mostrarForm= false;
  editando= -1; //Contiene el indice del elemento editando
  accion= "Agregar";

  constructor(private  departamentoService: DepartamentosService, private fb:FormBuilder){}
  formDepartamento= this.fb.group({
    'id': [''],
    'nombre': ['', Validators.required],
    'descripcion': ['', Validators.required],
  })

  get nombre(){
    return this.formDepartamento.get('nombre') as FormControl;
  }

  get descripcion(){
    return this.formDepartamento.get('descripcion') as FormControl;
  }

  procesarDataForm(){
    //console.log(this.formDepartamento.value);
    if (this.formDepartamento.valid) {
      let departamentoData  = this.formDepartamento.value;
      if(this.editando >= 0){
        departamentoData.id= this.data[this.editando].id;
      }else{
        delete departamentoData.id;
      }
      this.saveDepartamento(departamentoData);   
      this.formDepartamento.reset();
      this.editando= -1;
      this.accion= "Agregar";
      this.mostrarForm= false;
    }
  }

  cargarData(index: number){
    this.editando= index;
    this.accion= "Guardar";
    this.mostrarForm= true;
    let dept= this.data[this.editando];
    this.nombre.setValue(dept.nombre);
    this.descripcion.setValue(dept.descripcion);
  }

  ngOnInit(): void {
      this.getAllDepartamentos();
  }

  getAllDepartamentos() {
    this.departamentoService.getAllDepartamentos().subscribe(
      (data) => {
        this.data = data.reverse();
        //console.log(this.data);
      },
      (error) => {
        console.error('Error al obtener datos de departamentos:', error);
      }
    );
  }

  getDepartamentoById(id: number) {
    this.departamentoService.getDepartamentoById(id).subscribe(
      (departamento) => {
        console.log(departamento);
      },
      (error) => {
        console.error('Error al obtener el departamento por ID:', error);
      }
    );
  }

  saveDepartamento(newDepartamento: any) {
    this.departamentoService.saveDepartamento(newDepartamento).subscribe(
      (departamento) => {
        console.log('Departamento creado:', departamento);
        this.getAllDepartamentos(); // Actualizar la lista después de la creación
      },
      (error) => {
        console.error('Error al crear el departamento:', error);
      }
    );
  }

  deleteDepartamento(id: number) {
    this.departamentoService.deleteDepartamento(id).subscribe(
      (result) => {
        //console.log('Departamento eliminado:', result);
        this.getAllDepartamentos(); // Actualizar la lista después de la eliminación
      },
      (error) => {
        console.error('Error al eliminar el departamento:', error);
      }
    );
  }
}
