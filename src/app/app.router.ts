import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom Modules
// import { DashboardComponent } from '../dashboard/dashboard.component';
import { GameDashboard } from './game-dashboard/game-dashboard.component';
import { GameSelect } from './game-select/game-select.component';

const routes: Routes = [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: GameDashboard },
    { path: '', component: GameSelect }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
