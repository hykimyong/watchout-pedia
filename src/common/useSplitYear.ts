import { useCallback } from 'react';

const useSplitYear = (): ((param: string) => string) => {
  const handleClick = useCallback((param: string) => {
    return param.split('-')[0] || '';
  }, []);

  return handleClick;
};

export default useSplitYear;