export type MediaStatus = 'verified' | 'review' | 'suspended';
export type MediaType = 'Online' | 'Cetak' | 'TV' | 'Radio' | 'Podcast';
export type ClaimStatus = 'pending' | 'approved' | 'rejected';

export interface MediaOutlet {
  id: string;
  slug: string;
  name: string;
  type: MediaType;
  city: string;
  province: string;
  description: string;
  website: string;
  founded: number;
  status: MediaStatus;
  reach: string;
  categories: string[];
  verifiedAt?: string;
  registeredAt?: string;
}

export interface ClaimRequest {
  id: string;
  mediaName: string;
  mediaSlug: string;
  claimantName: string;
  claimantEmail: string;
  role: string;
  organization: string;
  notes: string;
  status: ClaimStatus;
  submittedAt: string;
}

export const mediaOutlets: MediaOutlet[] = [
  {
    id: 'm1',
    slug: 'kompas',
    name: 'Kompas',
    type: 'Online',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    description:
      'Ruang redaksi nasional terkemuka yang meliput politik, bisnis, dan budaya dengan standar editorial terverifikasi.',
    website: 'https://www.kompas.com',
    founded: 1965,
    status: 'verified',
    reach: '12,4 juta/bulan',
    categories: ['Berita', 'Politik', 'Bisnis'],
    verifiedAt: '2025-11-02',
    registeredAt: '2025-11-01',
  },
  {
    id: 'm2',
    slug: 'tempo',
    name: 'Tempo',
    type: 'Cetak',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    description:
      'Mingguan investigasi yang dikenal dengan liputan mendalam dan jurnalisme independen di Indonesia.',
    website: 'https://www.tempo.co',
    founded: 1971,
    status: 'verified',
    reach: '4,1 juta/bulan',
    categories: ['Investigasi', 'Politik'],
    verifiedAt: '2025-10-18',
    registeredAt: '2025-10-15',
  },
  {
    id: 'm3',
    slug: 'detik',
    name: 'Detik',
    type: 'Online',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    description:
      'Platform berita digital yang cepat meliput headline nasional, gaya hidup, dan olahraga.',
    website: 'https://www.detik.com',
    founded: 1998,
    status: 'verified',
    reach: '28,7 juta/bulan',
    categories: ['Berita', 'Gaya Hidup', 'Olahraga'],
    verifiedAt: '2025-09-30',
    registeredAt: '2025-09-25',
  },
  {
    id: 'm4',
    slug: 'metro-tv',
    name: 'Metro TV',
    type: 'TV',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    description:
      'Jaringan televisi nasional yang menyajikan berita langsung, talk show, dan program isu publik.',
    website: 'https://www.metrotvnews.com',
    founded: 2000,
    status: 'review',
    reach: '9,2 juta penonton',
    categories: ['Siaran', 'Berita'],
    registeredAt: '2026-07-10',
  },
  {
    id: 'm5',
    slug: 'radio-elshinta',
    name: 'Radio Elshinta',
    type: 'Radio',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    description:
      'Jaringan radio berita nasional dengan liputan interaktif dan update lalu lintas real-time.',
    website: 'https://www.elshinta.com',
    founded: 1988,
    status: 'verified',
    reach: '3,5 juta pendengar',
    categories: ['Berita', 'Talk'],
    verifiedAt: '2026-01-12',
    registeredAt: '2026-01-10',
  },
  {
    id: 'm6',
    slug: 'balairungpress',
    name: 'Balairung Press',
    type: 'Online',
    city: 'Yogyakarta',
    province: 'DI Yogyakarta',
    description:
      'Media independen berakar kampus yang fokus pada isu pemuda, budaya, dan tata kelola lokal.',
    website: 'https://www.balairungpress.com',
    founded: 1997,
    status: 'review',
    reach: '180 ribu/bulan',
    categories: ['Kampus', 'Budaya'],
    registeredAt: '2026-07-11',
  },
  {
    id: 'm7',
    slug: 'suara-surabaya',
    name: 'Suara Surabaya',
    type: 'Radio',
    city: 'Surabaya',
    province: 'Jawa Timur',
    description:
      'Radio jurnalisme warga yang dikenal dengan pelaporan partisipatif dan pantauan layanan kota.',
    website: 'https://www.suarasurabaya.net',
    founded: 1999,
    status: 'verified',
    reach: '1,1 juta pendengar',
    categories: ['Lokal', 'Warga'],
    verifiedAt: '2025-12-05',
    registeredAt: '2025-12-01',
  },
  {
    id: 'm8',
    slug: 'narasi',
    name: 'Narasi',
    type: 'Online',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    description:
      'Studio storytelling digital yang menghasilkan berita bergaya dokumenter dan explainer untuk anak muda.',
    website: 'https://www.narasi.tv',
    founded: 2018,
    status: 'suspended',
    reach: '2,8 juta/bulan',
    categories: ['Dokumenter', 'Pemuda'],
    registeredAt: '2026-07-01',
  },
  {
    id: 'm9',
    slug: 'podcast-bocor-alus',
    name: 'Bocor Alus',
    type: 'Podcast',
    city: 'Bandung',
    province: 'Jawa Barat',
    description:
      'Brief audio mingguan yang mengurai politik nasional dengan sumber yang jelas dan catatan editorial.',
    website: 'https://example.com/bocor-alus',
    founded: 2021,
    status: 'review',
    reach: '420 ribu unduhan',
    categories: ['Politik', 'Audio'],
    registeredAt: '2026-07-05',
  },
  {
    id: 'm10',
    slug: 'tribun-medan',
    name: 'Tribun Medan',
    type: 'Online',
    city: 'Medan',
    province: 'Sumatera Utara',
    description:
      'Redaksi digital regional yang meliput politik, bisnis, dan cerita komunitas di Sumatera Utara.',
    website: 'https://medan.tribunnews.com',
    founded: 2010,
    status: 'verified',
    reach: '2,2 juta/bulan',
    categories: ['Regional', 'Berita'],
    verifiedAt: '2026-02-20',
    registeredAt: '2026-02-15',
  },
  {
    id: 'm11',
    slug: 'bali-post',
    name: 'Bali Post',
    type: 'Cetak',
    city: 'Denpasar',
    province: 'Bali',
    description:
      'Harian lokal yang mendokumentasikan pariwisata, budaya, dan kebijakan di Bali.',
    website: 'https://www.balipost.com',
    founded: 1948,
    status: 'verified',
    reach: '650 ribu/bulan',
    categories: ['Regional', 'Budaya'],
    verifiedAt: '2025-08-14',
    registeredAt: '2025-08-10',
  },
  {
    id: 'm12',
    slug: 'cnn-indonesia',
    name: 'CNN Indonesia',
    type: 'TV',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    description:
      'Kanal berita 24 jam yang menyajikan jurnalisme siaran berstandar internasional bagi audiens Indonesia.',
    website: 'https://www.cnnindonesia.com',
    founded: 2015,
    status: 'verified',
    reach: '11,6 juta penonton',
    categories: ['Siaran', 'Berita'],
    verifiedAt: '2026-03-01',
    registeredAt: '2026-02-28',
  },
  {
    id: 'm13',
    slug: 'tirto-id',
    name: 'Tirto.id',
    type: 'Online',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    description:
      'Media online independen yang dikenal dengan jurnalisme presisi, laporan berbasis data, dan infografik mendalam.',
    website: 'https://tirto.id',
    founded: 2016,
    status: 'verified',
    reach: '5,2 juta/bulan',
    categories: ['Data', 'Investigasi', 'Sosial'],
    verifiedAt: '2026-04-10',
    registeredAt: '2026-07-12',
  },
  {
    id: 'm14',
    slug: 'kbr-prime',
    name: 'KBR Prime',
    type: 'Podcast',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    description:
      'Jaringan podcast berita dan dokumenter audio independen pertama di Indonesia dengan fokus isu sosial dan HAM.',
    website: 'https://kbrprime.id',
    founded: 2018,
    status: 'verified',
    reach: '850 ribu unduhan',
    categories: ['Audio', 'Sosial', 'HAM'],
    verifiedAt: '2026-05-15',
    registeredAt: '2026-07-13',
  },
  {
    id: 'm15',
    slug: 'mojok',
    name: 'Mojok.co',
    type: 'Online',
    city: 'Sleman',
    province: 'DI Yogyakarta',
    description:
      'Media alternatif yang menyajikan esai santai, opini hangat, satire politik, dan ulasan budaya populer secara jenaka.',
    website: 'https://mojok.co',
    founded: 2014,
    status: 'verified',
    reach: '1,8 juta/bulan',
    categories: ['Satire', 'Budaya', 'Sains'],
    verifiedAt: '2026-03-24',
    registeredAt: '2026-07-14',
  },
];

