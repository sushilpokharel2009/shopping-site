import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { MainComponent } from '../components/main/main.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: '/'}
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
