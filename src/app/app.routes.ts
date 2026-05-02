import { Routes } from '@angular/router';
import { AppShell } from './layout/app-shell/app-shell';

export const routes: Routes = [
    {
        path: '',
        component: AppShell,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => 
                    import('./features/dashboard/pages/dashboard-page/dashboard-page').then(
                        (m) => m.DashboardPage,
                    ),
            },
            {
                path: 'benefits-calculator',
                loadComponent: () => 
                    import('./features/benefits-calculator/pages/benefits-calculator-page/benefits-calculator-page').then(
                        (m) => m.BenefitsCalculatorPage,
                    ),
            },
            {
                path: 'activity-log',
                loadComponent: () => 
                    import('./features/activity-log/pages/activity-log-page/activity-log-page').then(
                        (m) => m.ActivityLogPage,
                    ),
            }
        ],
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
