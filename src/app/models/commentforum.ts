import { Users } from './models/users';
import { Forum } from './models/forum';


export class commentforum {
  id: number = 0;
  contenido: string = "";
  fechaComentario: Date = new Date()
  forums: Forum = new Forum();
  users: Users = new Users();
}

