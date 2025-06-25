import { Users } from './models/users';


export class forum {
  idforum: number = 0;
  titulo: string = "";
  descripcion: string = "";
  fechacreacion: Date = new Date()
  users: Users = new Users();
}

