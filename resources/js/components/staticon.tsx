import {useEffect, useRef, useState} from "react";

export default function Staticon({icon, size = 24}) {
    const ref = useRef(null);
    const [viewBox, setViewBox] = useState("0 0 24 24");

    useEffect(() => {
        if (ref.current) {
            try {
                const bbox = ref.current.getBBox();
                setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
            } catch (e) {
                console.warn("Could not compute bounding box:", e);
            }
        }
    }, [icon]);

    return (
        <svg
            ref={ref}
            width={size}
            height={size}
            viewBox={viewBox}
            preserveAspectRatio="xMidYMid meet"
            dangerouslySetInnerHTML={{__html: icon}}
        />
    );
}
