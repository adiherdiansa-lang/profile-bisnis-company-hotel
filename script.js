/* ═══════════════════════════════════════════════
   KRISNA BEACH HOTEL — script.js
   ═══════════════════════════════════════════════ */

/* ── Data ──────────────────────────────────────── */
/* Gallery landing: each photo represents one of the 6 sub-galleries and
   acts as a button — clicking the centered/active one opens that category. */
const GALLERY = [
  { key: 'restoran', title: 'Restoran',
    img: 'image/Galeri/Resto/foto11.webp',
    caption: 'Nikmati sajian autentik dengan suasana hangat dan pemandangan laut dari restoran utama kami.' },
  { key: 'kedai-kayu-manis', title: 'Kedai Kayu Manis',
    img: 'image/Galeri/Kedai Kayu Manis/foto7.webp',
    caption: 'Kedai santai kami menghadirkan kudapan dan kopi lokal di tengah suasana tropis yang teduh.' },
  { key: 'swimming-pool', title: 'Swimming Pool',
    img: 'image/Galeri/Pool/5.webp',
    caption: 'Kolam renang infinity kami menghadap langsung ke cakrawala samudra sepanjang hari.' },
  { key: 'front-office', title: 'Front Office',
    img: 'image/Galeri/Front Office/foto6.webp',
    caption: 'Area penyambutan tamu yang hangat, tempat setiap perjalanan menginap Anda dimulai.' },
  { key: 'view', title: 'View',
    img: 'image/Galeri/view/foto13.webp',
    caption: 'Panorama resort dari berbagai sudut — dari taman tropis hingga garis pantai yang luas.' },
  { key: 'aula', title: 'Aula',
    img: 'image/Galeri/Aula/0.jpeg',
    caption: 'Ruang aula serbaguna kami, ideal untuk acara pernikahan, pertemuan, dan perayaan spesial.' }
];

const ROOMS_BRANCH1 = [
  {
    id: 0,
    name: 'Standard Room',
    img: 'image/Kamar/Krisna Beach 1/Standard/0.jpeg',
    count: 12, size: '52 m²', price: 'Rp 2.800.000 / malam',
    facilities: ['AC', 'TV 55"', 'Bathtub panoramik', 'Balkon ocean view', 'Mini bar', 'Wi-Fi premium', 'Safe box', 'Bathrobes & slippers'],
    gallery: [
      'image/Kamar/Krisna Beach 1/Standard/1.jpeg',
      'image/Kamar/Krisna Beach 1/Standard/2.jpeg',
      'image/Kamar/Krisna Beach 1/Standard/3.jpeg',
      'image/Kamar/Krisna Beach 1/Standard/4.jpeg'
    ]
  },
  {
    id: 1,
    name: 'Superior Room',
    img: 'image/Kamar/Krisna Beach 1/Superior/0.jpeg',
    count: 8, size: '80 m²', price: 'Rp 5.500.000 / malam',
    facilities: ['Private pool', 'AC', 'TV OLED', 'Outdoor shower', 'Butler service 24 jam', 'Dapur kecil', 'Hammock & gazebo'],
    gallery: [
      'image/Kamar/Krisna Beach 1/Superior/1.jpeg',
      'image/Kamar/Krisna Beach 1/Superior/2.jpeg',
      'image/Kamar/Krisna Beach 1/Superior/3.jpeg',
      'image/Kamar/Krisna Beach 1/Superior/4.jpeg'
    ]
  },
  {
    id: 2,
    name: 'Deluxe Room',
    img: 'image/Kamar/Krisna Beach 1/Deluxe/0.jpeg',
    count: 24, size: '35 m²', price: 'Rp 1.500.000 / malam',
    facilities: ['AC', 'TV 43"', 'Shower', 'Semi-ocean view', 'Wi-Fi', 'Minibar', 'Sarapan pagi'],
    gallery: [
      'image/Kamar/Krisna Beach 1/Deluxe/1.jpeg',
      'image/Kamar/Krisna Beach 1/Deluxe/2.jpeg',
      'image/Kamar/Krisna Beach 1/Deluxe/3.jpeg',
      'image/Kamar/Krisna Beach 1/Deluxe/4.jpeg'
    ]
  },
  {
    id: 3,
    name: 'Executive Room',
    img: 'image/Kamar/Krisna Beach 1/Executive/0.jpeg',
    count: 4, size: '140 m²', price: 'Rp 12.000.000 / malam',
    facilities: ['Rooftop infinity pool', '2 kamar tidur', 'Ruang tamu mewah', 'Dapur lengkap', 'Butler eksklusif', 'Panoramic 360°'],
    gallery: [
      'image/Kamar/Krisna Beach 1/Executive/1.jpg',
      'image/Kamar/Krisna Beach 1/Executive/2.jpg',
      'image/Kamar/Krisna Beach 1/Executive/3.jpg',
      'image/Kamar/Krisna Beach 1/Executive/4.jpg'
    ]
  }
];

/* Krisna Beach 1 & 2 are two branches of the same company. For now their
   content is identical (per instruction) — Branch 2 is a deep copy so it can
   be edited independently later without touching Branch 1's data. */
const ROOMS_BRANCH2 = [
  {
    id: 0, name: 'Standard Economy',
    img: 'image/Kamar/Krisna Beach 2/Standard Economy/WhatsApp Image 2025-10-05 at 10.28.41 AM.jpeg',
    count: 12, size: '28 m²', price: 'Rp 850.000 / malam',
    facilities: ['AC', 'TV', 'Kamar mandi', 'Wi-Fi', 'Sarapan pagi'],
    gallery: [
      'image/Kamar/Krisna Beach 2/Standard Economy/WhatsApp Image 2025-10-05 at 10.28.41 AM.jpeg',
      'image/Kamar/Krisna Beach 2/Standard Economy/WhatsApp Image 2025-10-05 at 10.28.41 AM (1).jpeg',
      'image/Kamar/Krisna Beach 2/Standard Economy/WhatsApp Image 2025-10-05 at 10.28.42.jpeg'
    ]
  },
  {
    id: 1, name: 'Standard Twin',
    img: 'image/Kamar/Krisna Beach 2/Standard Twin/9.png',
    count: 10, size: '30 m²', price: 'Rp 950.000 / malam',
    facilities: ['AC', 'Twin bed', 'TV', 'Kamar mandi', 'Wi-Fi', 'Sarapan pagi'],
    gallery: [
      'image/Kamar/Krisna Beach 2/Standard Twin/9.png',
      'image/Kamar/Krisna Beach 2/Standard Twin/WhatsApp Image 2025-10-05 at 10.28.40 AM.jpeg',
      'image/Kamar/Krisna Beach 2/Standard Twin/WhatsApp Image 2025-10-05 at 10.28.40 AM (1).jpeg',
      'image/Kamar/Krisna Beach 2/Standard Twin/WhatsApp Image 2025-10-05 at 10.28.41 AM.jpeg'
    ]
  },
  {
    id: 2, name: 'Superior Twin',
    img: 'image/Kamar/Krisna Beach 2/Superior Twin/WhatsApp Image 2025-10-05 at 10.27.03 AM.jpeg',
    count: 8, size: '34 m²', price: 'Rp 1.300.000 / malam',
    facilities: ['AC', 'Twin bed', 'TV', 'Kamar mandi', 'Wi-Fi', 'Minibar', 'Sarapan pagi'],
    gallery: [
      'image/Kamar/Krisna Beach 2/Superior Twin/WhatsApp Image 2025-10-05 at 10.27.03 AM.jpeg',
      'image/Kamar/Krisna Beach 2/Superior Twin/WhatsApp Image 2025-10-05 at 10.27.04 AM.jpeg'
    ]
  },
  {
    id: 3, name: 'Deluxe Single',
    img: 'image/Kamar/Krisna Beach 2/Deluxe Single/WhatsApp Image 2025-10-05 at 10.27.02 AM.jpeg',
    count: 6, size: '32 m²', price: 'Rp 1.100.000 / malam',
    facilities: ['AC', 'Single bed', 'TV', 'Kamar mandi', 'Wi-Fi', 'Minibar'],
    gallery: [
      'image/Kamar/Krisna Beach 2/Deluxe Single/WhatsApp Image 2025-10-05 at 10.27.02 AM.jpeg',
      'image/Kamar/Krisna Beach 2/Deluxe Single/WhatsApp Image 2025-10-05 at 10.27.02 AM (1).jpeg',
      'image/Kamar/Krisna Beach 2/Deluxe Single/WhatsApp Image 2025-10-05 at 10.27.03 AM.jpeg',
      'image/Kamar/Krisna Beach 2/Deluxe Single/WhatsApp Image 2025-10-05 at 10.27.03 AM (1).jpeg'
    ]
  },
  {
    id: 4, name: 'Deluxe Twin',
    img: 'image/Kamar/Krisna Beach 2/Deluxe Twin/WhatsApp Image 2025-10-05 at 10.27.04 AM.jpeg',
    count: 8, size: '36 m²', price: 'Rp 1.500.000 / malam',
    facilities: ['AC', 'Twin bed', 'TV', 'Kamar mandi', 'Wi-Fi', 'Minibar', 'Sarapan pagi'],
    gallery: [
      'image/Kamar/Krisna Beach 2/Deluxe Twin/WhatsApp Image 2025-10-05 at 10.27.04 AM.jpeg',
      'image/Kamar/Krisna Beach 2/Deluxe Twin/WhatsApp Image 2025-10-05 at 10.27.05 AM.jpeg',
      'image/Kamar/Krisna Beach 2/Deluxe Twin/WhatsApp Image 2025-10-05 at 10.27.05 AM (1).jpeg',
      'image/Kamar/Krisna Beach 2/Deluxe Twin/WhatsApp Image 2025-10-05 at 10.27.06 AM.jpeg'
    ]
  },
  {
    id: 5, name: 'Executive Room',
    img: 'image/Kamar/Krisna Beach 2/Executive/8.png',
    count: 4, size: '42 m²', price: 'Rp 2.000.000 / malam',
    facilities: ['AC', 'TV', 'Ruang duduk', 'Kamar mandi', 'Wi-Fi', 'Minibar', 'Sarapan pagi'],
    gallery: ['image/Kamar/Krisna Beach 2/Executive/8.png']
  }
];
const ROOMS_BY_BRANCH = { branch1: ROOMS_BRANCH1, branch2: ROOMS_BRANCH2 };
let currentRoomsBranch = 'branch1';
let ROOMS = ROOMS_BY_BRANCH[currentRoomsBranch];

