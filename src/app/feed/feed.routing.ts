import { Routes } from '@angular/router';

import { HistoricComponent } from './historic/historic.component';

export const FeedRoutes: Routes = [{
    path: '',
    children: [{
        path: 'historic',
        component: HistoricComponent
    }]
}];
