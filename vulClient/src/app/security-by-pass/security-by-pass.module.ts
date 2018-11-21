import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { RunScriptsDirective } from './run-scripts.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SafeHtmlPipe, RunScriptsDirective],
  exports: [SafeHtmlPipe, RunScriptsDirective]
})
export class SecurityByPassModule { }
