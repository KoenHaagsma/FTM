import React from 'react';
import * as d3 from 'd3';

export const useD3 = (renderChartFn, dependencies) => {
    const ref = React.useRef();

    React.useEffect(() => {
        // eslint-disable-next-line
        renderChartFn(d3.select(ref.current));

        return () => {};
        // eslint-disable-next-line
    }, dependencies);

    return ref;
};

export default useD3;
