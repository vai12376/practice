import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.sass'],
})
export class ChildComponent implements OnInit {
    message = 'this is msg from child'

    constructor() {}

    ngOnInit(): void {}
}
