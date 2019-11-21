import { Injectable } from '@angular/core';
import { MenuItem } from '../shared/my-menu/menu-item';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private visualizzazioni: number;
  constructor() { }

  getMenu(): MenuItem[] {
    return [
      {text: 'Home', link: '#'},
      {text: 'Products', link: '#'},
      {text: 'Users', link: '#'},
      {text: 'About', link: '#'},
      {text: 'Contacts', link: '#'},
    ];
  }

  getVisualizzazioni(): number {
    return this.visualizzazioni;
  }

  setVisualizzazioni(numero: number) {
    this.visualizzazioni = numero;
  }



}
