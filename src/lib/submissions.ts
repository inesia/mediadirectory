export type SubmissionType = 'daftar' | 'klaim';
export type SubmissionStatus = 'draft' | 'pending' | 'approved' | 'rejected';

export interface SubmissionRecord {
  id: string;
  type: SubmissionType;
  status: SubmissionStatus;
  title: string;
  documents: string[];
  rejectionReason?: string;
  submittedAt: string;
  updatedAt: string;
  /** Display helpers */
  summary?: string;
}

export const submissionStatusLabels: Record<SubmissionStatus, string> = {
  draft: 'Draft',
  pending: 'Menunggu Verifikasi',
  approved: 'Disetujui',
  rejected: 'Ditolak',
};

/** Seed examples so /pengajuan looks alive before user submits */
export const seedSubmissions: SubmissionRecord[] = [
  {
    id: 'seed-draft-1',
    type: 'daftar',
    status: 'draft',
    title: 'Nusantara Daily',
    documents: [],
    submittedAt: '2026-07-14T08:00:00+07:00',
    updatedAt: '2026-07-14T08:00:00+07:00',
    summary: 'Pendaftaran media baru — belum dikirim',
  },
  {
    id: 'seed-pending-1',
    type: 'klaim',
    status: 'pending',
    title: 'Metro TV',
    documents: ['siup-metro.pdf', 'ktp-andi.pdf'],
    submittedAt: '2026-07-10T09:24:00+07:00',
    updatedAt: '2026-07-10T09:24:00+07:00',
    summary: 'Klaim kepemilikan — menunggu tinjauan admin',
  },
  {
    id: 'seed-approved-1',
    type: 'klaim',
    status: 'approved',
    title: 'Bocor Alus',
    documents: ['bukti-domain.pdf'],
    submittedAt: '2026-07-05T11:40:00+07:00',
    updatedAt: '2026-07-08T16:00:00+07:00',
    summary: 'Klaim disetujui — media terhubung ke akun',
  },
  {
    id: 'seed-rejected-1',
    type: 'daftar',
    status: 'rejected',
    title: 'Berita Kilat ID',
    documents: ['siup-scan.jpg'],
    rejectionReason:
      'Dokumen SIUP tidak terbaca jelas dan domain belum dapat diverifikasi kepemilikannya.',
    submittedAt: '2026-07-01T16:18:00+07:00',
    updatedAt: '2026-07-03T10:30:00+07:00',
    summary: 'Pendaftaran ditolak — perbaiki dokumen lalu ajukan ulang',
  },
];
