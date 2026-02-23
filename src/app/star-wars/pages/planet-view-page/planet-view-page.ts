import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { PlanetView } from '../../components/planet-view/planet-view';
import { planetResource } from '../../helpers/resources';

@Component({
  selector: 'app-planet-view-page',
  standalone: true,
  imports: [PlanetView],
  templateUrl: './planet-view-page.html',
  styleUrl: './planet-view-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetViewPage {
  readonly id = input.required<string>();

  protected readonly resource = planetResource(this.id).asReadonly();

  private readonly location = inject(Location);

  protected goBack(): void {
    this.location.back();
  }
}
