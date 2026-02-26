export const getSafeTime = (date: string | undefined) => {
  const time = new Date(date ?? '').getTime();
  return Number.isNaN(time) ? 0 : time;
};
