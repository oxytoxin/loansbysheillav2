import {useCallback} from "react";

export function transformEmbedUrl(url: string): string {
    let transformed = url;

    if (transformed.includes("youtube")) {
        transformed = transformed.includes("shorts/")
            ? transformed.replace("shorts/", "embed/")
            : transformed.replace("watch?v=", "embed/");
    }

    if (transformed.includes("youtu.be")) {
        transformed = transformed.replace("youtu.be", "www.youtube.com/embed");
    }

    if (transformed.includes("vimeo")) {
        transformed = transformed.replace("/vimeo.com", "/player.vimeo.com/video");
        if (!url.includes("progressive_redirect") && transformed.split("/").length > 5) {
            const lastSegment = transformed.substr(transformed.lastIndexOf("/") + 1);
            transformed = transformed.substr(0, transformed.lastIndexOf("/")) + "?h=" + lastSegment.replace("?", "&");
        }
    }

    if (transformed.includes("&") && !transformed.includes("?")) {
        transformed = transformed.replace("&", "?");
    }

    return transformed;
}

export function useEmbed(): (url: string) => string {
    return useCallback((url: string) => transformEmbedUrl(url), []);
}
