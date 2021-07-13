import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { select } from 'd3';

export const BasicLine = ({ data }) =>
{
    const containerRef = useRef(null);

    useEffect(() => 
    {

    }, []);

    useLayoutEffect(() => 
    {
        const update = select('g').selectAll('circle').data(data);

    }, []);

    return (
        <svg width="100%" height="350" ref={containerRef}>
        <g transform="translate(0, 100)" />
        </svg>
    );
}
