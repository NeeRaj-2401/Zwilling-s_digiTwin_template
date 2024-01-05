// remove '_' and capitlize the first letters
export function formatHeading(heading: string): string {
    const parts = heading.split('_');
    const formattedParts = parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1) );
    const formattedHeading = formattedParts.join(' ');
  
    return formattedHeading;
}

// Remove everything after the first underscore
export function formatableHeading(heading: string): string {
    const firstUnderscoreIndex = heading.indexOf('_');
    const formattedHeading = firstUnderscoreIndex !== -1 ? heading.substring(0, firstUnderscoreIndex) : heading;

    return formattedHeading;
}

export function getDefaultIfUndefined(value:any, defaultValue = '0') {
    return value === undefined ? defaultValue : value;
}