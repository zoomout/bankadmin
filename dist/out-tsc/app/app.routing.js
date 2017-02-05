import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { AppointmentComponent } from './appointment/appointment.component';
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'userAccount',
        component: UserAccountComponent
    },
    {
        path: 'primaryTransaction/:username',
        component: PrimaryTransactionComponent
    },
    {
        path: 'savingsTransaction/:username',
        component: SavingsTransactionComponent
    },
    {
        path: 'appointment',
        component: AppointmentComponent
    }
];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=/Users/zoomout/work/idea/Source/Source Code/AdminPortal/src/app/app.routing.js.map