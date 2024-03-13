export interface UsuariosResponse {
  id:              number;
  idRol:           IDRol;
  nombre:          string;
  apellido:        string;
  fechaNacimiento: string;
  email:           string;
  password:        string;
  alumnos:         any[];
  trabajadores:    any[];
}

export interface UsuarioRequest {
  nombre:          string;
  apellido:        string;
  fechaNacimiento: string;
  email:           string;
  password:        string;
  idRol:           number;
}


export interface IDRol {
  id:          number;
  nombre:      string;
  descripcion: string;
}
