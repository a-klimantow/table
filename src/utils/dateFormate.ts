export function dateFormate(date: Date) {
    return new Intl.DateTimeFormat('ru-Ru', {
        dateStyle: 'short',
        timeStyle: 'short',
    }).format(new Date(date))
}