import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonts-home',
  templateUrl: './fonts-home.component.html',
  styleUrls: ['./fonts-home.component.css']
})
export class FontsHomeComponent implements OnInit {
  fonts = [
    { css: 'roboto', isCollapsed: false, name: 'Roboto' },
    { css: 'zen-kurenaido', isCollapsed: false, name: 'Zen Kurenaido' },
    { css: 'poppins', isCollapsed: false, name: 'Poppins' },
    { css: 'ubuntu', isCollapsed: false, name: 'Ubuntu' },
    { css: 'default', isCollapsed: false, name: 'Default' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggle(name: string): void {
    const fontsMapped = this.fonts.map(font => {
      if (font.name === name) return {
        ...font,
        isCollapsed: !font.isCollapsed
      }

      return font
    });

    this.fonts = fontsMapped;
  }
}
