import { NgModule } from "../../../node_modules/@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "../../../node_modules/@angular/common";

// A shared module is created when we want to share something across multiple modules
// we can share components, pipes, directives using this technique


@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports:[
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule{

}