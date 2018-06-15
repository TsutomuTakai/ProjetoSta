import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
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
