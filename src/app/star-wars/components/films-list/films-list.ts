import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Film, ResultsList } from '../../types';

@Component({
  selector: 'app-films-list',
  standalone: true, // 🔥 ถ้าไม่มีบรรทัดนี้ = พัง
  imports: [CommonModule, RouterModule],
  templateUrl: './films-list.html',
  styleUrl: './films-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsList {
  @Input({ required: true })
  resource!: {
    value: () => ResultsList<Film> | undefined;
  };

  getId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }
}
