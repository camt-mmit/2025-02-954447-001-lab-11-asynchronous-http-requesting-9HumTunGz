export interface ResultsList<T> {
  readonly count: number;
  readonly previous: string | null;
  readonly next: string | null;
  readonly results: readonly T[];
}

export interface ResourceItem {
  readonly url: string; // the hypermedia URL of this resource.
  readonly created: string; //  the ISO 8601 date format of the time that this resource was created.
  readonly edited: string; // the ISO 8601 date format of the time that this resource was edited.
}

export interface Film extends ResourceItem {
  readonly title: string; // The title of this film
  readonly episode_id: number; // The episode number of this film.
  readonly opening_crawl: string; // The opening paragraphs at the beginning of this film.
  readonly director: string; // The name of the director of this film.
  readonly producer: string; // The name(s) of the producer(s) of this film. Comma separated.
  readonly release_date: string; // The ISO 8601 date format of film release at original creator country.
  readonly species: readonly string[]; // An array of species resource URLs that are in this film.
  readonly starships: readonly string[]; // An array of starship resource URLs that are in this film.
  readonly vehicles: readonly string[]; // An array of vehicle resource URLs that are in this film.
  readonly characters: readonly string[]; // An array of people resource URLs that are in this film.
  readonly planets: readonly string[]; // An array of planet resource URLs that are in this film.
}

export interface Person extends ResourceItem {
  readonly name: string;
  readonly birth_year: string;
  readonly eye_color: string;
  readonly gender: string;
  readonly hair_color: string;
  readonly height: string;
  readonly mass: string;
  readonly skin_color: string;
  readonly homeworld: string | null;
  readonly films: readonly string[];
  readonly species: readonly string[];
  readonly starships: readonly string[];
  readonly vehicles: readonly string[];
}

export interface Planet extends ResourceItem {
  readonly name: string;
  readonly diameter: string;
  readonly rotation_period: string;
  readonly orbital_period: string;
  readonly gravity: string;
  readonly population: string;
  readonly climate: string;
  readonly terrain: string;
  readonly surface_water: string;
  readonly residents: readonly string[];
  readonly films: readonly string[];
}
