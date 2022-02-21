import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { PublicModule } from './public/public.module'
import { ChildComponent } from './child/child.component'
import { SiblingComponent } from './sibling/sibling.component'

@NgModule({
    declarations: [AppComponent, ChildComponent, SiblingComponent],
    imports: [BrowserModule, AppRoutingModule, PublicModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
