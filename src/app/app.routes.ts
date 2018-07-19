import { Routes, RouterModule } from '@angular/router';

// Componentes
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

const RUTAS: Routes = [
    { path: 'fotos', component: FotosComponent },
    { path: 'cargar', component: CargaComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'fotos' }
];

export const APP_ROUTES = RouterModule.forRoot( RUTAS );
