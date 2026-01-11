const getMappedColor = () => {
  const pathname =
    typeof window !== 'undefined' && window.location
      ? window.location.pathname
      : '';
  const pathColorMap: Record<string, string> = {
    '/': 'primary.main',
    '/poezia': 'primary.poetry',
    '/proza': 'primary.prose',
    '/veda': 'primary.science',
    '/deti': 'primary.main',
    '/vertigo': 'primary.main',
    '/autori': 'primary.main',
    '/onas': 'primary.main',
  };
  const mappedColor = pathColorMap[pathname];

  // Fallback to a default color when path is not defined
  return mappedColor ?? 'primary.main';
};

export default getMappedColor;
