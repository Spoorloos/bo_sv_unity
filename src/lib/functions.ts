export async function jsonFetcher(...args: Parameters<typeof fetch>) {
    const response = await fetch(...args);
    const parsed = await response.json();
    return parsed;
}