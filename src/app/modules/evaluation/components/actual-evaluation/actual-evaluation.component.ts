import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actual-evaluation',
  templateUrl: './actual-evaluation.component.html',
  styleUrls: ['./actual-evaluation.component.scss']
})
export class ActualEvaluationComponent implements OnInit {
    public people = [
        {
            name: 'Eduardo Castro',
            job: 'Desenvolvedor Pleno',
            picture: '../../../../../assets/img/8.jpg',
            status: true,
            aval: false,
        },
        {
            name: 'Gina Albuquerque',
            job: 'Desenvolvedora Pleno',
            picture: './../../../../assets/img/3.jpg',
            status: true,
            aval: true,

        },
        {
            name: 'Rafael Lider',
            job: 'Desenvolvedor Junior',
            picture: './../../../../assets/img/53.jpg',
            status: false,
            aval: true,
        },
        {
            name: 'Eduardo Castro',
            job: 'Desenvolvedor Pleno',
            picture: '../../../../../assets/img/8.jpg',
            status: true,
            aval: false,
        },
        {
            name: 'Gina Albuquerque',
            job: 'Desenvolvedora Pleno',
            picture: './../../../../assets/img/3.jpg',
            status: true,
            aval: true,

        },
        {
            name: 'Rafael Lider',
            job: 'Desenvolvedor Junior',
            picture: './../../../../assets/img/53.jpg',
            status: false,
            aval: false,
        },
    ]
  constructor() { }

  ngOnInit() {
  }

}
