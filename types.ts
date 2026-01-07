
export interface TranslatedString {
  ka: string;
  en: string;
}

export interface Location {
  id: string;
  city: TranslatedString;
  title: TranslatedString;
  address: TranslatedString;
  mapUrl: string;
  woltUrl?: string;
}

export interface Product {
  id: string;
  name: TranslatedString;
  description: TranslatedString;
  imageUrl: string;
  category: TranslatedString;
  price?: string;
}

export interface WoltPartner {
  id: string;
  name: string;
  url: string;
  logo: string;
  city: string;
}
