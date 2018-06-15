import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-groups',
    templateUrl: './list-groups.component.html',
    styleUrls: ['./list-groups.component.scss']
})
export class ListGroupsComponent implements OnInit {
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
