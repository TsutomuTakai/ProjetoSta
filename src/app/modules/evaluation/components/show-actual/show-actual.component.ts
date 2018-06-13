import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-actual',
  templateUrl: './show-actual.component.html',
  styleUrls: ['./show-actual.component.scss']
})
export class ShowActualComponent implements OnInit {
    public people = [
        {
            name: 'Eduardo Castro',
            job: 'Desenvolvedor Pleno',
            picture: '../../../../../assets/img/8.jpg',
            status: true
        },
        {
            name: 'Gina Albuquerque',
            job: 'Desenvolvedora Pleno',
            picture: './../../../../assets/img/3.jpg',
            status: true

        },
        {
            name: 'Rafael Lider',
            job: 'Desenvolvedor Junior',
            picture: './../../../../assets/img/53.jpg',
            status: false
        },
        {
            name: 'Eduardo Castro',
            job: 'Desenvolvedor Pleno',
            picture: '../../../../../assets/img/8.jpg',
            status: true
        },
        {
            name: 'Gina Albuquerque',
            job: 'Desenvolvedora Pleno',
            picture: './../../../../assets/img/3.jpg',
            status: true

        },
        {
            name: 'Rafael Lider',
            job: 'Desenvolvedor Junior',
            picture: './../../../../assets/img/53.jpg',
            status: false
        },
    ]
  constructor() { }

  ngOnInit() {
  }

}
