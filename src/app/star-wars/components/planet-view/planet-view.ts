import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fetchResource } from '../../helpers/resources';
import { Film, Person, Planet } from '../../types';

@Component({
  selector: 'app-planet-view',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './planet-view.html',
  styleUrl: './planet-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetView {
  @Input({ required: true })
  resource!: { hasValue(): boolean; value(): Planet };

  /** residents (async fetch) */
  readonly residents = computed(() =>
    this.resource.hasValue()
      ? this.resource.value().residents.map((url) => fetchResource<Person>(url))
      : [],
  );

  /** films (async fetch) */
  readonly films = computed(() =>
    this.resource.hasValue()
      ? this.resource.value().films.map((url) => fetchResource<Film>(url))
      : [],
  );

  protected getId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }
}
