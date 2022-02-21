import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    ViewChild,
    AfterViewInit,
} from '@angular/core'
import { ChildComponent } from './child/child.component'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterViewInit {
    title = 0
    msg = ''
    name = 'luis ramirez'

    imgUrl = 'https://picsum.photos/200/300'

    @ViewChild(ChildComponent) child: any

    ngAfterViewInit(): void {
        this.msg = this.child.message
    }

    changeImage(e: KeyboardEvent) {
        this.imgUrl = (e.target as HTMLInputElement).value
    }
    logImg(e: string) {
        console.log(e)
    }
    ngOnInit() {
        console.log('ngOnInit() called')
    }
    ngOnChanges() {
        console.log('ngOnChanges() called')
    }
    ngDoCheck() {
        console.log('ngDoCheck() is called')
    }
}