const ABOUT_CONTENT_BASE = {
  badgeTitle: 'Berdiri Sejak 1998',
  badgeSub: '25+ Tahun Keunggulan Hospitality',
  floatTitle: '#1 Resort',
  floatSub: 'Indonesia',
  storyTitle: 'Krisna Beach Hotel',
  paragraphs: [
    '<strong>Krisna Beach Hotel 1</strong> adalah akomodasi bintang tiga yang terletak di lokasi strategis Jalan Pantai Barat No.21 RT 04/ RW 05 Pangandaran, tepat di kawasan wisata pantai selatan Jawa Barat. Hotel ini dikenal dengan desain arsitektur uniknya yang menyerupai kapal pesiar, menjadikannya ikon tersendiri di kawasan wisata Pangandaran. ',
    'Resto Kapal Pesiar yang berada di rooftop Krisna Beach Hotel 2 menyajikan beragam menu pilihan seperti Nasi Timbel Sunda, Ikan Pindang Gunung serta makanan khas Pangandaran lainnya',
    'Dengan akses langsung menuju keindahan Pantai Pangandaran, hotel ini menjadi pilihan tepat bagi wisatawan keluarga, pasangan, maupun peloncong bisnis yang menikmati suasana pantai tanpa harus bersusah payah mencari akomodasi jauh dari bibir pantai.'
  ],
  stats: [['25+','Tahun Pengalaman'],['50+','Staf Profesional'],['10+','Penghargaan & Sertifikasi'],['95%','Kepuasan Tamu']],
  slides: [
    'image/Tentang/Krisna1/foto1.png',
    'image/Tentang/Krisna1/foto2.png',
    'image/Tentang/Krisna1/foto4.png',
    'image/Tentang/Krisna1/foto3.png'
  ],
  achievements: [
    { photo: 'image/Galeri/Resto/foto11.webp', title: 'Kuliner Lokal', desc: 'Layanan rasa Nusantara' },
    { photo: 'image/Galeri/Pool/5.webp', title: 'Santai Tropis', desc: 'Kolam renang & pantai' },
    { photo: 'image/Galeri/Front Office/foto6.webp', title: 'Pelayanan Hangat', desc: 'Sambutan ramah sepanjang hari' },
    { photo: 'image/Galeri/view/foto13.webp', title: 'Pemandangan Laut', desc: 'Pengalaman menginap pesisir' }
  ]
};
const ABOUT_BY_BRANCH = {
  branch1: JSON.parse(JSON.stringify(ABOUT_CONTENT_BASE)),
  branch2: JSON.parse(JSON.stringify(ABOUT_CONTENT_BASE))
};
// Ganti judul dan paragraf di sini untuk mengedit teks Tentang Krisna Beach 2.
ABOUT_BY_BRANCH.branch2.storyTitle = 'Tentang Krisna Beach 2';
ABOUT_BY_BRANCH.branch2.paragraphs = [
    '<strong>Krisna Beach Hotel 2</strong> adalah akomodasi resort melati 3 yang terletak di Jalan Pramuka No.13-15 RT 04/ RW 04 Desa Pananjung, Pangandaran. Kedua hotel ini terhubung dengan jembatan di lantai 3, sehingga memudahkan akses tamu menuju Krisna Beach Hotel 1 maupun Resto Kapal, begitupun sebaliknya. Harga yang lebih terjangkau, memiliki 100 kamar dengan berbagai  type, yaitu : 23 kamar Standard Ekomoni, 20 kamar Standard Twin, 26 kamar kamar Superior Twin, 21 kamar Deluxe Twin, 8 kamar Deluxe Single dan 2 kamar Executive.',
    'Krisna Beach Hotel 2 memiliki keunggulan utama pada lokasinya yang sangat strategis, tepat di jantung kota Pangandaran, sehingga memudahkan tamu untuk mengakses berbagai destinasi wisata, pusat perbelanjaan, dan fasilitas umum lainnya.',
    'Terdapat berbagai macam fasilitas seperti kolam renang, ruang pertemuan, area parkir yang cukup luas, akses mudah ke pantai, akses internet (free-wifi). Dengan harga yang terjangkau, hotel ini sangat ideal untuk akomodasi liburan keluarga dan rombongan tanpa mengkhawatirkan jarakn menuju pantai. Liburan ke Pangandaran menjadi lebih berkesan.'
];
ABOUT_BY_BRANCH.branch2.slides = [
  'image/Tentang/Krisna2/foto1.jpeg',
  'image/Tentang/Krisna2/foto2.jpeg',
  'image/Tentang/Krisna2/foto4.jpeg',
  'image/Tentang/Krisna2/foto3.jpeg'
];
let currentAboutBranch = 'branch1';

/* Sub-galeri per kategori (submenu navbar). */
const GALLERY_CATEGORIES = {
  restoran: { label: 'Restoran', type: 'grid', images: [
    'image/Galeri/Resto/foto11.webp','image/Galeri/Resto/restokapal2.jpeg',
    'image/Galeri/Resto/IMG_9710.JPG','image/Galeri/Resto/IMG_9713.JPG',
    'image/Galeri/Resto/IMG_9715.JPG','image/Galeri/Resto/IMG_9716.JPG'
  ]},
  'kedai-kayu-manis': { label: 'Kedai Kayu Manis', type: 'grid', images: [
    'image/Galeri/Kedai Kayu Manis/foto7.webp',
    'image/Galeri/Kedai Kayu Manis/vlcsnap-error063.png',
    'image/Galeri/Kedai Kayu Manis/vlcsnap-error335.png'
  ]},
  'swimming-pool': { label: 'Swimming Pool', type: 'pool', images: [
    'image/Galeri/Pool/1.jpg','image/Galeri/Pool/2.jpg','image/Galeri/Pool/3.jpg','image/Galeri/Pool/4.jpg',
    'image/Galeri/Pool/5.webp'
  ]},
  'front-office': { label: 'Front Office', type: 'grid', images: [
    'image/Galeri/Front Office/foto6.webp','image/Galeri/Front Office/lobby1.jpeg',
    'image/Galeri/Front Office/lobby3.jpeg','image/Galeri/Front Office/loby2.jpeg'
  ]},
  view: { label: 'View', type: 'grid', images: [
    'image/Galeri/view/barkapal1.jpeg','image/Galeri/view/deck1.jpeg',
    'image/Galeri/view/deck2.jpeg','image/Galeri/view/foto12.webp',
    'image/Galeri/view/foto13.webp','image/Galeri/view/foto4.webp',
    'image/Galeri/view/foto5.webp','image/Galeri/view/outdeck1.jpeg',
    'image/Galeri/view/OutdoorDeck1Kapal.jpeg','image/Galeri/view/restokapal.jpeg'
  ]},
  aula: { label: 'Aula', type: 'aula', images: [
    'image/Galeri/Aula/0.jpeg','image/Galeri/Aula/1.jpeg','image/Galeri/Aula/3.jpeg','image/Galeri/Aula/2.jpeg',
    'image/Galeri/Aula/4.jpeg','image/Galeri/Aula/5.jpeg','image/Galeri/Aula/6.jpeg','image/Galeri/Aula/4.jpeg',
    'image/Galeri/Aula/7.jpeg','image/Galeri/Aula/8.jpeg','image/Galeri/Aula/9.jpeg','image/Galeri/Aula/7.jpeg',
    'image/Galeri/Aula/10.jpeg','image/Galeri/Aula/11.jpeg','image/Galeri/Aula/12.jpeg','image/Galeri/Aula/10.jpeg'
  ]}
};
let currentGalleryCategory = null; // null = tampilan galeri utama (pemilih kategori)

/* img left empty on purpose: a neutral placeholder avatar renders instead,
   so foto asli tinggal ditambahkan ke field img masing-masing anggota tim. */
const TEAM = [
  { name: 'Tim Manajemen', title: 'Direktur Utama',       img: '' },
  { name: 'Tim Operasional', title: 'Direktur Operasional', img: '' },
  { name: 'Tim Layanan Tamu', title: 'General Manager',      img: '' },
  { name: 'Tim Sumber Daya Manusia', title: 'HR Manager',           img: '' }
];

