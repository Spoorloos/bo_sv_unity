export function class$(...classNames: unknown[]) {
    return classNames.filter(v => v && typeof v === "string").join(" ");
}