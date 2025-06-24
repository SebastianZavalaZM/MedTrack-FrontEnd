import { Routes } from '@angular/router';
import { TipoEnfermedadComponent } from './components/tipoenfermedad/tipoenfermedad.component';
import { InsertareditarComponent } from './components/tipoenfermedad/insertareditar/insertareditar.component';
import { BuscarComponent } from './components/tipoenfermedad/buscar/buscar.component';


import { EnfermedadComponent } from './components/enfermedad/enfermedad.component';
import { InsertareditareComponent } from './components/enfermedad/insertareditar/insertareditar.component';
import { ContadornvlriesgoComponent } from './components/enfermedad/contadornvlriesgo/contadornvlriesgo.component';

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
      {
        path:'buscarPorNombre',component:BuscarComponent
      }
   
    ]
  },
  {
    path: 'enfermedades/listas', component: EnfermedadComponent,
    children: [
      {
        path:'formulario',component:InsertareditareComponent
      },
      {
        path:'ediciones/:id',component:InsertareditareComponent
      },
       {
        path:'contar-nivel-riesgo',component:ContadornvlriesgoComponent
      }

    ]

  },
  

  

];
