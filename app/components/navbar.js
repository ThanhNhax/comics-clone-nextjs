import { FaHome } from 'react-icons/fa';
import { DAILY, MONTHLY, WEEKLY } from '../utils/constant';

export const navbar = [
  { href: '/', icon: <FaHome size={20} /> },
  { href: '#', label: 'hot' },
  { href: '#', label: 'lịch sử' },
  { href: '#', label: 'thể loại' },
  { href: '#', label: 'xếp hạng' },
  { href: '#', label: 'tìm truyện' },
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
  { href: '#', label: 'tìm truyện' },
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
