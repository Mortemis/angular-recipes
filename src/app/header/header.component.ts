import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output()
    navSelected = new EventEmitter<string>();

    onSelect(navItem) {
        this.navSelected.emit(navItem);
    }
}