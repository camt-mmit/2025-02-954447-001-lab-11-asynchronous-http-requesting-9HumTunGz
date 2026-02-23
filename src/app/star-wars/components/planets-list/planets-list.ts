import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Planet, ResultsList } from '../../types';

@Component({
  selector: 'app-planets-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './planets-list.html',
  styleUrl: './planets-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetsList {
  // รับ resource มาจาก planets-list-page
  @Input({ required: true })
  resource!: {
    value: () => ResultsList<Planet> | undefined;
  };

  // helper ดึง id จาก url
  getId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }
}