export const claimRequests: ClaimRequest[] = [
  {
    id: 'c1',
    mediaName: 'Metro TV',
    mediaSlug: 'metro-tv',
    claimantName: 'Andi Pratama',
    claimantEmail: 'andi.pratama@metrotv.example',
    role: 'Pemimpin Redaksi',
    organization: 'Media Group',
    notes: 'Mengajukan verifikasi kepemilikan untuk listing resmi Metro TV.',
    status: 'pending',
    submittedAt: '2026-07-10T09:24:00+07:00',
  },
  {
    id: 'c2',
    mediaName: 'Balairung Press',
    mediaSlug: 'balairungpress',
    claimantName: 'Sinta Rahayu',
    claimantEmail: 'sinta@balairung.example',
    role: 'Managing Editor',
    organization: 'Balairung Press',
    notes: 'Menyerahkan kartu pers dan bukti kepemilikan domain.',
    status: 'pending',
    submittedAt: '2026-07-11T14:02:00+07:00',
  },
  {
    id: 'c3',
    mediaName: 'Bocor Alus',
    mediaSlug: 'podcast-bocor-alus',
    claimantName: 'Raka Wibowo',
    claimantEmail: 'raka@bocoralus.example',
    role: 'Pendiri',
    organization: 'Bocor Alus Studio',
    notes: 'Perlu memperbarui email kontak dan mengajukan badge Terverifikasi.',
    status: 'approved',
    submittedAt: '2026-07-05T11:40:00+07:00',
  },
  {
    id: 'c4',
    mediaName: 'Narasi',
    mediaSlug: 'narasi',
    claimantName: 'Dewi Lestari',
    claimantEmail: 'dewi@narasi.example',
    role: 'Konsultan Hukum',
    organization: 'Narasi Group',
    notes: 'Mengajukan banding untuk aktivasi ulang setelah penangguhan sementara.',
    status: 'rejected',
    submittedAt: '2026-07-01T16:18:00+07:00',
  },
  {
    id: 'c5',
    mediaName: 'Suara Surabaya',
    mediaSlug: 'suara-surabaya',
    claimantName: 'Budi Santoso',
    claimantEmail: 'budi@suarasurabaya.example',
    role: 'Kepala Operasional',
    organization: 'Suara Surabaya',
    notes: 'Memperbarui alamat terdaftar dan kontak utama.',
    status: 'pending',
    submittedAt: '2026-07-12T08:55:00+07:00',
  },
];

export const mediaTypes: MediaType[] = ['Online', 'Cetak', 'TV', 'Radio', 'Podcast'];

export const provinces = [...new Set(mediaOutlets.map((m) => m.province))].sort();

export function getMediaBySlug(slug: string) {
  return mediaOutlets.find((m) => m.slug === slug);
}

export function getDirectoryStats() {
  return {
    total: mediaOutlets.length,
    verified: mediaOutlets.filter((m) => m.status === 'verified').length,
    review: mediaOutlets.filter((m) => m.status === 'review').length,
    suspended: mediaOutlets.filter((m) => m.status === 'suspended').length,
    claimsPending: claimRequests.filter((c) => c.status === 'pending').length,
  };
}
