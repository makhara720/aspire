import { Location, Product, WoltPartner } from './types';

export const LOCATIONS: Location[] = [
  // Tbilisi Locations
 {
    id: 't1',
    city: { ka: 'თბილისი', en: 'Tbilisi' },
    title: { ka: 'მირიან მეფის ქ. 18', en: 'Mirian Mepe St. 18' },
    address: { ka: 'მირიან მეფის ქ. 18', en: 'Mirian Mepe St. 18' },
    mapUrl: 'https://www.google.com/maps?q=18+Mirian+Mepe+St+Tbilisi&output=embed'
  },
  {
    id: 't2',
    city: { ka: 'თბილისი', en: 'Tbilisi' },
    title: { ka: 'ანა კალანდაძის ქ. 5', en: 'Ana Kalandadze St. 5' },
    address: { ka: 'ანა კალანდაძის ქ. 5', en: 'Ana Kalandadze St. 5' },
    mapUrl: 'https://www.google.com/maps?q=5+Ana+Kalandadze+St+Tbilisi&output=embed'
  },
  {
    id: 't3',
    city: { ka: 'თბილისი', en: 'Tbilisi' },
    title: { ka: 'ვიქტორ კუპრაძის ქ. 71', en: 'Viktor Kupradze St. 71' },
    address: { ka: 'ვიქტორ კუპრაძის ქ. 71, კორპუსი 11', en: '71 Viktor Kupradze St, Bldg 11' },
    mapUrl: 'https://www.google.com/maps?q=71+Viktor+Kupradze+St+Building+11+Tbilisi&output=embed'
  },
  {
    id: 't4',
    city: { ka: 'თბილისი', en: 'Tbilisi' },
    title: { ka: 'მერაბ კოსტავას ქ. 9', en: 'Merab Kostava St. 9' },
    address: { ka: 'მერაბ კოსტავას ქ. 9', en: 'Merab Kostava St. 9' },
    mapUrl: 'https://www.google.com/maps?q=9+Merab+Kostava+St+Tbilisi&output=embed'
  },
  // Batumi Locations (New list from user)
  {
    id: 'b1',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'ორბი სითი, C ბლოკი', en: 'Orbi City C block' },
    address: { ka: 'ორბი სითი, C ბლოკი', en: 'Orbi City C block' },
    mapUrl: 'https://www.google.com/maps?q=Orbi+City+C+block+Batumi&output=embed',
  
  },
  {
    id: 'b2',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'ზურაბ გორგილაძის ქ. 81', en: 'Zurab Gorgiladze St. 81' },
    address: { ka: 'ზურაბ გორგილაძის ქ. 81', en: 'Zurab Gorgiladze St. 81' },
    mapUrl: 'https://www.google.com/maps?q=41.6439764,41.6230406&output=embed',
   
  },
  {
    id: 'b3',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'ზურაბ გორგილაძის ქ. 96', en: 'Zurab Gorgiladze St. 96' },
    address: { ka: 'ზურაბ გორგილაძის ქ. 96', en: 'Zurab Gorgiladze St. 96' },
    mapUrl: 'https://www.google.com/maps?q=96+Zurab+Gorgiladze+St+Batumi&output=embed',
   
  },
  {
    id: 'b4',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'ფიროსმანის ქ. 6', en: 'Pirosmani St. 6' },
    address: { ka: 'ფიროსმანის ქ. 6', en: 'Pirosmani St. 6' },
    mapUrl: 'https://www.google.com/maps?q=6+Pirosmani+St+Batumi&output=embed',
   
  },
  {
    id: 'b5',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'ალექსანდრე პუშკინის ქ. 140', en: 'Alexander Pushkin St. 140' },
    address: { ka: 'ალექსანდრე პუშკინის ქ. 140', en: 'Alexander Pushkin St. 140' },
    mapUrl: 'https://www.google.com/maps?q=140+Alexander+Pushkin+St+Batumi&output=embed',
   
  },
  {
    id: 'b6',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'პეტრე მელიქიშვილის ქ. 4', en: 'Petre Meliqishvili St. 4' },
    address: { ka: 'პეტრე მელიქიშვილის ქ. 4', en: 'Petre Meliqishvili St. 4' },
    mapUrl: 'https://www.google.com/maps?q=41.6482554,41.629924&output=embed',
   
  },
  {
    id: 'b7',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'ირაკლი აბაშიძის ქ. 6', en: 'Iracli Abashidze St. 6' },
    address: { ka: 'ირაკლი აბაშიძის ქ. 6', en: 'Iracli Abashidze St. 6' },
    mapUrl: 'https://www.google.com/maps?q=6+Iracli+Abashidze+St+Batumi&output=embed',
   
  },
  {
    id: 'b8',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'ზვიად გამსახურდიას ქ. 27', en: 'Zviad Gamsaxurdia St. 27' },
    address: { ka: 'ზვიად გამსახურდიას ქ. 27', en: 'Zviad Gamsaxurdia St. 27' },
    mapUrl: 'https://www.google.com/maps?q=27+Zviad+Gamsaxurdia+St+Batumi&output=embed',
   
  },
  {
    id: 'b9',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'დავით მამულაძის ქ. 3', en: 'David Mamuladze St. 3' },
    address: { ka: 'დავით მამულაძის ქ. 3', en: 'David Mamuladze St. 3' },
    mapUrl: 'https://www.google.com/maps?q=41.6311901,41.6072543&output=embed',
   
  },
  {
    id: 'b10',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'კ. გამსახურდიას ქ. 31', en: 'K. Gamsaxurdia St. 31' },
    address: { ka: 'კ. გამსახურდიას ქ. 31', en: 'K. Gamsaxurdia St. 31' },
    mapUrl: 'https://www.google.com/maps?q=31+Konstantine+Gamsakhurdia+St+Batumi&output=embed',
   
  },
  {
    id: 'b11',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'გენერალ ასლან აბაშიძის ქ. 1', en: 'General Aslan Abashidze St. 1' },
    address: { ka: 'გენერალ ასლან აბაშიძის ქ. 1', en: 'General Aslan Abashidze St. 1' },
    mapUrl: 'https://www.google.com/maps?q=Vape+room@41.6358458,41.612529&output=embed',
   
  },
  {
    id: 'b12',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'რ. ნიჟარაძის ქ. 18', en: 'R. Nizharadze St. 18' },
    address: { ka: 'რ. ნიჟარაძის ქ. 18', en: 'R. Nizharadze St. 18' },
    mapUrl: 'https://www.google.com/maps?q=41.6285670,41.6084553&output=embed',
   
  },
  {
    id: 'b13',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'გოგებაშვილის ქ. 32', en: 'Gogebashvili St. 32' },
    address: { ka: 'გოგებაშვილის ქ. 32', en: 'Gogebashvili St. 32' },
    mapUrl: 'https://www.google.com/maps?q=32+Gogebashvili+St+Batumi&output=embed',
   
  },
  {
    id: 'b14',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'გრანდ მოლი', en: 'Grand Mall' },
    address: { ka: 'გრანდ მოლი, ბათუმი', en: 'Grand Mall, Batumi' },
    mapUrl: 'https://www.google.com/maps?q=Grand+Mall+Batumi&output=embed',
   
  },
  {
    id: 'b15',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'ბათუმი მოლი', en: 'Batumi Mall' },
    address: { ka: 'ბათუმი მოლი, ბათუმი', en: 'Batumi Mall, Batumi' },
    mapUrl: 'https://www.google.com/maps?q=Batumi+Mall&output=embed',
   
  },
  {
    id: 'b16',
    city: { ka: 'ბათუმი', en: 'Batumi' },
    title: { ka: 'მეტრო სითი მოლი', en: 'Metro City Mall' },
    address: { ka: 'მეტრო სითი მოლი, ბათუმი', en: 'Metro City Mall, Batumi' },
    mapUrl: 'https://www.google.com/maps?q=Metro+City+Mall+Batumi&output=embed',
    
  },
  // Kutaisi Locations
 {
    id: 'k1',
    city: { ka: 'ქუთაისი', en: 'Kutaisi' },
    title: { ka: 'ქუთაისი გრანდ მოლი', en: 'Kutaisi Grand Mall' },
    address: { ka: 'ილია ჩავჭავჭავაძის გამზირი 67', en: 'Ilia Chavchavadze Avenue. 67' },
    mapUrl: 'https://www.google.com/maps?q=42.2557487,42.6731223&output=embed'
  },
];

export const WOLT_PARTNERS: WoltPartner[] = [
  {
    id: 'w1',
    name: 'Wolt Tbilisi',
    url: 'https://wolt.com/ka/geo/tbilisi/search?q=vape+room&target=venues',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Wolt_logo.svg/1024px-Wolt_logo.svg.png',
    city: 'თბილისი'
  },
  {
    id: 'w2',
    name: 'Wolt Batumi',
    url: 'https://wolt.com/ka/geo/batumi/search?q=vape%20room&target=venues',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Wolt_logo.svg/1024px-Wolt_logo.svg.png',
    city: 'ბათუმი'
  }
];