import { Routes } from '@angular/router';
import { TipoEnfermedadComponent } from './components/tipoenfermedad/tipoenfermedad.component';
import { InsertareditarComponent } from './components/tipoenfermedad/insertareditar/insertareditar.component';


export const routes: Routes = [
  {
    path:'',redirectTo:'tipoenfermedades/listas',pathMatch:'full'
  },
  {
    path:'tipoenfermedades/listas',component:TipoEnfermedadComponent,
    children:[
      {
        path:'formulario',component:InsertareditarComponent
      },
      {
        path:'ediciones/:id',component:InsertareditarComponent
      },
   
    ]
  }
];
