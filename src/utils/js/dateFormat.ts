export function dateFormat(milliseconds: number): string {
    milliseconds *= 1000

    const date = new Date(milliseconds)

    return date.toLocaleString()
}