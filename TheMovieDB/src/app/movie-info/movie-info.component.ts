import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'movie-info',
    templateUrl: './movie-info.component.html',
    styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
    @Input() Title: string;
    @Input() Rating: number;
    @Input() ShortDescription: string;
    @Input() Runtime: number;
    @Input() ReleaseDate: Date;
    @Input() MovieThumbnail: string;

    constructor() { }

    ngOnInit() { }
}
