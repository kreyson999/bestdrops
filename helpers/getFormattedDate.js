export default function getFormattedDate(date) {
  const formattedDate = new Date(date).toLocaleString('pl', {
    day: '2-digit',
    month: 'long',
    hourCycle: 'h24',
    hour: '2-digit',
    minute: '2-digit'

  })
  return formattedDate
}