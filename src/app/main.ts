import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {webcomponentsReady} from "@codebakery/origami";

webcomponentsReady().then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule, {
    enableLegacyTemplate: false
  });
}).catch(error => {
  // No WebComponent support and webcomponentsjs is not loaded
  console.error(error);
});
