import { FaHome } from 'react-icons/fa';
import { DAILY, MONTHLY, WEEKLY } from '../utils/constant';

export const navbar = [
  { href: '/', icon: <FaHome size={20} /> },
  { href: '#', label: 'hot' },
  { href: '#', label: 'lịch sử' },
  { href: '#', label: 'thể loại' },
  { href: '#', label: 'xếp hạng' },
  { href: '/tim-truyen', label: 'tìm truyện' },
  { href: '#', label: 'con gái' },
  { href: '#', label: 'con trai' },
  { href: '#', label: 'truyện chữ hay' },
  { href: '#', label: 'fanpage' },
];
export const navbarMenuModal = [
  { href: '#', label: 'trang chủ' },
  { href: '#', label: 'hot' },
  { href: '#', label: 'lịch sử' },
  { href: '#', label: 'thể loại' },
  { href: '#', label: 'xếp hạng' },
  { href: '/tim-truyen', label: 'tìm truyện' },
  { href: '#', label: 'con gái' },
  { href: '#', label: 'con trai' },
  { href: '#', label: 'truyện chữ hay' },
  { href: '#', label: 'fanpage' },
];

export const navbarTop = [
  {
    label: 'Top Tháng',
    isActive: MONTHLY,
  },
  {
    label: 'Top Tuần',
    isActive: WEEKLY,
  },
  {
    label: 'Top Ngày',
    isActive: DAILY,
  },
];

export const navbarTuKhoa = [
  { label: 'Truyện tranh' },
  { label: 'Truyen tranh online' },
  { label: 'Đọc truyện tranh' },
  { label: 'Truyện tranh hot' },
  { label: 'Truyện tranh hay' },
  { label: 'Truyện ngôn tình' },
  { label: 'truyenqq' },
  { label: 'mi2manga' },
  { label: 'doctruyen3q' },
  { label: 'cmanga' },
  { label: 'vlogtruyen' },
  { label: 'blogtruyen' },
  { label: 'saytruyen' },
  { label: 'dichtruyen' },
  { label: 'truyentranhaudio' },
  { label: 'hamtruyen' },
  { label: 'truyensieuhay' },
  { label: 'vcomi' },
  { label: 'nettruyen' },
  { label: 'nettruyenco' },
];
