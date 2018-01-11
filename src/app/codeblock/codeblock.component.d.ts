import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
export declare class CodeblockComponent implements OnInit, AfterViewInit {
    private elementRef;
    lang: string;
    reduce_indent?: number;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
