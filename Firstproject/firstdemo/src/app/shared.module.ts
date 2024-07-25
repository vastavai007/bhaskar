import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule]  // Export CommonModule so it can be used in other modules
})
export class SharedModule {}