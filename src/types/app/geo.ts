export interface Country {
  id: number;
  short_name: string;
  full_name: string;
  code: string;
}

export interface Region {
  id: number;
  name: string;
  country_id: number;
}

export interface City {
  id: number;
  name: string;
  district: string;
  region_id: number;
}
