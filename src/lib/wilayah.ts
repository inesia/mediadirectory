/**
 * Cascading Indonesian wilayah for address dropdowns (mockup dataset).
 * Provinsi → Kabupaten/Kota → Kecamatan
 */
export type WilayahMap = Record<string, Record<string, string[]>>;

export const wilayahIndonesia: WilayahMap = {
  'Aceh': {
    'Kota Banda Aceh': ['Baiturrahman', 'Kuta Alam', 'Meuraxa', 'Syiah Kuala'],
    'Kabupaten Aceh Besar': ['Darussalam', 'Ingin Jaya', 'Mesjid Raya', 'Suka Makmur'],
  },
  'Sumatera Utara': {
    'Kota Medan': ['Medan Baru', 'Medan Polonia', 'Medan Petisah', 'Medan Sunggal', 'Medan Timur'],
    'Kota Binjai': ['Binjai Kota', 'Binjai Utara', 'Binjai Selatan'],
    'Kabupaten Deli Serdang': ['Percut Sei Tuan', 'Tanjung Morawa', 'Lubuk Pakam'],
  },
  'Sumatera Barat': {
    'Kota Padang': ['Padang Barat', 'Padang Timur', 'Kuranji', 'Koto Tangah'],
    'Kabupaten Agam': ['Bukik Batabuah', 'Lubuk Basung', 'Tilatang Kamang'],
  },
  'Riau': {
    'Kota Pekanbaru': ['Sukajadi', 'Marpoyan Damai', 'Tampan', 'Payung Sekaki'],
    'Kabupaten Kampar': ['Bangkinang', 'Siak Hulu', 'Tapung'],
  },
  'Kepulauan Riau': {
    'Kota Batam': ['Batam Kota', 'Sekupang', 'Batu Aji', 'Nongsa'],
    'Kota Tanjung Pinang': ['Tanjung Pinang Kota', 'Bukit Bestari'],
  },
  'Jambi': {
    'Kota Jambi': ['Pasar Jambi', 'Telanaipura', 'Kotabaru', 'Jelutung'],
    'Kabupaten Muaro Jambi': ['Jambi Luar Kota', 'Sekernan'],
  },
  'Sumatera Selatan': {
    'Kota Palembang': ['Ilir Barat I', 'Ilir Timur I', 'Jakabaring', 'Kemuning', 'Sukarami'],
    'Kabupaten Ogan Ilir': ['Indralaya', 'Tanjung Raja'],
  },
  'Bangka Belitung': {
    'Kota Pangkal Pinang': ['Taman Sari', 'Gerunggang', 'Bukit Intan'],
    'Kabupaten Bangka': ['Sungailiat', 'Merawang'],
  },
  'Bengkulu': {
    'Kota Bengkulu': ['Teluk Segara', 'Gading Cempaka', 'Ratu Agung'],
    'Kabupaten Bengkulu Utara': ['Arga Makmur', 'Ketahun'],
  },
  'Lampung': {
    'Kota Bandar Lampung': ['Tanjung Karang Pusat', 'Kedaton', 'Rajabasa', 'Panjang'],
    'Kabupaten Lampung Selatan': ['Natar', 'Tanjung Bintang', 'Katibung'],
  },
  'DKI Jakarta': {
    'Jakarta Pusat': ['Gambir', 'Tanah Abang', 'Menteng', 'Senen', 'Cempaka Putih', 'Kemayoran'],
    'Jakarta Utara': ['Penjaringan', 'Pademangan', 'Tanjung Priok', 'Koja', 'Kelapa Gading'],
    'Jakarta Barat': ['Tambora', 'Grogol Petamburan', 'Kebon Jeruk', 'Palmerah', 'Cengkareng'],
    'Jakarta Selatan': ['Kebayoran Baru', 'Kebayoran Lama', 'Setiabudi', 'Tebet', 'Pasar Minggu', 'Jagakarsa'],
    'Jakarta Timur': ['Matraman', 'Jatinegara', 'Duren Sawit', 'Cakung', 'Makasar', 'Ciracas'],
    'Kepulauan Seribu': ['Kepulauan Seribu Utara', 'Kepulauan Seribu Selatan'],
  },
  'Jawa Barat': {
    'Kota Bandung': ['Coblong', 'Cicendo', 'Bandung Wetan', 'Sukajadi', 'Buahbatu', 'Antapani'],
    'Kabupaten Bandung': ['Dayeuhkolot', 'Baleendah', 'Cileunyi', 'Soreang', 'Majalaya'],
    'Kota Bekasi': ['Bekasi Timur', 'Bekasi Barat', 'Bekasi Selatan', 'Medan Satria', 'Mustika Jaya'],
    'Kabupaten Bekasi': ['Cikarang Utara', 'Cikarang Selatan', 'Tambun Selatan', 'Cibitung'],
    'Kota Depok': ['Beji', 'Sukmajaya', 'Cimanggis', 'Pancoran Mas', 'Sawangan'],
    'Kota Bogor': ['Bogor Tengah', 'Bogor Utara', 'Bogor Selatan', 'Tanah Sareal'],
    'Kabupaten Bogor': ['Cibinong', 'Citeureup', 'Gunung Putri', 'Parung', 'Ciawi'],
    'Kota Cimahi': ['Cimahi Utara', 'Cimahi Tengah', 'Cimahi Selatan'],
  },
  'Banten': {
    'Kota Tangerang': ['Ciledug', 'Karawaci', 'Batuceper', 'Cipondoh', 'Neglasari'],
    'Kota Tangerang Selatan': ['Serpong', 'Serpong Utara', 'Pondok Aren', 'Ciputat', 'Pamulang'],
    'Kabupaten Tangerang': ['Kelapa Dua', 'Curug', 'Legok', 'Balaraja'],
    'Kota Serang': ['Serang', 'Cipocok Jaya', 'Taktakan'],
  },
  'Jawa Tengah': {
    'Kota Semarang': ['Semarang Tengah', 'Semarang Selatan', 'Candisari', 'Tembalang', 'Pedurungan'],
    'Kabupaten Semarang': ['Ungaran Barat', 'Ungaran Timur', 'Ambarawa'],
    'Kota Surakarta': ['Laweyan', 'Serengan', 'Pasar Kliwon', 'Jebres', 'Banjarsari'],
    'Kota Magelang': ['Magelang Utara', 'Magelang Tengah', 'Magelang Selatan'],
    'Kabupaten Banyumas': ['Purwokerto Barat', 'Purwokerto Timur', 'Sokaraja'],
  },
  'DI Yogyakarta': {
    'Kota Yogyakarta': ['Gondokusuman', 'Jetis', 'Mergangsan', 'Umbulharjo', 'Kotagede', 'Danurejan'],
    'Kabupaten Sleman': ['Depok', 'Mlati', 'Gamping', 'Ngaglik', 'Berbah'],
    'Kabupaten Bantul': ['Bantul', 'Sewon', 'Kasihan', 'Banguntapan'],
    'Kabupaten Kulon Progo': ['Wates', 'Pengasih', 'Temon'],
    'Kabupaten Gunungkidul': ['Wonosari', 'Playen', 'Paliyan'],
  },
  'Jawa Timur': {
    'Kota Surabaya': ['Gubeng', 'Tegalsari', 'Wonokromo', 'Rungkut', 'Sukolilo', 'Kenjeran'],
    'Kabupaten Sidoarjo': ['Sidoarjo', 'Waru', 'Gedangan', 'Taman', 'Krian'],
    'Kota Malang': ['Klojen', 'Blimbing', 'Lowokwaru', 'Sukun', 'Kedungkandang'],
    'Kabupaten Malang': ['Kepanjen', 'Singosari', 'Lawang', 'Pakisan'],
    'Kota Kediri': ['Mojoroto', 'Kota', 'Pesantren'],
    'Kabupaten Jember': ['Sumbersari', 'Patrang', 'Kaliwates'],
  },
  'Bali': {
    'Kota Denpasar': ['Denpasar Selatan', 'Denpasar Timur', 'Denpasar Barat', 'Denpasar Utara'],
    'Kabupaten Badung': ['Kuta', 'Kuta Selatan', 'Kuta Utara', 'Mengwi', 'Abiansemal'],
    'Kabupaten Gianyar': ['Ubud', 'Gianyar', 'Sukawati', 'Tegallalang'],
    'Kabupaten Buleleng': ['Buleleng', 'Sukasada', 'Gerokgak'],
  },
  'Nusa Tenggara Barat': {
    'Kota Mataram': ['Mataram', 'Selaparang', 'Cakranegara', 'Sekarbela'],
    'Kabupaten Lombok Barat': ['Gerung', 'Lembar', 'Kediri'],
    'Kabupaten Lombok Tengah': ['Praya', 'Pujut', 'Batukliang'],
  },
  'Nusa Tenggara Timur': {
    'Kota Kupang': ['Kelapa Lima', 'Oebobo', 'Maulafa', 'Alak'],
    'Kabupaten Kupang': ['Kupang Tengah', 'Kupang Barat', 'Amarasi'],
  },
  'Kalimantan Barat': {
    'Kota Pontianak': ['Pontianak Kota', 'Pontianak Selatan', 'Pontianak Utara', 'Pontianak Tenggara'],
    'Kabupaten Kubu Raya': ['Sungai Raya', 'Sungai Ambawang'],
  },
  'Kalimantan Tengah': {
    'Kota Palangka Raya': ['Pahandut', 'Jekan Raya', 'Sabangau', 'Bukit Batu'],
    'Kabupaten Kotawaringin Timur': ['Baamang', 'Mentaya Hilir Selatan'],
  },
  'Kalimantan Selatan': {
    'Kota Banjarmasin': ['Banjarmasin Tengah', 'Banjarmasin Selatan', 'Banjarmasin Utara', 'Banjarmasin Timur'],
    'Kabupaten Banjar': ['Martapura', 'Gambut', 'Kertak Hanyar'],
  },
  'Kalimantan Timur': {
    'Kota Samarinda': ['Samarinda Ulu', 'Samarinda Ilir', 'Sungai Kunjang', 'Samarinda Seberang'],
    'Kota Balikpapan': ['Balikpapan Selatan', 'Balikpapan Utara', 'Balikpapan Tengah', 'Balikpapan Kota'],
    'Kabupaten Kutai Kartanegara': ['Tenggarong', 'Loa Janan', 'Samboja'],
  },
  'Kalimantan Utara': {
    'Kota Tarakan': ['Tarakan Barat', 'Tarakan Timur', 'Tarakan Tengah'],
    'Kabupaten Bulungan': ['Tanjung Selor', 'Tanjung Palas'],
  },
  'Sulawesi Utara': {
    'Kota Manado': ['Sario', 'Wenang', 'Tikala', 'Mapanget', 'Malalayang'],
    'Kabupaten Minahasa': ['Tondano Utara', 'Tondano Selatan', 'Tomohon Utara'],
  },
  'Sulawesi Tengah': {
    'Kota Palu': ['Palu Barat', 'Palu Timur', 'Palu Selatan', 'Palu Utara'],
    'Kabupaten Sigi': ['Sigi Biromaru', 'Dolo', 'Marawola'],
  },
  'Sulawesi Selatan': {
    'Kota Makassar': ['Ujung Pandang', 'Makassar', 'Panakkukang', 'Rappocini', 'Tamalanrea', 'Biringkanaya'],
    'Kabupaten Gowa': ['Somba Opu', 'Pallangga', 'Bontomarannu'],
    'Kabupaten Maros': ['Turikale', 'Maros Baru', 'Mandai'],
  },
  'Sulawesi Tenggara': {
    'Kota Kendari': ['Kendari', 'Mandonga', 'Poasia', 'Baruga'],
    'Kabupaten Konawe': ['Unaaha', 'Wonggeduku'],
  },
  'Gorontalo': {
    'Kota Gorontalo': ['Kota Selatan', 'Kota Utara', 'Kota Barat', 'Dumbo Raya'],
    'Kabupaten Gorontalo': ['Limboto', 'Telaga', 'Tibawa'],
  },
  'Sulawesi Barat': {
    'Kabupaten Mamuju': ['Mamuju', 'Tapalang', 'Kalukku'],
    'Kabupaten Polewali Mandar': ['Polewali', 'Wonomulyo'],
  },
  'Maluku': {
    'Kota Ambon': ['Sirimau', 'Nusaniwe', 'Teluk Ambon', 'Baguala'],
    'Kabupaten Maluku Tengah': ['Masohi', 'Amahai', 'Tehoru'],
  },
  'Maluku Utara': {
    'Kota Ternate': ['Ternate Selatan', 'Ternate Tengah', 'Ternate Utara'],
    'Kabupaten Halmahera Barat': ['Jailolo', 'Sahu'],
  },
  'Papua': {
    'Kota Jayapura': ['Jayapura Utara', 'Jayapura Selatan', 'Abepura', 'Muara Tami'],
    'Kabupaten Jayapura': ['Sentani', 'Nimboran', 'Kemtuk'],
  },
  'Papua Barat': {
    'Kota Sorong': ['Sorong', 'Sorong Timur', 'Sorong Utara', 'Sorong Manoi'],
    'Kabupaten Manokwari': ['Manokwari Barat', 'Manokwari Timur'],
  },
  'Papua Selatan': {
    'Kabupaten Merauke': ['Merauke', 'Semangga', 'Tanah Miring'],
  },
  'Papua Tengah': {
    'Kabupaten Nabire': ['Nabire', 'Uwapa', 'Wanggar'],
  },
  'Papua Pegunungan': {
    'Kabupaten Jayawijaya': ['Wamena', 'Asolokobal', 'Hubikosi'],
  },
  'Papua Barat Daya': {
    'Kabupaten Sorong': ['Aimas', 'Makbon', 'Salawati'],
  },
};

export const provinceList = Object.keys(wilayahIndonesia).sort((a, b) =>
  a.localeCompare(b, 'id'),
);

export function citiesOf(province: string): string[] {
  const cities = wilayahIndonesia[province];
  return cities ? Object.keys(cities).sort((a, b) => a.localeCompare(b, 'id')) : [];
}

export function districtsOf(province: string, city: string): string[] {
  const list = wilayahIndonesia[province]?.[city] ?? [];
  return [...list].sort((a, b) => a.localeCompare(b, 'id'));
}
