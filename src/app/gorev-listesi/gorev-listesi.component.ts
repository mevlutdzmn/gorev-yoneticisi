import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gorev-listesi',
  templateUrl: './gorev-listesi.component.html',
  styleUrls: ['./gorev-listesi.component.css']
})
export class GorevListesiComponent {
  @Input() gorevler: any[] = []; // Ana bileşenden gelen görevler
}
