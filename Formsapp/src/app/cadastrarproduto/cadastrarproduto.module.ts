import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarprodutoPageRoutingModule } from './cadastrarproduto-routing.module';

import { CadastrarprodutoPage } from './cadastrarproduto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarprodutoPageRoutingModule
  ],
  declarations: [CadastrarprodutoPage]
})
export class CadastrarprodutoPageModule {}