const NEWS = [
  { date: '12 Juni 2026', title: 'Menikmati Senja Terbaik di Tepi Pantai',
    excerpt: 'Temukan pengalaman sore yang tenang dengan panorama laut dan suasana hangat di Krisna Beach Hotel.',
    img: 'image/Beranda/bg1.jpg' },
  { date: '05 Juni 2026', title: 'Rasa Lokal di Kedai Kayu Manis',
    excerpt: 'Kopi, kudapan, dan cerita baru menanti Anda di ruang santai favorit para tamu kami.',
    img: 'image/Galeri/Kedai Kayu Manis/foto7.webp' },
  { date: '28 Mei 2026', title: 'Liburan Nyaman untuk Keluarga',
    excerpt: 'Siapkan momen menginap yang lebih berkesan dengan fasilitas dan layanan terbaik untuk keluarga.',
    img: 'image/Galeri/Pool/5.webp' },
  { date: '20 Mei 2026', title: 'Pagi Tenang di Kolam Renang',
    excerpt: 'Awali hari dengan berenang santai sambil menikmati udara segar dan pemandangan laut.',
    img: 'image/Galeri/Pool/5.webp' },
  { date: '14 Mei 2026', title: 'Hangatnya Sambutan Front Office',
    excerpt: 'Pelayanan ramah dan suasana nyaman menyambut setiap perjalanan menginap Anda.',
    img: 'image/Galeri/Front Office/foto6.webp' },
  { date: '07 Mei 2026', title: 'Makan Malam dengan Pemandangan Laut',
    excerpt: 'Nikmati hidangan pilihan dalam suasana makan malam yang hangat dan berkesan.',
    img: 'image/Galeri/Resto/foto11.webp' },
  { date: '30 April 2026', title: 'Sudut Favorit untuk Bersantai',
    excerpt: 'Temukan ruang favorit untuk membaca, berbincang, atau menikmati waktu tanpa terburu-buru.',
    img: 'image/Tentang/foto2.png' },
  { date: '22 April 2026', title: 'Panorama Resort dari Ketinggian',
    excerpt: 'Lihat pesona Krisna Beach Hotel dari sudut pandang yang lebih luas dan menawan.',
    img: 'image/Tentang/foto4.png' },
  { date: '15 April 2026', title: 'Akhir Pekan Penuh Ketenangan',
    excerpt: 'Jadikan akhir pekan sebagai waktu terbaik untuk beristirahat dan kembali menyegarkan diri.',
    img: 'image/Beranda/bg1.jpg' },
  { date: '08 April 2026', title: 'Ruang Nyaman untuk Momen Spesial',
    excerpt: 'Aula hotel siap menjadi tempat untuk pertemuan, perayaan, dan acara istimewa Anda.',
    img: 'image/Tentang/foto1.png' },
  { date: '01 April 2026', title: 'Cita Rasa dan Cerita Lokal',
    excerpt: 'Kenali kekayaan rasa lokal melalui sajian yang diracik dengan perhatian dan kehangatan.',
    img: 'image/Galeri/Resto/foto11.webp' },
  { date: '25 Maret 2026', title: 'Menemukan Kedamaian di Tepi Laut',
    excerpt: 'Biarkan suara ombak menemani waktu istirahat dan menghadirkan ketenangan baru.',
    img: 'image/Tentang/foto3.png' },
  { date: '18 Maret 2026', title: 'Pengalaman Menginap yang Berkesan',
    excerpt: 'Setiap detail layanan dirancang untuk membuat perjalanan Anda terasa lebih istimewa.',
    img: 'image/Kamar/Krisna Beach 1/Superior/0.jpeg' },
  { date: '11 Maret 2026', title: 'Menikmati Waktu Bersama Orang Tersayang',
    excerpt: 'Ciptakan kenangan baru bersama keluarga dan orang-orang terdekat di resort kami.',
    img: 'image/Kamar/Krisna Beach 1/Deluxe/0.jpeg' },
  { date: '04 Maret 2026', title: 'Kabar Baik dari Krisna Beach Hotel',
    excerpt: 'Ikuti berbagai kabar terbaru, cerita tamu, dan aktivitas menarik dari hotel kami.',
    img: 'image/Galeri/Front Office/foto6.webp' },
];

const PLACEHOLDER_AVATAR = `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>`;


