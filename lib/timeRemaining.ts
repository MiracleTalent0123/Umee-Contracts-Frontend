export const getTimeRemaining = (endtime: string) => {
  return getTime(new Date().toString(), endtime)
}

export const getTimePassed = (startTime: string) => {
  return getTime(startTime, new Date().toString()) 
}

export const getTime = (starttime: string, endtime: string) => {
  const total = Date.parse(endtime) - Date.parse(starttime)
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))

  if(days > 0) return `${days} days ago`
  if(days === 0 && hours > 0) return `${hours} hours ago`
  if(days === 0 && hours === 0 && minutes > 0) return `${minutes} minutes ago`
}
