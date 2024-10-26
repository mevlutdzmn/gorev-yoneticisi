import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gorevler: any[] = []; // Görevlerin tutulduğu dizi

  onGorevEklendi(gorev: any) {
    this.gorevler.push(gorev); // Yeni görevi diziye ekle
  }
}
