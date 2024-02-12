import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: `./main-page.component.html`,
})

export class MainPageComponent {
    public characters: Character[] = [{
        name: 'Krilin',
        power: 1000
    }, {
        name: 'Goku',
        power: 29000
    },{
        name:'Vegeta',
        power: 30000
    }];

}