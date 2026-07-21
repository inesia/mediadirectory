export type MediaStatus = 'verified' | 'unverified' | 'review' | 'suspended';
export type MediaType =
  | 'Website'
  | 'TV'
  | 'TV Digital'
  | 'Radio'
  | 'Podcast'
  | 'YouTube'
  | 'TikTok'
  | 'Newsletter'
  | 'Magazine'
  | 'Newspaper';

export type UserStatus = 'active' | 'pending' | 'suspended';
export type UserRole = 'Owner' | 'Editor' | 'Admin' | 'Contributor' | 'Other';
export type ClaimStatus = 'pending' | 'approved' | 'rejected';

export interface MediaAddress {
  street: string;
  district: string;
  city: string;
  province: string;
}

export interface MediaContact {
  phone: string;
  email: string;
}

export interface MediaSocial {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  x?: string;
  threads?: string;
  linkedin?: string;
  telegram?: string;
}

export interface MediaOutlet {
  id: string;
  slug: string;
  name: string;
  domain: string;
  logo?: string;
  images: string[];
  description: string;
  status: MediaStatus;
  companyName?: string;
  founded?: number;
  address: MediaAddress;
  contact: MediaContact;
  social: MediaSocial;
  type: MediaType;
  reach?: string;
  categories?: string[];
  verifiedAt?: string;
  registeredAt?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio?: string;
  verificationEmail: string;
  status: UserStatus;
  role: UserRole;
  claimedMediaSlug?: string;
}

export interface ClaimRequest {
  id: string;
  mediaName: string;
  mediaSlug: string;
  user: Pick<UserProfile, 'name' | 'email' | 'phone' | 'bio' | 'verificationEmail' | 'role' | 'status'>;
  status: ClaimStatus;
  submittedAt: string;
}

/** Convenience accessors used by cards/filters */
export function mediaCity(m: MediaOutlet) {
  return m.address.city;
}
export function mediaProvince(m: MediaOutlet) {
  return m.address.province;
}

function m(partial: MediaOutlet): MediaOutlet {
  return partial;
}

