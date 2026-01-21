import { useMemo } from 'react';

export const useRandomTransform = (index, maxRotation = 5, maxOffset = 10) => {
  const transform = useMemo(() => {
    // Use index as seed for consistent randomness
    const seed = index * 9301 + 49297;
    const random1 = (seed % 233280) / 233280;
    const random2 = ((seed * 2) % 233280) / 233280;
    
    const rotation = (random1 - 0.5) * maxRotation * 2;
    const offsetX = (random2 - 0.5) * maxOffset * 2;
    
    return {
      rotation,
      offsetX,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  }, [index, maxRotation, maxOffset]);

  return transform;
};
