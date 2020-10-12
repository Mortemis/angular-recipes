import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open')
    isDropdownOpened = false;

    @HostListener('click')
    click(eventData: Event) {
        this.isDropdownOpened = !this.isDropdownOpened;
    }
}