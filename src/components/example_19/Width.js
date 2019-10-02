import React, { useCallback } from 'react';

import useWindowWidth from './useWindowWidth';

function Width() {
  const windowWidth = useWindowWidth();
  return windowWidth;
}

export default Width;
