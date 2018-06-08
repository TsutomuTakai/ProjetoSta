import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-show-groups',
    templateUrl: './show-groups.component.html',
    styleUrls: ['./show-groups.component.scss']
})
export class ShowGroupsComponent implements OnInit {
    public people = [
        {
            name: 'ERakuten',
            job: 'Leo',
            picture: '../../../../../assets/img/group.png'
        },
        {
            name: 'Gorilla',
            job: 'Norival',
            picture: './../../../../assets/img/group.png'

        },
        {
            name: 'ZenCard',
            job: 'Felipe',
            picture: './../../../../assets/img/group.png'
        },
        {
            name: 'ERakuten',
            job: 'Leo',
            picture: '../../../../../assets/img/group.png'
        },
        {
            name: 'Gorilla',
            job: 'Norival',
            picture: './../../../../assets/img/group.png'

        },
        {
            name: 'ZenCard',
            job: 'Felipe',
            picture: './../../../../assets/img/group.png'
        },
        {
            name: 'ERakuten',
            job: 'Leo',
            picture: '../../../../../assets/img/group.png'
        },
        {
            name: 'Gorilla',
            job: 'Norival',
            picture: './../../../../assets/img/group.png'
        },
        {
            name: 'ZenCard',
            job: 'Felipe',
            picture: './../../../../assets/img/group.png'
        },
        {
            name: 'ERakuten',
            job: 'Leo',
            picture: '../../../../../assets/img/group.png'
        },
        {
            name: 'Gorilla',
            job: 'Norival',
            picture: './../../../../assets/img/group.png'
        },
        {
            name: 'ZenCard',
            job: 'Felipe',
            picture: './../../../../assets/img/group.png'
        },
    ]

    constructor() { }

    ngOnInit() {
    }

}
