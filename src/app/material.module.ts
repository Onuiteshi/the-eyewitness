import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
      MatButtonModule,
      MatToolbarModule,
      MatExpansionModule,
      MatInputModule,
      MatProgressBarModule,
      MatIconModule,
      MatCardModule

    ],
    exports:[
      MatButtonModule,
      MatToolbarModule,
      MatExpansionModule,
      MatInputModule,
      MatProgressBarModule,
      MatIconModule,
      MatCardModule

    ]
})
export class MaterialModule { }