/* ── Modern line icons ─────────────────────────── */
const ICON = {
  wave: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 5-2.5 7.5 0"/><path d="M3 17c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 5-2.5 7.5 0"/></svg>`,
  pool: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17c2.2 0 2.2-2 4.5-2S9.8 17 12 17s2.2-2 4.5-2 2.3 2 4.5 2"/><path d="M5 12h14M7 8h10"/></svg>`,
  sunset: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18M6 14a6 6 0 0 1 12 0M12 3v3M5.6 5.6l2.1 2.1M18.4 5.6l-2.1 2.1"/></svg>`,
  palm: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21V10M12 10C9 7 6 7 4 8c2.7 2.2 5.2 2.7 8 2M12 10c2.7-3 5.5-3.4 8-2-1.8 2.2-4.5 3.1-8 2M12 10c0-3-1.2-5-3-6 0 3 1 5 3 6"/></svg>`,
  aerial: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17l7-7 4 4 7-7M5 21h14M4 4h5M4 7h3"/></svg>`,
  lounge: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 16h14M6 16v3M18 16v3M7 16V9h10v7M7 12H4v4M17 12h3v4"/></svg>`,
  location: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12A7 7 0 0 0 5 9c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.3"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3.5l3 1.2-1.5 4-2.1-.4c1 3.2 3.1 5.3 6.3 6.3l-.4-2.1 4-1.5 1.2 3c.4 1-.1 2.1-1.1 2.5-1.2.5-2.5.8-3.8.8C6.5 17.3 3.7 14.5 3.7 8.9c0-1.3.3-2.6.8-3.8.4-1 1.5-1.5 2.5-1.1Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.2 2.3 1.5 4.2 3.8 5.3.6.3 1.1.2 1.5-.3l.6-.8c.2-.3.2-.6-.1-.8l-1.5-.9c-.3-.2-.6-.1-.8.2l-.4.5c-1-.5-1.7-1.2-2.2-2.2l.5-.4c.3-.2.4-.5.2-.8l-.9-1.5c-.2-.3-.5-.3-.8-.1l-.8.6c-.5.4-.6.9-.3 1.5Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r="1"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.2a4 4 0 1 1-3-3.9"/><path d="M14 4c.7 2.5 2.2 4 5 4"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a18 18 0 0 0-2.5-.2c-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.6v8"/></svg>`,
  plane: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 18-8-6.5 18-3.3-7.2L3 11Z"/><path d="m11.2 13.8 3.6-3.6"/></svg>`,
  hotel: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5h16v16M4 10h16M8 7h2M14 7h2M8 14h2M14 14h2M8 18h8"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>`,
  ticket: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4V6Z"/><path d="M12 7v10"/></svg>`,
  home: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-7 9 7v9H3v-9Z"/><path d="M9 20v-5h6v5"/></svg>`,
  star: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>`,
  award: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4.5"/><path d="m9 12-1 8 4-2 4 2-1-8"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4C11 4 5 7 5 13c0 4 3 7 7 7 6 0 8-6 8-16Z"/><path d="M4 21c3-5 6-8 12-11"/></svg>`,
  diamond: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 6-8 12L4 9l8-6Z"/><path d="m4 9h16M8 9l4 12 4-12-4-6"/></svg>`,
  info: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/></svg>`
};

function modernIcon(name, cls = '') {
  return `<span class="modern-icon ${cls}">${ICON[name] || ICON.info}</span>`;
}

/* ── SVG Helpers ───────────────────────────────── */
const SVG = {
  shell: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M32 8 C20 8 12 18 12 30 C12 45 22 56 32 56 C42 56 52 45 52 30 C52 18 44 8 32 8Z" opacity=".4"/>
    <path d="M32 14 C24 20 20 28 22 38 C24 46 28 52 32 52" opacity=".6"/>
    <path d="M32 14 C40 20 44 28 42 38 C40 46 36 52 32 52" opacity=".6"/>
    <line x1="32" y1="8" x2="32" y2="56" opacity=".3"/>
    <circle cx="32" cy="30" r="4" fill="currentColor" opacity=".3"/>
  </svg>`,
  anchor: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="32" cy="16" r="6" opacity=".5"/>
    <line x1="32" y1="22" x2="32" y2="52" opacity=".5"/>
    <path d="M16 32 C16 44 24 52 32 52 C40 52 48 44 48 32" opacity=".5"/>
    <line x1="16" y1="32" x2="48" y2="32" opacity=".5"/>
  </svg>`,
  star: `<svg viewBox="0 0 64 64" fill="currentColor" opacity=".3">
    <polygon points="32,4 36,26 56,22 42,36 50,56 32,44 14,56 22,36 8,22 28,26"/>
  </svg>`,
  wave: `<svg viewBox="0 0 200 40" preserveAspectRatio="none" style="opacity:.25;width:100%;">
    <path d="M0,20 C40,0 80,40 120,20 C160,0 180,30 200,20" fill="none" stroke="currentColor" stroke-width="2.5"/>
  </svg>`
};

/* ── Utilities ─────────────────────────────────── */
function el(tag, cls, html = '') {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}
function qs(sel, ctx = document) { return ctx.querySelector(sel); }

/* Sliding dot-track: shows a small fixed-width window (~3 dots) but the
   underlying track holds one dot per photo and animates into view, so the
   indicator visibly moves/slides instead of sitting static in the middle. */
function initDotsTrack(container, count, onSelect) {
  container.innerHTML = '<div class="car-dots-track"></div>';
  const track = container.querySelector('.car-dots-track');
  for (let i = 0; i < count; i++) {
    const dot = el('div','car-dot');
    dot.dataset.idx = i;
    dot.addEventListener('click', () => onSelect(i));
    track.appendChild(dot);
  }
  return track;
}
function updateDotsTrack(container, activeIdx) {
  const track = container.querySelector('.car-dots-track');
  if (!track) return;
  const dots = track.querySelectorAll('.car-dot');
  dots.forEach((d,i) => d.classList.toggle('active', i === activeIdx));
  const activeDot = dots[activeIdx];
  if (!activeDot) return;
  const offset = container.clientWidth/2 - (activeDot.offsetLeft + activeDot.offsetWidth/2);
  track.style.transform = `translateX(${offset}px)`;
}

/* Drag-to-scroll for horizontal photo/menu strips (mouse + touch via
   pointer events), used by the restaurant-style sub-galleries. */
function makeDragScroll(strip) {
  let dragging = false, startX = 0, startScroll = 0;
  strip.addEventListener('pointerdown', (e) => {
    dragging = true;
    strip.classList.add('dragging');
    startX = e.clientX;
    startScroll = strip.scrollLeft;
    strip.setPointerCapture(e.pointerId);
  });
  strip.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    strip.scrollLeft = startScroll - (e.clientX - startX);
  });
  const stop = () => { dragging = false; strip.classList.remove('dragging'); };
  strip.addEventListener('pointerup', stop);
  strip.addEventListener('pointercancel', stop);
  strip.addEventListener('pointerleave', stop);
}

let newsAutoScrollStop = null;

function initGalleryStripAutoScroll(strip, cardSelector, initialDirection) {
  if (!strip) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let timer = null;
  let stopped = false;
  let direction = initialDirection;
  const cards = () => [...strip.querySelectorAll(cardSelector)];
  const centerCard = (card, smooth = true) => {
    if (!card) return;
    const target = Math.max(0, card.offsetLeft - (strip.clientWidth - card.offsetWidth) / 2);
    strip.scrollTo({ left: target, behavior: smooth ? 'smooth' : 'auto' });
  };
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(moveNext, 3000);
  };
  const moveNext = () => {
    if (stopped) return;
    const items = cards();
    if (!items.length) return;
    const currentCenter = strip.scrollLeft + strip.clientWidth / 2;
    const current = items.reduce((best, card, index) => {
      const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - currentCenter);
      return distance < best.distance ? { index, distance } : best;
    }, { index: initialDirection > 0 ? 0 : items.length - 1, distance: Infinity }).index;

    if (current === items.length - 1) direction = -1;
    if (current === 0) direction = 1;
    centerCard(items[current + direction]);
    schedule();
  };
  const pauseForInteraction = () => {
    clearTimeout(timer);
    strip.scrollTo({ left: strip.scrollLeft, behavior: 'auto' });
    timer = setTimeout(moveNext, 4000);
  };
  ['pointerenter', 'pointermove', 'pointerdown', 'touchstart', 'touchmove', 'click']
    .forEach(eventName => strip.addEventListener(eventName, pauseForInteraction, { passive: true }));
  ['pointerup', 'pointercancel', 'touchend']
    .forEach(eventName => strip.addEventListener(eventName, pauseForInteraction, { passive: true }));

  requestAnimationFrame(() => {
    const items = cards();
    centerCard(initialDirection > 0 ? items[0] : items[items.length - 1], false);
    direction = initialDirection;
    schedule();
  });

  activeAutoScrollStops.push(() => {
    stopped = true;
    clearTimeout(timer);
  });
}

function initNewsAutoScroll(strip) {
  if (!strip) return;
  if (newsAutoScrollStop) newsAutoScrollStop();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let timer = null;
  let stopped = false;
  let direction = 1;
  const cards = () => [...strip.querySelectorAll('.news-card')];

  const centerCard = (card, smooth = true) => {
    if (!card) return;
    const target = Math.max(0, card.offsetLeft - (strip.clientWidth - card.offsetWidth) / 2);
    strip.scrollTo({ left: target, behavior: smooth ? 'smooth' : 'auto' });
    return target;
  };

  const moveNext = () => {
    if (stopped) return;
    const items = cards();
    if (!items.length) return;

    const currentCenter = strip.scrollLeft + strip.clientWidth / 2;
    let current = items.reduce((best, card, index) => {
      const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - currentCenter);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Infinity }).index;

    if (current === items.length - 1) direction = -1;
    if (current === 0) direction = 1;
    centerCard(items[current + direction]);
    schedule();
  };

  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(moveNext, 3000);
  };

  const pauseForInteraction = () => {
    clearTimeout(timer);
    // Stop any in-flight automatic smooth scroll before manual dragging.
    strip.scrollTo({ left: strip.scrollLeft, behavior: 'auto' });
    timer = setTimeout(moveNext, 4000);
  };
  ['pointerenter', 'pointermove', 'pointerdown', 'touchstart', 'touchmove', 'click']
    .forEach(eventName => strip.addEventListener(eventName, pauseForInteraction, { passive: true }));
  ['pointerup', 'pointercancel', 'touchend']
    .forEach(eventName => strip.addEventListener(eventName, pauseForInteraction, { passive: true }));

  requestAnimationFrame(() => {
    centerCard(cards()[0], false);
    direction = 1;
    schedule();
  });

  newsAutoScrollStop = () => {
    stopped = true;
    clearTimeout(timer);
  };
}

/* Content rebuilt after the initial page load (switching a branch/category)
   is already in view — reveal it immediately instead of waiting on the
   scroll IntersectionObserver, which only ever watched the very first
   elements and never sees freshly-rebuilt ones. Without this the section
   silently stays at opacity:0 (the scroll-reveal system's default state). */
function revealSection(sectionEl) {
  if (!sectionEl) return;
  sectionEl.querySelectorAll(
    '.section-label,.section-title,.section-intro,.about-grid,.achievements,.gallery-shell,.rooms-grid,.team-grid,.menu-gallery,.gallery-grid-box'
  ).forEach(n => n.classList.add('motion-visible'));
  sectionEl.querySelectorAll(
    '.ach-card,.room-grid-item,.team-card,.news-card,.stat-box,.menu-item-card,.menu-photo-item'
  ).forEach(n => { n.style.setProperty('--delay','0ms'); n.classList.add('stagger-visible'); });
}

/* Auto-scroll a horizontal strip after 3s of no interaction. News recycles
  the first existing card to the end so only one sequence stays in the DOM. */
let activeAutoScrollStops = [];
function stopAllAutoScroll() { activeAutoScrollStops.forEach(fn => fn()); activeAutoScrollStops = []; }
function initAutoScrollStrip(strip, direction) {
  let raf = null;
  let idleTimer = null;
  const SPEED = 0.55;

  function step() {
    const half = strip.scrollWidth / 2;
    if (direction === 'right') {
      strip.scrollLeft += SPEED;
      if (strip.scrollLeft >= half) strip.scrollLeft -= half;
    } else {
      strip.scrollLeft -= SPEED;
      if (strip.scrollLeft <= 0) strip.scrollLeft += half;
    }
    raf = requestAnimationFrame(step);
  }
  function start() { if (!raf) raf = requestAnimationFrame(step); }
  function stop()  { if (raf) { cancelAnimationFrame(raf); raf = null; } clearTimeout(idleTimer); }
  function resetIdle() {
    stop();
    idleTimer = setTimeout(start, 3000);
  }

  ['pointerdown','wheel','touchstart'].forEach(evt =>
    strip.addEventListener(evt, resetIdle, { passive: true }));
  resetIdle();
  activeAutoScrollStops.push(stop);
  return stop;
}

/* ── NAVBAR ────────────────────────────────────── */
const NAV_SECTIONS = [
  { id: 'hero',    label: 'Beranda' },
  { id: 'about',   label: 'Tentang', type: 'about',
    children: [ { key: 'branch1', label: 'Krisna Beach 1' }, { key: 'branch2', label: 'Krisna Beach 2' } ] },
  { id: 'gallery', label: 'Galeri', type: 'gallery',
    children: Object.keys(GALLERY_CATEGORIES).map(key => ({ key, label: GALLERY_CATEGORIES[key].label })) },
  { id: 'rooms',   label: 'Kamar', type: 'rooms',
    children: [ { key: 'branch1', label: 'Krisna Beach 1' }, { key: 'branch2', label: 'Krisna Beach 2' } ] },
  { id: 'news',    label: 'Berita' },
  { id: 'team',    label: 'Tim Kami' },
  { id: 'closing', label: 'Kontak' }
];

function navChildAction(type, key) {
  if (type === 'about')   return `showAboutBranch('${key}')`;
  if (type === 'rooms')   return `showRoomsBranch('${key}')`;
  if (type === 'gallery') return `showGalleryCategory('${key}')`;
  return '';
}

/* ── NEWS ──────────────────────────────────────── */
function buildNews() {
  const sec = qs('#news');
  sec.innerHTML = `
    <div class="container">
      <div class="news-heading">
        <div class="section-label">Berita</div>
        <h2 class="section-title">Aktivitas Terkini</h2>
        <p class="section-intro">Kabar, inspirasi, dan pengalaman terbaru dari hotel kami.</p>
      </div>
      <div class="news-grid">
        ${NEWS.map(item => `
          <article class="news-card">
            <div class="news-card-image">
              <img src="${item.img}" alt="${item.title}" loading="lazy">
            </div>
            <div class="news-card-body">
              <time>${item.date}</time>
              <h3>${item.title}</h3>
              <p>${item.excerpt}</p>
              <button class="news-read" type="button" onclick="showInfo('${item.title}', '${item.excerpt}')">Baca selengkapnya <span aria-hidden="true">→</span></button>
            </div>
          </article>`).join('')}
      </div>
    </div>`;
    const newsGrid = sec.querySelector('.news-grid');
    makeDragScroll(newsGrid);
    initNewsAutoScroll(newsGrid);
}

function buildNavbar() {
  const nav = qs('#navbar');

  const inner = el('div','nav-inner');
  inner.innerHTML = `
    <div style="max-width:1200px;margin:0 auto;padding:0 24px;width:100%;display:flex;align-items:center;justify-content:space-between;">
      <button class="nav-logo" onclick="goToSection('hero')">
        <div class="nav-logo-icon"><img src="logo.png" alt="Logo Krisna Beach Hotel" /></div>
        <div>
          <div class="nav-logo-name">Krisna Beach Hotel</div>
          <div class="nav-logo-sub">Beach Hotel</div>
        </div>
      </button>
      <div class="nav-links" id="navLinks">
        ${NAV_SECTIONS.map(s => s.children ? `
          <div class="nav-item has-children">
            <button class="nav-link" data-section="${s.id}" onclick="${s.type === 'gallery' ? 'goToGalleryHome()' : `goToSection('${s.id}')`}">${s.label} <span class="nav-caret">▾</span></button>
            <div class="nav-dropdown" data-dropdown-for="${s.id}">
              ${s.children.map(c => `<button class="nav-dropdown-item" data-key="${c.key}" onclick="${navChildAction(s.type, c.key)}">${c.label}</button>`).join('')}
            </div>
          </div>` : `<button class="nav-link" data-section="${s.id}" onclick="goToSection('${s.id}')">${s.label}</button>`
        ).join('')}
        <button class="nav-cta" onclick="goToSection('rooms')">Pesan Sekarang</button>
      </div>
      <button class="nav-hamburger" id="hamburger" type="button" aria-label="Buka menu navigasi" aria-expanded="false" onclick="toggleMenu()">
        <span></span><span></span><span></span>
      </button>
    </div>`;
  nav.appendChild(inner);

  const mobileMenu = el('div','nav-mobile', NAV_SECTIONS.map(s => s.children ? `
    <div class="nav-mobile-item has-children">
      <div class="nav-mobile-row">
        <button class="nav-link" data-section="${s.id}" onclick="${s.type === 'gallery' ? 'goToGalleryHome()' : `goToSection('${s.id}')`};closeMenu()">${s.label}</button>
        <button class="nav-mobile-toggle" type="button" aria-label="Buka submenu ${s.label}" onclick="this.closest('.nav-mobile-item').classList.toggle('open')">▾</button>
      </div>
      <div class="nav-mobile-sub">
        ${s.children.map(c => `<button class="nav-link" data-key="${c.key}" onclick="${navChildAction(s.type, c.key)};closeMenu()">${c.label}</button>`).join('')}
      </div>
    </div>` : `<button class="nav-link" data-section="${s.id}" onclick="goToSection('${s.id}');closeMenu()">${s.label}</button>`
  ).join(''));
  mobileMenu.id = 'mobileMenu';
  nav.appendChild(mobileMenu);

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    const links = document.querySelectorAll('.nav-link[data-section]');
    let active = 'hero';
    NAV_SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el && window.scrollY >= el.offsetTop - 130) active = s.id;
    });
    links.forEach(l => l.classList.toggle('active', l.dataset.section === active));
  }, { passive: true });

  window.dispatchEvent(new Event('scroll'));
  updateNavDropdownState();
}

/* Highlights which submenu item is currently showing (branch/category). */
function updateNavDropdownState() {
  const setActive = (forId, activeKey) => {
    document.querySelectorAll(`.nav-dropdown[data-dropdown-for="${forId}"] .nav-dropdown-item`).forEach(btn => {
      btn.classList.toggle('active', btn.dataset.key === activeKey);
    });
  };
  setActive('about', currentAboutBranch);
  setActive('rooms', currentRoomsBranch);
  setActive('gallery', currentGalleryCategory);
}

window.goToSection = function(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const navbar = document.getElementById('navbar');
  const offset = navbar ? navbar.offsetHeight + 8 : 8;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth'
  });

  closeMenu();
};

window.openMenu = function() {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobileMenu');
  if (!h || !m) return;

  h.classList.add('open');
  m.classList.add('open');
  h.setAttribute('aria-expanded', 'true');
};

window.closeMenu = function() {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobileMenu');
  if (!h || !m) return;

  h.classList.remove('open');
  m.classList.remove('open');
  h.setAttribute('aria-expanded', 'false');
};

window.toggleMenu = function() {
  const m = document.getElementById('mobileMenu');
  if (!m) return;

  if (m.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
};

/* ── HERO ──────────────────────────────────────── */
function buildHero() {
  const sec = qs('#hero');
  const heroStats = [['160','Kamar Terbaik'],['3','Bintang Hotel'],['120m','to Pangandaran Beach']]
    .map(([n,l]) => `<div class="stat-card"><div class="stat-num">${n}</div><div class="stat-lbl">${l}</div></div>`)
    .join('');
  sec.innerHTML = `
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="bubbles" id="heroBubbles"></div>
    <div class="hero-ornaments">
      <div class="orn float orn-modern" style="top:28%;right:5%;width:72px;animation-delay:0s;">${SVG.shell}</div>
      <div class="orn float orn-modern" style="bottom:30%;right:14%;width:56px;animation-delay:1.5s;">${modernIcon("star")}</div>
      <div class="orn float orn-modern" style="top:55%;left:3%;width:60px;animation-delay:2.5s;">${SVG.anchor}</div>
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">${modernIcon("wave")} Pesisir Pantai Tropis Terbaik Pangandaran</div>
        <h1 class="hero-title"><span class="shimmer-text">Krisna<br>Beach Hotel</span></h1>
        <p class="hero-subtitle">"Di mana angin laut berbisik selamat datang, dan setiap ombak membawa kedamaian yang abadi"</p>
        <p class="hero-desc">Rasakan pengalaman luar biasa di hotel kami yang terletak langsung di tepi Samudra Hindia. Dengan ... suite eksklusif, dan pemandangan, setiap momen menjadi kenangan tak terlupakan.</p>
        <div class="hero-buttons">
          <button class="btn-primary" onclick="goToSection('rooms')">Reservasi Kamar</button>
          <button class="btn-ghost" onclick="goToSection('about')">Jelajahi  →</button>
        </div>
        <div class="hero-address">
          ${modernIcon("location")}
          <div>
            <strong>Alamat Resort</strong>
            <a href="https://maps.app.goo.gl/fwfNxWzGevhNWt9w7">8M45+X5P, Pananjung, Kec. Pangandaran, Kab. Pangandaran, Jawa Barat 46396</a>
          </div>
        </div>
        <div class="hero-stats hero-stats-mobile">${heroStats}</div>
      </div>
      <div class="hero-stats hero-stats-desktop">${heroStats}</div>
    </div>`;

  const bc = document.getElementById('heroBubbles');
  for (let i = 0; i < 10; i++) {
    const b = document.createElement('div');
    b.className = 'bubble';
    const size = 20 + i * 14;
    Object.assign(b.style, {
      width: size+'px', height: size+'px',
      left: (8 + i * 9) + '%',
      bottom: (8 + (i%4)*16) + '%',
      animationDelay: (i*0.35)+'s',
      animationDuration: (3.5+i*0.3)+'s'
    });
    bc.appendChild(b);
  }
}

/* ── ABOUT ─────────────────────────────────────── */
function buildAbout(branch) {
  if (branch) currentAboutBranch = branch;
  const c = ABOUT_BY_BRANCH[currentAboutBranch];
  const branchLabel = currentAboutBranch === 'branch2' ? 'Krisna Beach 2' : 'Krisna Beach 1';
  const sec = qs('#about');
  sec.innerHTML = `
    <div class="container">
      <div style="text-align:center;margin-bottom:64px;">
        <div class="section-label">Tentang Kami — ${branchLabel}</div>
        <h2 class="section-title">Surga di Tepian Laut</h2>
      </div>
      <div class="about-grid">
        <div class="about-img-wrap" id="aboutSlideshow">
          ${c.slides.map((src,i)=>`<img src="${src}" alt="Krisna Beach Hotel" class="about-slide ${i===0?'active':''}" data-lightbox loading="lazy">`).join('')}
          <div class="about-img-overlay"></div>
          <div class="about-img-badge">
            <div class="about-badge-icon">${modernIcon("wave")}</div>
            <div>
              <strong>${c.badgeTitle}</strong>
              <span>${c.badgeSub}</span>
            </div>
          </div>
          <div class="about-float-badge">
            <div class="emoji">${modernIcon("diamond")}</div>
            <strong style="font-size:.85rem;">${c.floatTitle}</strong>
            <small>${c.floatSub}</small>
          </div>
        </div>
        <div class="about-text">
          <h3>${c.storyTitle}</h3>
          ${c.paragraphs.map(p=>`<p>${p}</p>`).join('')}
          <div class="stats-grid">
            ${c.stats.map(([v,k])=>`
              <div class="stat-box"><div class="val">${v}</div><div class="key">${k}</div></div>`).join('')}
          </div>
        </div>
      </div>
      <div class="achievements">
        <h3>Penghargaan &amp; Pencapaian</h3>
        <div class="ach-grid count-${c.achievements.length}">
          ${c.achievements.map(a=>`
            <div class="ach-card">
              <div class="ach-card-photo">${a.photo ? `<img src="${a.photo}" alt="${a.title||'Piagam penghargaan'}" data-lightbox loading="lazy">` : `<span class="ach-card-photo-placeholder">${modernIcon("award")}</span>`}</div>
              <div class="ach-card-text">
                <strong>${a.title || 'Nama Penghargaan'}</strong>
                <small>${a.desc}</small>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;

  initAboutSlideshow();
}

window.showAboutBranch = function(branch) {
  buildAbout(branch);
  goToSection('about');
  updateNavDropdownState();
  revealSection(document.getElementById('about'));
};

/* Auto-rotating "video-like" slideshow with a slow Ken Burns zoom in/out effect */
function initAboutSlideshow() {
  const slides = document.querySelectorAll('#aboutSlideshow .about-slide');
  if (slides.length < 2) return;
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 4500);
}

/* ── GALLERY ───────────────────────────────────── */
let galleryIdx = 0;

function buildGallery(category) {
  stopAllAutoScroll(); // clean up any auto-scroll loop from a previously shown sub-gallery
  currentGalleryCategory = category || null;
  const sec = qs('#gallery');
  sec.classList.toggle('gallery-landing', !currentGalleryCategory);

  if (currentGalleryCategory) {
    const cat = GALLERY_CATEGORIES[currentGalleryCategory];

    if (cat.type === 'aula') {
      const aulaNames = ['Lambung Kapal', 'Pandawa', 'Mahabarata', 'Hastinapura'];
      const aulaGroups = aulaNames.map((name, groupIndex) => {
        const photos = Array.from({ length: 4 }, (_, photoIndex) =>
          cat.images[groupIndex * 4 + photoIndex] || cat.images[cat.images.length - 1]
        );
        return `
          <article class="aula-group">
            <h3 class="aula-group-title">${name}</h3>
            <div class="aula-photo-grid">
              ${photos.map(src => `<div class="aula-photo"><img src="${src}" alt="Aula ${name}" loading="lazy" data-lightbox></div>`).join('')}
            </div>
            <button class="aula-group-close" type="button" aria-label="Kembali ke semua aula">Kembali</button>
          </article>`;
      }).join('');

      sec.innerHTML = `
        <div class="container">
          <div class="gallery-section-heading">
            <div class="section-label">Galeri</div>
            <h2 class="section-title">Aula</h2>
          </div>
          <div class="aula-groups">${aulaGroups}</div>
        </div>`;
      sec.querySelectorAll('.aula-group-close').forEach(button => {
        button.addEventListener('click', event => {
          event.stopPropagation();
          button.closest('.aula-group').classList.remove('aula-group-focused');
        });
      });
      sec.querySelectorAll('.aula-photo').forEach(photo => {
        photo.addEventListener('click', event => {
          if (!window.matchMedia('(max-width: 768px)').matches) return;
          const group = photo.closest('.aula-group');
          if (group.classList.contains('aula-group-focused')) return;
          event.preventDefault();
          event.stopPropagation();
          group.classList.add('aula-group-focused');
        });
      });
      return;
    }

    if (cat.type === 'pool') {
      const poolNames = ['Swimming Pool Krisna Beach Hotel 1', 'Swimming Pool Krisna Beach Hotel 2'];
      const poolGroups = poolNames.map((name, groupIndex) => {
        const start = groupIndex === 0 ? 0 : 3;
        const photos = cat.images.slice(start, groupIndex === 0 ? 3 : cat.images.length);
        return `
          <article class="aula-group">
            <h3 class="aula-group-title">${name}</h3>
            <div class="aula-photo-grid">
              ${photos.map(src => `<div class="aula-photo"><img src="${src}" alt="${name}" loading="lazy" data-lightbox></div>`).join('')}
            </div>
            <button class="aula-group-close" type="button" aria-label="Kembali ke semua kolam">Kembali</button>
          </article>`;
      }).join('');

      sec.innerHTML = `
        <div class="container">
          <div class="gallery-section-heading">
            <div class="section-label">Galeri</div>
            <h2 class="section-title">Swimming Pool</h2>
          </div>
          <div class="pool-groups">${poolGroups}</div>
        </div>`;
      sec.querySelectorAll('.aula-group-close').forEach(button => {
        button.addEventListener('click', event => {
          event.stopPropagation();
          button.closest('.aula-group').classList.remove('aula-group-focused');
        });
      });
      sec.querySelectorAll('.aula-photo').forEach(photo => {
        photo.addEventListener('click', event => {
          if (!window.matchMedia('(max-width: 768px)').matches) return;
          const group = photo.closest('.aula-group');
          if (group.classList.contains('aula-group-focused')) return;
          event.preventDefault();
          event.stopPropagation();
          group.classList.add('aula-group-focused');
        });
      });
      return;
    }

    if (cat.type === 'menu') {
      sec.innerHTML = `
        <div class="container">
          <div style="text-align:center;margin-bottom:48px;">
            <div class="section-label">Galeri</div>
            <h2 class="section-title">${cat.label}</h2>
          </div>
        </div>
        <div class="menu-gallery">
          <div class="menu-strip-block">
            <h3 class="menu-strip-title">Suasana ${cat.label}</h3>
            <div class="menu-photos-strip" id="menuPhotosStrip">
              ${cat.photos.map(src=>`
                <div class="menu-photo-item"><img src="${src}" alt="${cat.label}" loading="lazy" data-lightbox></div>`).join('')}
            </div>
          </div>
          <div class="menu-strip-block">
            <h3 class="menu-strip-title">Menu ${cat.label}</h3>
            <div class="menu-items-strip" id="menuItemsStrip">
              ${cat.menu.map(m=>`
                <div class="menu-item-card">
                  <div class="menu-item-photo"><img src="${m.img}" alt="${m.name}" loading="lazy" data-lightbox></div>
                  <div class="menu-item-name">${m.name}</div>
                  <div class="menu-item-price">${m.price}</div>
                </div>`).join('')}
            </div>
          </div>
        </div>`;
      const photosStrip = document.getElementById('menuPhotosStrip');
      const itemsStrip  = document.getElementById('menuItemsStrip');
      makeDragScroll(photosStrip);
      makeDragScroll(itemsStrip);
      initGalleryStripAutoScroll(photosStrip, '.menu-photo-item', 1);
      initGalleryStripAutoScroll(itemsStrip, '.menu-item-card', -1);
      return;
    }

    // type === 'grid': one tall scrollable box of neatly arranged photos
    sec.innerHTML = `
      <div class="container">
        <div style="text-align:center;margin-bottom:48px;">
          <div class="section-label">Galeri</div>
          <h2 class="section-title">${cat.label}</h2>
        </div>
        <h3 class="menu-strip-title" style="text-align:center;margin-bottom:24px;">Koleksi Foto ${cat.label}</h3>
        <div class="gallery-grid-box">
          ${cat.images.map(src=>`
            <div class="room-grid-item"><img src="${src}" alt="${cat.label}" loading="lazy" data-lightbox></div>`).join('')}
        </div>
      </div>`;
    return;
  }

  sec.innerHTML = `
    <div class="container">
      <div class="gallery-heading" style="text-align:center;">
        <div class="section-label">Galeri</div>
        <h2 class="section-title">Jelajahi Setiap Sudut</h2>
      </div>
      <div class="gallery-grid">
        <div class="carousel-wrap">
          <div class="carousel-stage" id="carouselStage"></div>
          <div class="carousel-controls">
            <button class="car-btn" id="carPrev">←</button>
            <div class="car-dots" id="carDots"></div>
            <button class="car-btn" id="carNext">→</button>
          </div>
        </div>
        <div class="gallery-panel">
          <div class="panel-orn anchor" style="width:120px;">${SVG.anchor}</div>
          <div class="panel-orn star" style="width:96px;bottom:-24px;left:-12px;">${SVG.star}</div>
          <div class="photo-num" id="galNum">Kategori 1 dari ${GALLERY.length}</div>
          <h3 id="galTitle">${GALLERY[0].title}</h3>
          <p id="galCaption">${GALLERY[0].caption}</p>
          <button type="button" class="btn-primary gallery-enter-btn" id="galEnterBtn">Lihat Semua Foto →</button>
          <div class="shell-row" id="shellRow"></div>
        </div>
      </div>
    </div>`;

  const stage = document.getElementById('carouselStage');
  const dots  = document.getElementById('carDots');

  GALLERY.forEach((g, i) => {
    const item = el('div','carousel-item');
    item.innerHTML = `<img src="${g.img}" alt="${g.title}" loading="lazy">`;
    item.addEventListener('click', () => {
      // The centered photo is a button into its sub-gallery; any other
      // photo just brings itself into focus first.
      if (item.classList.contains('center')) showGalleryCategory(g.key);
      else goGallery(i);
    });
    item.dataset.idx = i;
    stage.appendChild(item);
  });

  // One dot per photo, sliding track (see initDotsTrack).
  initDotsTrack(dots, GALLERY.length, goGallery);

  const sr = document.getElementById('shellRow');
  GALLERY.forEach((_, i) => {
    const s = el('div','shell-ico');
    s.innerHTML = SVG.shell;
    s.style.width = '24px';
    s.dataset.idx = i;
    sr.appendChild(s);
  });

  document.getElementById('carPrev').addEventListener('click', () => goGallery(galleryIdx - 1));
  document.getElementById('carNext').addEventListener('click', () => goGallery(galleryIdx + 1));

  renderGallery();
}

function goGallery(idx) {
  galleryIdx = ((idx % GALLERY.length) + GALLERY.length) % GALLERY.length;
  renderGallery();
}

function renderGallery() {
  const items   = document.querySelectorAll('.carousel-item');
  const dotsEl  = document.getElementById('carDots');
  const shells  = document.querySelectorAll('.shell-ico');
  const n       = GALLERY.length;

  items.forEach((item, i) => {
    let offset = i - galleryIdx;
    if (offset >  2) offset -= n;
    if (offset < -2) offset += n;
    item.className = 'carousel-item';
    if      (offset ===  0) item.classList.add('center');
    else if (offset ===  1) item.classList.add('right1');
    else if (offset === -1) item.classList.add('left1');
    else if (offset ===  2) item.classList.add('right2');
    else if (offset === -2) item.classList.add('left2');
    else                    item.classList.add('hidden');
  });

  updateDotsTrack(dotsEl, galleryIdx);
  shells.forEach((s, i) => s.classList.toggle('on', i === galleryIdx));

  const caption = document.getElementById('galCaption');
  caption.classList.add('fading');
  setTimeout(() => {
    document.getElementById('galNum').textContent   = `Kategori ${galleryIdx+1} dari ${GALLERY.length}`;
    document.getElementById('galTitle').textContent = GALLERY[galleryIdx].title;
    caption.textContent = GALLERY[galleryIdx].caption;
    caption.classList.remove('fading');
    const enterBtn = document.getElementById('galEnterBtn');
    if (enterBtn) enterBtn.onclick = () => showGalleryCategory(GALLERY[galleryIdx].key);
  }, 320);
}

window.showGalleryCategory = function(category) {
  buildGallery(category);
  goToSection('gallery');
  updateNavDropdownState();
  revealSection(document.getElementById('gallery'));
};

/* Main "Galeri" nav label: if a sub-gallery is currently open, jump back
   to the category-picker landing first, then scroll to the section. */
window.goToGalleryHome = function() {
  if (currentGalleryCategory) {
    buildGallery(null);
    updateNavDropdownState();
    revealSection(document.getElementById('gallery'));
  }
  goToSection('gallery');
};

/* ── ROOMS ─────────────────────────────────────── */
let selectedRoom = null;

function buildRooms(branch) {
  if (branch) currentRoomsBranch = branch;
  ROOMS = ROOMS_BY_BRANCH[currentRoomsBranch];
  selectedRoom = null;
  const branchLabel = currentRoomsBranch === 'branch2' ? 'Krisna Beach 2' : 'Krisna Beach 1';

  const sec = qs('#rooms');
  sec.innerHTML = `
    <div class="container">
      <div style="text-align:center;margin-bottom:64px;">
        <div class="section-label">Akomodasi — ${branchLabel}</div>
        <h2 class="section-title">Kamar &amp; Suite</h2>
        <p class="section-intro rooms-intro">Klik pada foto kamar untuk melihat detail lengkap dan informasi harga</p>
      </div>
      <div class="rooms-grid">
        <div id="roomsLeft">
          <div class="rooms-info" id="roomsGeneralInfo">
            <h3>Kamar Pilihan Terbaik</h3>
            <p>Setiap kamar di Krisna Beach Hotel adalah karya seni tersendiri — dirancang dengan material premium pilihan, menghadirkan perpaduan sempurna antara kenyamanan modern dan nuansa tropis yang autentik.</p>
            <p>Dari Deluxe Ocean Suite yang memanjakan dengan bathtub panoramik menghadap laut, hingga Horizon Penthouse yang megah dengan kolam renang rooftop pribadi.</p>
            <div class="rooms-feat-grid">
              ${[['wave','Semua kamar berpemandangan laut'],['hotel','Sarapan bergaya continental'],
                 ['star','Akses spa & wellness center'],['plane','Tur perahu gratis setiap hari'],
                 ['globe','Wi-Fi ultra-cepat di seluruh area'],['home','Parkir valet complimentary']]
                .map(([e,t])=>`<div class="rooms-feat"><span class="rooms-feat-icon">${modernIcon(e)}</span>${t}</div>`).join('')}
            </div>
            <div class="rooms-tip">${modernIcon("info")} Pilih foto kamar di sebelah kanan untuk detail harga &amp; fasilitas</div>
          </div>
          <div class="room-detail" id="roomDetailPanel"></div>
        </div>
        <div id="roomsRight">
          <div class="rooms-photos count-${ROOMS.length}" id="roomsBubbles"></div>
          <div class="rooms-expanded" id="roomsExpanded"></div>
        </div>
      </div>
    </div>`;

  const bc = document.getElementById('roomsBubbles');
  ROOMS.forEach((room) => {
    const wrap = el('div','room-grid-item');
    wrap.innerHTML = `<img src="${room.img}" alt="${room.name}" loading="lazy"><div class="room-bubble-label">${room.name}</div>`;
    wrap.addEventListener('click', () => selectRoom(room.id));
    bc.appendChild(wrap);
  });

  syncRoomsPhotoHeight();
  bc.querySelectorAll('img').forEach(img => img.addEventListener('load', syncRoomsPhotoHeight, { once: true }));
}

function syncRoomsPhotoHeight() {
  const info = document.getElementById('roomsGeneralInfo');
  const photos = document.getElementById('roomsBubbles');
  if (!info || !photos) return;

  if (window.innerWidth > 1024 || photos.classList.contains('count-6')) {
    photos.style.height = `${info.offsetHeight}px`;
  } else {
    photos.style.height = '';
  }
}

window.showRoomsBranch = function(branch) {
  buildRooms(branch);
  goToSection('rooms');
  updateNavDropdownState();
  revealSection(document.getElementById('rooms'));
};

function selectRoom(id) {
  selectedRoom = id;
  const room = ROOMS[id];

  document.getElementById('roomsGeneralInfo').style.display = 'none';
  const detail = document.getElementById('roomDetailPanel');
  detail.classList.add('visible');
  detail.innerHTML = `
    <img class="room-detail-img" src="${room.img}" alt="${room.name}" data-lightbox>
    <div class="room-detail-body">
      <div class="room-detail-header">
        <h3>${room.name}</h3>
        <button class="room-close-btn" onclick="closeRoom()">✕ Tutup</button>
      </div>
      <div class="room-price">${room.price}</div>
      <div class="room-meta">
        <div class="room-meta-box"><div class="lbl">Jumlah Kamar</div><div class="val">${room.count} Unit</div></div>
        <div class="room-meta-box"><div class="lbl">Ukuran Kamar</div><div class="val">${room.size}</div></div>
      </div>
      <div class="room-facilities-lbl">Fasilitas Kamar</div>
      <div class="room-tags">${room.facilities.map(f=>`<span class="room-tag">${f}</span>`).join('')}</div>
      <button class="room-book-btn" type="button" onclick="bookRoom(${room.id})">Pesan Kamar Ini</button>
    </div>`;

  document.getElementById('roomsBubbles').style.display = 'none';
  renderRoomsExpanded(id);

  // On mobile, the "kamar lainnya" panel should sit above the detail/booking
  // panel — toggle a class the mobile media query keys off of.
  document.getElementById('rooms').querySelector('.rooms-grid').classList.add('room-selected');

  // Selecting a photo changes the section height, so recenter the new detail
  // panel after the browser has applied the updated layout and image sizes.
  setTimeout(() => {
    const rect = detail.getBoundingClientRect();
    const centeredTop = window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
    window.scrollTo({ top: Math.max(0, centeredTop), behavior: 'smooth' });
  }, 350);
}

function renderRoomsExpanded(id) {
  const room = ROOMS[id];
  const expanded = document.getElementById('roomsExpanded');
  expanded.classList.add('visible');

  expanded.innerHTML = `
    <div class="room-main-img-wrap">
      <img src="${room.img}" alt="${room.name}" data-lightbox>
      <div class="room-main-overlay"></div>
      <div class="room-main-caption">
        <strong>${room.name}</strong>
        <span>${room.price}</span>
      </div>
    </div>
    <div class="room-subphotos">
      ${room.gallery.map(src=>`
        <div class="room-subphoto"><img src="${src}" alt="Detail ${room.name}" loading="lazy" data-lightbox></div>`).join('')}
    </div>
    <div class="room-switch">
      <button type="button" class="car-btn" id="roomPrev" aria-label="Tipe kamar sebelumnya">←</button>
      <span class="room-switch-label">Tipe ${id + 1} dari ${ROOMS.length}</span>
      <button type="button" class="car-btn" id="roomNext" aria-label="Tipe kamar berikutnya">→</button>
    </div>`;

  document.getElementById('roomPrev').addEventListener('click', () => {
    selectRoom((id - 1 + ROOMS.length) % ROOMS.length);
  });
  document.getElementById('roomNext').addEventListener('click', () => {
    selectRoom((id + 1) % ROOMS.length);
  });
}

window.closeRoom = function() {
  selectedRoom = null;
  document.getElementById('roomsGeneralInfo').style.display = '';
  const detail = document.getElementById('roomDetailPanel');
  detail.classList.remove('visible');
  detail.innerHTML = '';
  document.getElementById('roomsBubbles').style.display = '';
  const expanded = document.getElementById('roomsExpanded');
  expanded.classList.remove('visible');
  expanded.innerHTML = '';
  document.getElementById('rooms').querySelector('.rooms-grid').classList.remove('room-selected');
};


/* ── BOOKING & MENU SAFETY ─────────────────────── */
window.bookRoom = function(id) {
  const room = ROOMS[id];
  if (!room) return;

  const phone = '6281234567890';
  const message =
    `Halo Krisna Beach Hotel, saya ingin memesan ${room.name} (${room.price}). ` +
    `Mohon informasi ketersediaan kamar.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer'
  );
};

document.addEventListener('click', (event) => {
  const nav = document.getElementById('navbar');
  const menu = document.getElementById('mobileMenu');

  if (!nav || !menu || !menu.classList.contains('open')) return;

  if (!nav.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
  syncRoomsPhotoHeight();
});

/* ── TEAM ──────────────────────────────────────── */
function buildTeam() {
  const sec = qs('#team');
  sec.innerHTML = `
    <div class="team-dot-bg"></div>
    <div class="container" style="position:relative;">
      <div style="text-align:center;margin-bottom:64px;">
        <div class="section-label">Tim Kami</div>
        <h2 class="section-title">Nakoda Resort Kami</h2>
        <p class="section-intro team-intro">Tim profesional kami adalah para kapten yang memastikan setiap tamu berlayar dalam pelayaran kemewahan terbaik</p>
      </div>
      <div class="team-grid count-${TEAM.length}">
        ${TEAM.map(m=>`
          <div class="team-card">
            <div class="team-card-header">
              <div class="team-card-header-orn" style="width:48px;">${SVG.anchor}</div>
            </div>
            <div class="team-avatar-wrap">
              <div class="team-avatar">${m.img ? `<img src="${m.img}" alt="${m.name}" loading="lazy" data-lightbox>` : `<span class="team-avatar-placeholder">${PLACEHOLDER_AVATAR}</span>`}</div>
            </div>
            <div class="team-card-body">
              <h3>${m.name}</h3>
              <div class="team-badge">${modernIcon("location")} ${m.title}</div>
              <div class="team-shells">${SVG.shell}${SVG.shell}${SVG.shell}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ── CLOSING ───────────────────────────────────── */
function buildClosing() {
  const sec = qs('#closing');
  sec.innerHTML = `
    <div class="closing-bg-img"></div>
    <div class="closing-ornaments">
      <div class="orn float orn-light" style="top:10%;left:5%;width:72px;opacity:.2;">${SVG.shell}</div>
      <div class="orn float orn-modern" style="top:15%;right:8%;width:80px;opacity:.18;animation-delay:1s;">${modernIcon("star")}</div>
      <div class="orn float orn-light" style="bottom:18%;left:8%;width:80px;opacity:.1;animation-delay:2s;">${SVG.anchor}</div>
    </div>
    <div class="container closing-content">
      <div class="closing-quote">
        <span class="big-emo">${modernIcon("wave")}</span>
        <h2>Setiap Ombak Membawa<br><span>Cerita Baru</span></h2>
        <blockquote>"Laut tidak menjanjikan ketenangan — ia menawarkan petualangan. Dan di Krisna Beach Hotel, setiap hari adalah pelayaran menuju kenangan yang tak terlupakan seumur hidup."</blockquote>
        <cite>— Tim Krisna Beach Hotel</cite>
      </div>
      <div class="closing-box">
        <span class="emo">${modernIcon("wave")}</span>
        <h3>Terima Kasih Telah Berkunjung</h3>
        <p>Kehadiran Anda adalah sinar matahari yang menerangi resort kami. Kami tidak hanya menawarkan tempat menginap — kami menghadirkan rumah kedua di tepi samudra, tempat jiwa beristirahat dan hati menemukan kedamaiannya.</p>
        <div class="closing-btns">
          <a href="https://wa.me/6281234567890" class="btn-primary" target="_blank" rel="noopener">Hubungi Kami</a>
          <button class="btn-back" onclick="goToSection('hero')">↑ Kembali ke Atas</button>
        </div>
      </div>
      <div class="closing-photos">
        ${['image/Galeri/view/foto13.webp',
           'image/Galeri/Pool/5.webp',
           'image/Galeri/view/foto12.webp']
          .map(u=>`<div class="closing-photo"><img src="${u}" alt="Resort view" loading="lazy" data-lightbox></div>`).join('')}
      </div>
    </div>`;
}

/* ── FOOTER ────────────────────────────────────── */
function buildFooter() {
  const ft = qs('footer');
  const NAV = [['hero','Beranda'],['about','Tentang'],['gallery','Galeri'],
               ['rooms','Kamar'],['news','Berita'],['team','Tim Kami'],['closing','Kontak']];
  const SOCIAL = [
    {e:'whatsapp', l:'WhatsApp',  v:'+62 812-3456-7890', href:'https://wa.me/6281234567890'},
    {e:'instagram',l:'Instagram', v:'@krisnabeachhotel', href:'https://instagram.com/krisnabeachhotel'},
    {e:'tiktok',   l:'TikTok',    v:'@krisnabeachhotel', href:'https://tiktok.com/@krisnabeachhotel'},
    {e:'facebook', l:'Facebook',  v:'Krisna Beach Hotel', href:'https://facebook.com/krisnabeachhotel'}
  ];
  const BOOKING = [
    {e:'plane', l:'Traveloka',   b:'Official Partner', href:'https://www.traveloka.com/'},
    {e:'hotel', l:'Agoda',       b:'Gold Partner',     href:'https://www.agoda.com/'},
    {e:'globe', l:'Booking.com', b:'Preferred',        href:'https://www.booking.com/'},
    {e:'ticket',l:'Tiket.com',   b:'Partner',          href:'https://www.tiket.com/'},
    {e:'home',  l:'Airbnb',      b:'Superhost',        href:'https://www.airbnb.com/'},
    {e:'star',  l:'Hotels.com',  b:'Member',           href:'https://www.hotels.com/'}
  ];

  ft.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <div class="footer-brand-icon">${modernIcon("wave")}</div>
            <div>
              <div class="footer-brand-name">Krisna Beach Hotel</div>
              <div class="footer-brand-sub">Beach Hotel</div>
            </div>
          </div>
          <p class="footer-brand-desc">Resort bintang 3 terbaik di pesisir Pangandaran. Sejak 1998 menghadirkan pengalaman menginap mewah dengan nuansa alam tropis yang autentik.</p>
          <div class="footer-address">
            <span class="emo">${modernIcon("location")}</span>
            <div>8M45+X5P, Pananjung<br>Kec. Pangandaran, Kab. Pangandaran<br>Jawa Barat 46396, Indonesia</div>
          </div>
        </div>
        <div class="footer-col">
          <h4>Menu Utama</h4>
          <div class="footer-links">
            ${NAV.map(([s,l])=>`<button class="footer-link" onclick="goToSection('${s}')">→ ${l}</button>`).join('')}
          </div>
        </div>
        <div class="footer-col">
          <h4>Media Sosial</h4>
          <div class="social-list">
            ${SOCIAL.map(s=>`
              <a href="${s.href}" class="social-item" target="_blank" rel="noopener">
                <div class="social-icon">${modernIcon(s.e)}</div>
                <div><div class="social-lbl">${s.l}</div><div class="social-val">${s.v}</div></div>
              </a>`).join('')}
          </div>
        </div>
        <div class="footer-col">
          <h4>Platform Reservasi</h4>
          <div class="booking-list">
            ${BOOKING.map(b=>`
              <a class="booking-item" href="${b.href}" target="_blank" rel="noopener">
                <div class="booking-left"><span>${modernIcon(b.e)}</span>${b.l}</div>
                <span class="booking-badge">${b.b}</span>
              </a>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="footer-contact-bar container">
      <div class="contact-bar-grid">
        ${[['phone','Telepon','+62 (370) 123-4567'],
           ['mail','Email','reservasi@krisnabeachhotel.id'],
           ['clock','Jam Operasional','24 Jam / 7 Hari']]
          .map(([e,l,v])=>`
            <div class="contact-item">
              <div class="contact-icon">${modernIcon(e)}</div>
              <div><div class="contact-lbl">${l}</div><div class="contact-val">${
                e === 'phone' ? `<a href="tel:+623701234567">${v}</a>` :
                e === 'mail' ? `<a href="mailto:reservasi@krisnabeachhotel.id">${v}</a>` : v
              }</div></div>
            </div>`).join('')}
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Krisna Beach Hotel &amp; Hotel. Hak Cipta Dilindungi Undang-Undang.</p>
      <div class="footer-legal">
        <button type="button" class="footer-link footer-legal-btn" onclick="showInfo('Kebijakan Privasi', 'Kebijakan privasi Krisna Beach Hotel akan tersedia pada halaman resmi berikutnya.')">Kebijakan Privasi</button>
        <button type="button" class="footer-link footer-legal-btn" onclick="showInfo('Syarat &amp; Ketentuan', 'Syarat dan ketentuan Krisna Beach Hotel akan tersedia pada halaman resmi berikutnya.')">Syarat &amp; Ketentuan</button>
        <button type="button" class="footer-link footer-legal-btn" onclick="showInfo('Sitemap', 'Sitemap website sedang disiapkan.')">Sitemap</button>
      </div>
      <div class="footer-made">Made with <span>❤️</span> in Pangandaran</div>
    </div>`;
}


/* ── INFO MODAL ────────────────────────────────── */
window.showInfo = function(title, message) {
  let modal = document.getElementById('siteInfoModal');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'siteInfoModal';
    modal.className = 'site-info-modal';
    modal.innerHTML = `
      <div class="site-info-backdrop" data-close-info></div>
      <div class="site-info-card" role="dialog" aria-modal="true" aria-labelledby="siteInfoTitle">
        <button type="button" class="site-info-close" aria-label="Tutup" data-close-info>✕</button>
        <div class="site-info-icon">${modernIcon("info")}</div>
        <h3 id="siteInfoTitle"></h3>
        <p id="siteInfoMessage"></p>
        <button type="button" class="btn-primary site-info-ok" data-close-info>Oke</button>
      </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener('click', (event) => {
      if (event.target.hasAttribute('data-close-info')) {
        modal.classList.remove('open');
      }
    });
  }

  document.getElementById('siteInfoTitle').textContent = title;
  document.getElementById('siteInfoMessage').textContent = message;
  modal.classList.add('open');
};

/* ── LIGHTBOX ──────────────────────────────────────
   Any image marked with [data-lightbox] opens full-size on click. Uses one
   delegated listener so it also works for content rendered later (rooms,
   gallery re-renders, etc).
*/
function initLightbox() {
  let modal = document.getElementById('photoLightbox');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'photoLightbox';
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-backdrop" data-close-lightbox></div>
      <button type="button" class="lightbox-close" aria-label="Tutup" data-close-lightbox>✕</button>
      <img class="lightbox-img" alt="">
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (event) => {
      if (event.target.hasAttribute('data-close-lightbox')) {
        modal.classList.remove('open');
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') modal.classList.remove('open');
    });
  }

  document.addEventListener('click', (event) => {
    const img = event.target.closest('[data-lightbox]');
    if (!img || img.tagName !== 'IMG') return;
    const lbImg = modal.querySelector('.lightbox-img');
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    modal.classList.add('open');
  });
}

/* ── INIT ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNavbar();
  buildHero();
  buildAbout();
  buildGallery();
  buildRooms();
  buildNews();
  buildTeam();
  buildClosing();
  buildFooter();
  initMotionSystem();
  initLightbox();

  const useImageFallback = () => {
    document.querySelectorAll('img').forEach((img) => {
      if (img.dataset.fallbackApplied) return;
      img.addEventListener('error', () => {
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = 'true';
        img.src = 'logo.png';
      }, { once: true });
    });
  };
  useImageFallback();
  new MutationObserver(useImageFallback).observe(document.body, { childList: true, subtree: true });
});

/* ── MOTION SYSTEM ───────────────────────────────
   Scroll reveals, staggered elements, cinematic hero entrance,
   subtle parallax and reading progress. Existing interactions remain untouched.
*/
function initMotionSystem() {
  document.documentElement.classList.add('motion-ready');

  // Reading progress bar
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.innerHTML = '<span class=\"scroll-progress-bar\"></span>';
  document.body.appendChild(progress);
  const progressBar = progress.firstElementChild;

  const updateScrollUI = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progressBar.style.transform = `scaleX(${ratio})`;
  };
  window.addEventListener('scroll', updateScrollUI, { passive:true });
  updateScrollUI();

  // Hero entrance + tiny cinematic parallax
  const hero = document.getElementById('hero');
  if (hero) {
    requestAnimationFrame(() => hero.classList.add('hero-intro'));
    const heroBg = hero.querySelector('.hero-bg');
    if (heroBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const parallax = () => {
        const y = Math.min(window.scrollY, window.innerHeight) * 0.10;
        heroBg.style.transform = `scale(1.035) translate3d(0, ${y}px, 0)`;
      };
      window.addEventListener('scroll', parallax, { passive:true });
    }
  }

  // Reveal scene-level content only when it actually approaches the viewport.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('motion-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold:0.14, rootMargin:'0px 0px -8% 0px' });

  const revealTargets = [
    ...document.querySelectorAll('#about .section-label, #about .section-title, #about .about-grid, #about .achievements'),
    ...document.querySelectorAll('#gallery .section-label, #gallery .section-title, #gallery .section-intro, #gallery .gallery-shell'),
    ...document.querySelectorAll('#rooms .section-label, #rooms .section-title, #rooms .section-intro, #rooms .rooms-grid'),
    ...document.querySelectorAll('#news .section-label, #news .section-title, #news .section-intro, #news .news-grid'),
    ...document.querySelectorAll('#team .section-label, #team .section-title, #team .section-intro, #team .team-grid'),
    ...document.querySelectorAll('#closing .closing-quote, #closing .closing-box, #closing .closing-photos')
  ];
  revealTargets.forEach((node, i) => {
    node.style.setProperty('--delay', `${Math.min(i * 45, 240)}ms`);
    observer.observe(node);
  });

  // Stagger cards inside each visual group.
  const groups = [
    ...document.querySelectorAll('.ach-grid, .stats-grid, .rooms-photos, .team-grid, .closing-photos')
  ];
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const cards = entry.target.querySelectorAll('.ach-card, .stat-box, .room-bubble, .team-card, .closing-photo');
      cards.forEach((card, index) => {
        card.style.setProperty('--delay', `${index * 90}ms`);
        card.classList.add('stagger-visible');
      });
      cardObserver.unobserve(entry.target);
    });
  }, { threshold:0.08, rootMargin:'0px 0px -5% 0px' });
  groups.forEach(group => cardObserver.observe(group));

  // Make major image blocks reveal naturally if they exist.
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('motion-image');
      imageObserver.unobserve(entry.target);
    });
  }, { threshold:0.15, rootMargin:'0px 0px -5% 0px' });
  document.querySelectorAll('.about-img-wrap, .gallery-panel, .room-main-img-wrap, .team-avatar-wrap').forEach(el => imageObserver.observe(el));

  // Respect users who navigate by keyboard: reveal focused content immediately.
  document.addEventListener('focusin', e => {
    const target = e.target.closest('.motion-ready .motion-visible, .motion-ready .stagger-visible');
    if (target) target.style.animationDelay = '0ms';
  });

  // Elegant first-load curtain, short enough not to feel like a splash screen.
  const curtain = document.createElement('div');
  curtain.className = 'page-curtain';
  document.body.appendChild(curtain);
  requestAnimationFrame(() => {
    setTimeout(() => curtain.classList.add('hide'), 420);
    setTimeout(() => curtain.remove(), 1250);
  });
}