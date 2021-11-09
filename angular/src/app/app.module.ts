import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';

import { AppComponent } from './app.component';

// From Froala instructions.
// Import all Froala Editor plugins.
import 'froala-editor/js/plugins.pkgd.min.js';

// Expose FroalaEditor instance to window.
declare const require: any;
(window as any).FroalaEditor = require('froala-editor');
require('@wiris/mathtype-froala3'); // Import WIRIS Mathtype formula editor.

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FroalaEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
