import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-sibling',
    templateUrl: './sibling.component.html',
    styleUrls: ['./sibling.component.sass'],
})
export class SiblingComponent {
    @Output()
    imgSelected = new EventEmitter<string>()

    postUrl = ''

    @Input()
    set url(link: string) {
        this.postUrl = link
    }
    get url() {
        return this.postUrl
    }
}
