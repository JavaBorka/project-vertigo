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

  return mappedColor;
};

export default getMappedColor;