export const mediaOutlets: MediaOutlet[] = [
  m({
    id: 'm1',
    slug: 'kompas',
    name: 'Kompas',
    domain: 'https://www.kompas.com',
    logo: '/logos/kompas.jpeg',
    images: [],
    description:
      'Ruang redaksi nasional terkemuka yang meliput politik, bisnis, dan budaya dengan standar editorial terverifikasi.',
    status: 'verified',
    companyName: 'PT Kompas Media Nusantara',
    founded: 1965,
    address: {
      street: 'Jl. Palmerah Selatan No. 22–28',
      district: 'Gelora',
      city: 'Jakarta',
      province: 'DKI Jakarta',
    },
    contact: { phone: '021-5347710', email: 'redaksi@kompas.com' },
    social: {
      facebook: 'https://facebook.com/kompascom',
      instagram: 'https://instagram.com/kompascom',
      youtube: 'https://youtube.com/@kompascom',
      x: 'https://x.com/kompascom',
    },
    type: 'Website',
    reach: '12,4 juta/bulan',
    categories: ['Berita', 'Politik', 'Bisnis'],
    verifiedAt: '2025-11-02',
    registeredAt: '2025-11-01',
  }),
  m({
    id: 'm2',
    slug: 'tempo',
    name: 'Tempo',
    domain: 'https://www.tempo.co',
    logo: '/logos/tempo.png',
    images: [],
    description:
      'Mingguan investigasi yang dikenal dengan liputan mendalam dan jurnalisme independen di Indonesia.',
    status: 'verified',
    companyName: 'PT Tempo Inti Media Tbk',
    founded: 1971,
    address: {
      street: 'Jl. Palmerah Barat No. 8',
      district: 'Gelora',
      city: 'Jakarta',
      province: 'DKI Jakarta',
    },
    contact: { phone: '021-7253478', email: 'redaksi@tempo.co' },
    social: {
      facebook: 'https://facebook.com/tempodotco',
      instagram: 'https://instagram.com/tempodotco',
      x: 'https://x.com/tempodotco',
    },
    type: 'Magazine',
    reach: '4,1 juta/bulan',
    categories: ['Investigasi', 'Politik'],
    verifiedAt: '2025-10-18',
    registeredAt: '2025-10-15',
  }),
  m({
    id: 'm3',
    slug: 'detik',
    name: 'Detik',
    domain: 'https://www.detik.com',
    logo: '/logos/detik.jpg',
    images: [],
    description:
      'Platform berita digital yang cepat meliput headline nasional, gaya hidup, dan olahraga.',
    status: 'verified',
    companyName: 'PT Trans Digital Media',
    founded: 1998,
    address: {
      street: 'Gedung Transmedia, Jl. Kapten Tendean',
      district: 'Mampang',
      city: 'Jakarta',
      province: 'DKI Jakarta',
    },
    contact: { phone: '021-79184000', email: 'redaksi@detik.com' },
    social: {
      facebook: 'https://facebook.com/detikcom',
      instagram: 'https://instagram.com/detikcom',
      tiktok: 'https://tiktok.com/@detikcom',
      youtube: 'https://youtube.com/@detikcom',
    },
    type: 'Website',
    reach: '28,7 juta/bulan',
    categories: ['Berita', 'Gaya Hidup', 'Olahraga'],
    verifiedAt: '2025-09-30',
    registeredAt: '2025-09-25',
  }),
  m({
    id: 'm4',
    slug: 'metro-tv',
    name: 'Metro TV',
    domain: 'https://www.metrotvnews.com',
    logo: '',
    images: [],
    description:
      'Jaringan televisi nasional yang menyajikan berita langsung, talk show, dan program isu publik.',
    status: 'review',
    companyName: 'Media Group',
    founded: 2000,
    address: {
      street: 'Jl. Pilar Mas Raya Kav. A-D',
      district: 'Kedoya Selatan',
      city: 'Jakarta',
      province: 'DKI Jakarta',
    },
    contact: { phone: '021-58335555', email: 'redaksi@metrotvnews.com' },
    social: {
      facebook: 'https://facebook.com/metrotv',
      youtube: 'https://youtube.com/@metrotv',
      x: 'https://x.com/Metro_TV',
    },
    type: 'TV',
    reach: '9,2 juta penonton',
    categories: ['Siaran', 'Berita'],
    registeredAt: '2026-07-10',
  }),
  m({
    id: 'm5',
    slug: 'radio-elshinta',
    name: 'Radio Elshinta',
    domain: 'https://www.elshinta.com',
    logo: '/logos/elshinta.png',
    images: [],
    description:
      'Jaringan radio berita nasional dengan liputan interaktif dan update lalu lintas real-time.',
    status: 'verified',
    companyName: 'PT Radio Elshinta',
    founded: 1988,
    address: {
      street: 'Jl. Rasuna Said',
      district: 'Kuningan',
      city: 'Jakarta',
      province: 'DKI Jakarta',
    },
    contact: { phone: '021-5203456', email: 'redaksi@elshinta.com' },
    social: {
      facebook: 'https://facebook.com/radioelshinta',
      instagram: 'https://instagram.com/radioelshinta',
    },
    type: 'Radio',
    reach: '3,5 juta pendengar',
    categories: ['Berita', 'Talk'],
    verifiedAt: '2026-01-12',
    registeredAt: '2026-01-10',
  }),
  m({
    id: 'm6',
    slug: 'balairungpress',
    name: 'Balairung Press',
    domain: 'https://www.balairungpress.com',
    logo: '',
    images: [],
    description:
      'Media independen berakar kampus yang fokus pada isu pemuda, budaya, dan tata kelola lokal.',
    status: 'unverified',
    companyName: 'Balairung Press',
    founded: 1997,
    address: {
      street: 'Bulaksumur',
      district: 'Caturtunggal',
      city: 'Yogyakarta',
      province: 'DI Yogyakarta',
    },
    contact: { phone: '0274-512345', email: 'redaksi@balairungpress.com' },
    social: {
      instagram: 'https://instagram.com/balairungpress',
      x: 'https://x.com/balairungpress',
    },
    type: 'Website',
    reach: '180 ribu/bulan',
    categories: ['Kampus', 'Budaya'],
    registeredAt: '2026-07-11',
  }),
  m({
    id: 'm7',
    slug: 'suara-surabaya',
    name: 'Suara Surabaya',
    domain: 'https://www.suarasurabaya.net',
    logo: '/logos/suara-surabaya.png',
    images: [],
    description:
      'Radio jurnalisme warga yang dikenal dengan pelaporan partisipatif dan pantauan layanan kota.',
    status: 'verified',
    companyName: 'Suara Surabaya',
    founded: 1999,
    address: {
      street: 'Jl. Embong Wungu',
      district: 'Genteng',
      city: 'Surabaya',
      province: 'Jawa Timur',
    },
    contact: { phone: '031-5312345', email: 'redaksi@suarasurabaya.net' },
    social: {
      facebook: 'https://facebook.com/suarasurabaya',
      instagram: 'https://instagram.com/suarasurabaya',
      telegram: 'https://t.me/suarasurabaya',
    },
    type: 'Radio',
    reach: '1,1 juta pendengar',
    categories: ['Lokal', 'Warga'],
    verifiedAt: '2025-12-05',
    registeredAt: '2025-12-01',
  }),
  m({
    id: 'm8',
    slug: 'narasi',
    name: 'Narasi',
    domain: 'https://www.narasi.tv',
    logo: '',
    images: [],
    description:
      'Studio storytelling digital yang menghasilkan berita bergaya dokumenter dan explainer untuk anak muda.',
    status: 'suspended',
    companyName: 'Narasi Group',
    founded: 2018,
    address: {
      street: 'Jl. Kemang Raya',
      district: 'Kemang',
      city: 'Jakarta',
      province: 'DKI Jakarta',
    },
    contact: { phone: '021-7182345', email: 'hello@narasi.tv' },
    social: {
      instagram: 'https://instagram.com/narasi',
      youtube: 'https://youtube.com/@narasi',
      tiktok: 'https://tiktok.com/@narasi',
    },
    type: 'YouTube',
    reach: '2,8 juta/bulan',
    categories: ['Dokumenter', 'Pemuda'],
    registeredAt: '2026-07-01',
  }),
  m({
    id: 'm9',
    slug: 'podcast-bocor-alus',
    name: 'Bocor Alus',
    domain: 'https://example.com/bocor-alus',
    logo: '',
    images: [],
    description:
      'Brief audio mingguan yang mengurai politik nasional dengan sumber yang jelas dan catatan editorial.',
    status: 'review',
    companyName: 'Bocor Alus Studio',
    founded: 2021,
    address: {
      street: 'Jl. Dago',
      district: 'Coblong',
      city: 'Bandung',
      province: 'Jawa Barat',
    },
    contact: { phone: '022-2501234', email: 'hello@bocoralus.example' },
    social: {
      instagram: 'https://instagram.com/bocoralus',
      youtube: 'https://youtube.com/@bocoralus',
    },
    type: 'Podcast',
    reach: '420 ribu unduhan',
    categories: ['Politik', 'Audio'],
    registeredAt: '2026-07-05',
  }),
  m({
    id: 'm10',
    slug: 'tribun-medan',
    name: 'Tribun Medan',
    domain: 'https://medan.tribunnews.com',
    logo: '/logos/tribun-medan.png',
    images: [],
    description:
      'Redaksi digital regional yang meliput politik, bisnis, dan cerita komunitas di Sumatera Utara.',
    status: 'verified',
    companyName: 'PT Tribun Digital Online',
    founded: 2010,
    address: {
      street: 'Jl. Gatot Subroto',
      district: 'Medan Petisah',
      city: 'Medan',
      province: 'Sumatera Utara',
    },
    contact: { phone: '061-4156789', email: 'redaksi@tribunmedan.com' },
    social: {
      facebook: 'https://facebook.com/tribunmedan',
      instagram: 'https://instagram.com/tribunmedan',
    },
    type: 'Website',
    reach: '2,2 juta/bulan',
    categories: ['Regional', 'Berita'],
    verifiedAt: '2026-02-20',
    registeredAt: '2026-02-15',
  }),
  m({
    id: 'm11',
    slug: 'bali-post',
    name: 'Bali Post',
    domain: 'https://www.balipost.com',
    logo: '',
    images: [],
    description:
      'Harian lokal yang mendokumentasikan pariwisata, budaya, dan kebijakan di Bali.',
    status: 'verified',
    companyName: 'PT Bali Post',
    founded: 1948,
    address: {
      street: 'Jl. Kebo Iwa',
      district: 'Dauh Puri',
      city: 'Denpasar',
      province: 'Bali',
    },
    contact: { phone: '0361-234567', email: 'redaksi@balipost.com' },
    social: {
      facebook: 'https://facebook.com/balipost',
      instagram: 'https://instagram.com/balipost',
    },
    type: 'Newspaper',
    reach: '650 ribu/bulan',
    categories: ['Regional', 'Budaya'],
    verifiedAt: '2025-08-14',
    registeredAt: '2025-08-10',
  }),
  m({
    id: 'm12',
    slug: 'cnn-indonesia',
    name: 'CNN Indonesia',
    domain: 'https://www.cnnindonesia.com',
    logo: '',
    images: [],
    description:
      'Kanal berita 24 jam yang menyajikan jurnalisme siaran berstandar internasional bagi audiens Indonesia.',
    status: 'verified',
    companyName: 'PT Trans News Corpora',
    founded: 2015,
    address: {
      street: 'Gedung Transmedia',
      district: 'Mampang',
      city: 'Jakarta',
      province: 'DKI Jakarta',
    },
    contact: { phone: '021-79184000', email: 'redaksi@cnnindonesia.com' },
    social: {
      facebook: 'https://facebook.com/cnnindonesia',
      instagram: 'https://instagram.com/cnnindonesia',
      youtube: 'https://youtube.com/@CNNIndonesia',
      x: 'https://x.com/cnnindonesia',
    },
    type: 'TV Digital',
    reach: '11,6 juta penonton',
    categories: ['Siaran', 'Berita'],
    verifiedAt: '2026-03-01',
    registeredAt: '2026-02-28',
  }),
  m({
    id: 'm13',
    slug: 'tirto-id',
    name: 'Tirto.id',
    domain: 'https://tirto.id',
    logo: '',
    images: [],
    description:
      'Media online independen yang dikenal dengan jurnalisme presisi, laporan berbasis data, dan infografik mendalam.',
    status: 'verified',
    companyName: 'PT Tirto Digital Media',
    founded: 2016,
    address: {
      street: 'Jl. Kemang Timur',
      district: 'Bangka',
      city: 'Jakarta',
      province: 'DKI Jakarta',
    },
    contact: { phone: '021-7178901', email: 'redaksi@tirto.id' },
    social: {
      facebook: 'https://facebook.com/tirtoid',
      instagram: 'https://instagram.com/tirtoid',
      x: 'https://x.com/tirtoid',
    },
    type: 'Website',
    reach: '5,2 juta/bulan',
    categories: ['Data', 'Investigasi', 'Sosial'],
    verifiedAt: '2026-04-10',
    registeredAt: '2026-07-12',
  }),
  m({
    id: 'm14',
    slug: 'kbr-prime',
    name: 'KBR Prime',
    domain: 'https://kbrprime.id',
    logo: '',
    images: [],
    description:
      'Jaringan podcast berita dan dokumenter audio independen pertama di Indonesia dengan fokus isu sosial dan HAM.',
    status: 'verified',
    companyName: 'Kantor Berita Radio',
    founded: 2018,
    address: {
      street: 'Jl. Warung Buncit',
      district: 'Pancoran',
      city: 'Jakarta',
      province: 'DKI Jakarta',
    },
    contact: { phone: '021-7912345', email: 'redaksi@kbrprime.id' },
    social: {
      instagram: 'https://instagram.com/kbrprime',
      youtube: 'https://youtube.com/@kbrprime',
      telegram: 'https://t.me/kbrprime',
    },
    type: 'Podcast',
    reach: '850 ribu unduhan',
    categories: ['Audio', 'Sosial', 'HAM'],
    verifiedAt: '2026-05-15',
    registeredAt: '2026-07-13',
  }),
  m({
    id: 'm15',
    slug: 'mojok',
    name: 'Mojok.co',
    domain: 'https://mojok.co',
    logo: '',
    images: [],
    description:
      'Media alternatif yang menyajikan esai santai, opini hangat, satire politik, dan ulasan budaya populer secara jenaka.',
    status: 'verified',
    companyName: 'PT Mojok Media Kreatif',
    founded: 2014,
    address: {
      street: 'Jl. Kaliurang',
      district: 'Condongcatur',
      city: 'Sleman',
      province: 'DI Yogyakarta',
    },
    contact: { phone: '0274-887766', email: 'redaksi@mojok.co' },
    social: {
      facebook: 'https://facebook.com/mojokdotco',
      instagram: 'https://instagram.com/mojokdotco',
      tiktok: 'https://tiktok.com/@mojokdotco',
      x: 'https://x.com/mojokdotco',
    },
    type: 'Website',
    reach: '1,8 juta/bulan',
    categories: ['Satire', 'Budaya', 'Sains'],
    verifiedAt: '2026-03-24',
    registeredAt: '2026-07-14',
  }),
];

