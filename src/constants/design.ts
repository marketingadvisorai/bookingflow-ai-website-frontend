/**
 * Design tokens and constants.
 * These values must match EXACTLY with the design system.
 * DO NOT MODIFY without design approval.
 */

export const COLORS = {
  // Primary Brand Color
  primary: '#635BFF',
  primaryHover: '#7c72ff',
  primaryActive: '#4c46cc',

  // Backgrounds
  background: '#0a0a0f',
  card: '#131318',
  cardHover: '#1a1a1f',

  // Borders
  border: '#27272a',
  borderHover: '#635BFF',

  // Text
  textPrimary: '#f5f5f7',
  textSecondary: '#A1A1AA',
  textMuted: '#71717A',

  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
} as const;

export const SPACING = {
  section: 'py-20',
  container: 'px-4 md:px-8 max-w-7xl mx-auto',
  card: 'p-6',
  grid: 'gap-8',
  button: 'px-6 py-3',
} as const;

export const RADIUS = {
  card: 'rounded-xl',
  button: 'rounded-lg',
  input: 'rounded-lg',
  badge: 'rounded-full',
  modal: 'rounded-2xl',
} as const;

export const SHADOWS = {
  card: 'shadow-xl',
  cardHover: 'shadow-2xl',
  dropdown: 'shadow-2xl',
} as const;
