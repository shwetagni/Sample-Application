import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseEditComponent } from "./course-list/course-edit/course-edit.component";
import { StudentsListComponent } from "./students-list/students-list.component";
import { StudentsEditComponent } from "./students-list/students-edit/students-edit.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CourseListComponent,
    CourseEditComponent,
    StudentsListComponent,
    StudentsEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
