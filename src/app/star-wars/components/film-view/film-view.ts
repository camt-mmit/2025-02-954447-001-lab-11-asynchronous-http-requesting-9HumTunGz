import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Resource, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fetchResource } from '../../helpers/resources';
import { Film, Person, Planet } from '../../types';

@Component({
  selector: 'app-film-view',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './film-view.html',
  styleUrl: './film-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmView {
  @Input({ required: true })
  resource!: Resource<Film>;

  /** Characters (async) */
  readonly characters = computed(() =>
    this.resource.hasValue()
      ? this.resource.value()!.characters.map((url) => fetchResource<Person>(url))
      : [],
  );

  /** Planets (async) */
  readonly planets = computed(() =>
    this.resource.hasValue()
      ? this.resource.value()!.planets.map((url) => fetchResource<Planet>(url))
      : [],
  );

  protected getId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }
}
