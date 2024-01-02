export function getFormattedDate(date) {
    date = new Date(date)
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}