import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AdminLayoutComponent } from './admin/shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { AddPageComponent } from './admin/add-page/add-page.component';
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';
import { EditPageComponent } from './admin/edit-page/edit-page.component';
import { OrdersPageComponent } from './admin/orders-page/orders-page.component';
import {AdminModule} from './admin/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
