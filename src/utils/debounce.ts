/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (cb: (args: any) => any, wait: number) => {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      cb(args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
