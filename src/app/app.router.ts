import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom Modules
// import { DashboardComponent } from '../dashboard/dashboard.component';
import { GameDashboard } from './game-dashboard/game-dashboard.component';
import { GameSelect } from './game-select/game-select.component';
import { TeamSelect } from './team-select/team-select.component';

const routes: Routes = [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: GameDashboard },
    // { path: '', component: GameSelect }
    { path: '', component: TeamSelect }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
