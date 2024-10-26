import { Component } from '@angular/core';

@Component({
  selector: 'app-gorev-listesi',
  templateUrl: './gorev-listesi.component.html',
  styleUrls: ['./gorev-listesi.component.css']
})
export class GorevListesiComponent {
  gorevler = [
    { no: 1, tur: 'Yazılım', icerik: 'API geliştirme', atananKisi: 'Ali', durum: 'Süreçte' },
    { no: 2, tur: 'Tasarım', icerik: 'UI tasarımı', atananKisi: 'Veli', durum: 'Süreçte' },
    { no: 3, tur: 'Test', icerik: 'Unit test', atananKisi: 'Mehmet', durum: 'Süreçte' },
  ];

  tamamla(gorev: any) {
    gorev.durum = 'Onaylandı';
  }
}
