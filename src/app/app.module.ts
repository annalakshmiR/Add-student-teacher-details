import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExampleComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
