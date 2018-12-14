import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [
        DropdownDirective
    ],
    imports: [
        MaterialModule,
        FlexLayoutModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        DropdownDirective
    ]
})
export class SharedModule {}