export const claimRequests: ClaimRequest[] = [
  {
    id: 'c1',
    mediaName: 'Metro TV',
    mediaSlug: 'metro-tv',
    user: {
      name: 'Andi Pratama',
      email: 'andi.pratama@metrotv.example',
      phone: '081234567890',
      bio: 'Pemimpin Redaksi Metro TV',
      verificationEmail: 'andi.pratama@metrotv.example',
      role: 'Owner',
      status: 'pending',
    },
    status: 'pending',
    submittedAt: '2026-07-10T09:24:00+07:00',
  },
  {
    id: 'c2',
    mediaName: 'Balairung Press',
    mediaSlug: 'balairungpress',
    user: {
      name: 'Sinta Rahayu',
      email: 'sinta@balairung.example',
      phone: '081298765432',
      verificationEmail: 'sinta@balairung.example',
      role: 'Editor',
      status: 'pending',
    },
    status: 'pending',
    submittedAt: '2026-07-11T14:02:00+07:00',
  },
  {
    id: 'c3',
    mediaName: 'Bocor Alus',
    mediaSlug: 'podcast-bocor-alus',
    user: {
      name: 'Raka Wibowo',
      email: 'raka@bocoralus.example',
      phone: '081122334455',
      verificationEmail: 'raka@bocoralus.example',
      role: 'Owner',
      status: 'active',
    },
    status: 'approved',
    submittedAt: '2026-07-05T11:40:00+07:00',
  },
];

export const mediaTypes: MediaType[] = [
  'Website',
  'TV',
  'TV Digital',
  'Radio',
  'Podcast',
  'YouTube',
  'TikTok',
  'Newsletter',
  'Magazine',
  'Newspaper',
];

export const mediaStatuses: MediaStatus[] = [
  'verified',
  'unverified',
  'review',
  'suspended',
];

export const userRoles: UserRole[] = [
  'Owner',
  'Editor',
  'Admin',
  'Contributor',
  'Other',
];

export const userStatuses: UserStatus[] = ['active', 'pending', 'suspended'];

export const provinces = [
  ...new Set(mediaOutlets.map((item) => item.address.province)),
].sort();

export function getMediaBySlug(slug: string) {
  return mediaOutlets.find((item) => item.slug === slug);
}

export function getDirectoryStats() {
  return {
    total: mediaOutlets.length,
    verified: mediaOutlets.filter((item) => item.status === 'verified').length,
    review: mediaOutlets.filter((item) => item.status === 'review').length,
    suspended: mediaOutlets.filter((item) => item.status === 'suspended').length,
    claimsPending: claimRequests.filter((item) => item.status === 'pending').length,
  };
}
