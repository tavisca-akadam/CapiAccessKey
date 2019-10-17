import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { CapiKeyListComponent } from './capi-key-list/capi-key-list.component';
import { CapiKeyItemComponent } from './capi-key-list/capi-key-item/capi-key-item.component';
import { CapiKeyDetailsComponent } from './capi-key-list/capi-key-item/capi-key-details/capi-key-details.component';
import { CapiKeyStatusComponent } from './capi-key-list/capi-key-item/capi-key-status/capi-key-status.component';



@NgModule({
  declarations: [SearchComponent, SortComponent, CapiKeyListComponent, CapiKeyItemComponent, CapiKeyDetailsComponent, CapiKeyStatusComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
