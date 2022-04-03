import { Component }                            from '@angular/core';
import interfaceIcons                           from '../../../../public/icons/list/interfaces.json';
import illustrationIcons                        from '../../../../public/icons/list/illustrations.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'showcase-angular';

    interfaceIcons = interfaceIcons;
    illustrationIcons = illustrationIcons;
}
