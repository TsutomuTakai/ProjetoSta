import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
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
            picture: '../../../../../assets/img/8.jpg'
        },
        {
            name: 'Gina Albuquerque',
            job: 'Desenvolvedora Pleno',
            picture: './../../../../assets/img/3.jpg'

        },
        {
            name: 'Rafael Lider',
            job: 'Desenvolvedor Junior',
            picture: './../../../../assets/img/53.jpg'
        },
        {
            name: 'Eduardo Castro',
            job: 'Desenvolvedor Pleno',
            picture: '../../../../../assets/img/8.jpg'
        },
        {
            name: 'Gina Albuquerque',
            job: 'Desenvolvedora Pleno',
            picture: './../../../../assets/img/3.jpg'

        },
        {
            name: 'Rafael Lider',
            job: 'Desenvolvedor Junior',
            picture: './../../../../assets/img/53.jpg'
        },
        {
            name: 'Eduardo Castro',
            job: 'Desenvolvedor Pleno',
            picture: '../../../../../assets/img/8.jpg'
        },
        {
            name: 'Gina Albuquerque',
            job: 'Desenvolvedora Pleno',
            picture: './../../../../assets/img/3.jpg'

        },
        {
            name: 'Rafael Lider',
            job: 'Desenvolvedor Junior',
            picture: './../../../../assets/img/53.jpg'
        },
    ]
  constructor() { }

  ngOnInit() {
  }

}
