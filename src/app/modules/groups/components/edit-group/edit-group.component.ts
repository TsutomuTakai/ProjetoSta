import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {
    public manager = [
        {
            name: 'Eduardo Castro',
            job: 'Desenvolvedor Pleno',
            picture: '../../../../../assets/img/8.jpg'
        },
        {
            name: 'Gina Albuquerque',
            job: 'Desenvolvedora Pleno',
            picture: './../../../../assets/img/3.jpg'

        }
    ]

    public colab = [
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
            name: 'Eduardo Castro',
            job: 'Desenvolvedor Pleno',
            picture: '../../../../../assets/img/8.jpg'
        },
        {
            name: 'Gina Albuquerque',
            job: 'Desenvolvedora Pleno',
            picture: './../../../../assets/img/3.jpg'

        },
    ]
  constructor() { }

  ngOnInit() {
  }

}
