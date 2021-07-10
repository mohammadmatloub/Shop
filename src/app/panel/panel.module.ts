import { NgModule } from '@angular/core';
import { COMPONENTS } from '.';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ListboxModule } from 'primeng/listbox';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelRoutingModule } from './panel-routing.module';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    ListboxModule,
    PanelMenuModule,
    PanelRoutingModule,
    InputTextModule,
    DropdownModule,
    FieldsetModule,
    InputNumberModule,
    InputTextareaModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    TableModule,
  ],
})
export class PanelModule {}
