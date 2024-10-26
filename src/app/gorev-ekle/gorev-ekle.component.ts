import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gorev-ekle',
  templateUrl: './gorev-ekle.component.html',
  styleUrls: ['./gorev-ekle.component.css']
})
export class GorevEkleComponent {
  gorevNo: number = 0; // Görev numarası
  tur: string = ''; // Görev türü
  icerik: string = ''; // Görev içeriği
  atananKisi: string = ''; // Atanan kişi

  @Output() gorevEklendi = new EventEmitter<any>(); // Görev eklendiğinde emit edilen olay

  ekle() {
    const yeniGorev = {
      gorevNo: this.gorevNo,
      tur: this.tur,
      icerik: this.icerik,
      atananKisi: this.atananKisi
    };
    this.gorevEklendi.emit(yeniGorev); // Yeni görevi emit et
    this.reset(); // Formu sıfırla
  }

  reset() {
    this.gorevNo = 0;
    this.tur = '';
    this.icerik = '';
    this.atananKisi = '';
  }
}
