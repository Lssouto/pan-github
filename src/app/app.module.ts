import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { ROUTES } from './app.routes';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    RouterModule.forRoot(
      ROUTES
    ),
    ServicesModule,
    HttpClientModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
