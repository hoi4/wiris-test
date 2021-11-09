import { Component } from '@angular/core';

// Load WIRISplugins.js dynamically
const jsDemoImagesTransform = document.createElement('script');
jsDemoImagesTransform.type = 'text/javascript';
jsDemoImagesTransform.src =
  'http://localhost:8000/integration/WIRISplugins.js?viewer=image';
// Load generated scripts.
document.head.appendChild(jsDemoImagesTransform);

declare const WirisPlugin: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Set App Title.
  title = 'Angular froala demo';

  // Initialize the editor content.
  content: string = '';

  // Set options for the editor.
  options: Object = {
    mathTypeParameters: {
      serviceProviderProperties: {
        URI: 'http://localhost:8000/integration',
        server: 'php',
      },
    },
    // Define the toolbar options for the froala editor.
    toolbarButtons: [
      'undo',
      'redo',
      'bold',
      'italic',
      '|',
      'wirisEditor',
      'wirisChemistry',
      'insertImage',
    ],
    // Add [MW] uttons to the image editing popup Toolbar.
    imageEditButtons: [
      'wirisEditor',
      'wirisChemistry',
      'imageDisplay',
      'imageAlign',
      'imageInfo',
      'imageRemove',
    ],
    // Allow all the tags to understand the mathml
    htmlAllowedTags: ['.*'],
    htmlAllowedAttrs: ['.*'],
    // List of tags that are not removed when they have no content inside
    // so that formulas renderize propertly
    htmlAllowedEmptyTags: ['mprescripts', 'none'],
    // In case you are using a different Froala editor language than default,
    // language: 'es',
    // You can choose the language for the MathType editor, too:
    // @see: https://docs.wiris.com/en/mathtype/mathtype_web/sdk-api/parameters#regional_properties
    // mathTypeParameters: {
    //   editorParameters: { language: 'es' },
    // },
    initialized: () => {
      console.log('froala initialized');
    },
  };

  private _initControls: any;

  destroy() {
    console.log('destroy froala editor');
    this._initControls.destroy();
  }

  manualFroalaInitialize(initControls: any) {
    this._initControls = initControls;
    initControls.initialize();

    // setTimeout(() => {
    //   const saveMode = WirisPlugin.Configuration.get('saveMode');
    //   console.log('saveMode', saveMode);
    // }, 1000);
  }
}
