export type Church = {
  id: string;
  name: string;
  address: string;
  coverImage: string;
  facebook: string;
  instagram: string;
  youtube: string;
  worshipDays: Array<{ weekday: string; worshipNameAndTime: Array<string> }>;
  amenities: Array<string>;
  pastors: Array<{ name: string; image: string }>;
  googleMapsUrl: string;
};
