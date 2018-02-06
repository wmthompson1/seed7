import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
//Kendo
import { GridModule } from '@progress/kendo-angular-grid';
import {About} from './about/about';
import {Home} from './home/home';
import {Master} from './home/master';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { PublisherService } from './services/publishers.service';
import { AppConfig } from './app.config';
import { FormAdd } from './home/form-add';
import { FormEdit } from './home/form-edit';
import { FormDelete } from './home/form-delete';
import { CategoriesService } from './services/northwind.service';



@NgModule({
  declarations: [AppComponent, About, RepoBrowser 
        , RepoList, RepoDetail, Home, Master, FormAdd, FormEdit, FormDelete],
  imports     : [BrowserModule, FormsModule, HttpModule, GridModule, HttpClientModule,
        GridModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [CategoriesService, Github, {provide: LocationStrategy,
         useClass: HashLocationStrategy},
         PublisherService, 
         AppConfig],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
