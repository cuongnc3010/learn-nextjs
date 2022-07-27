import * as React from 'react'
import useSWR from 'swr'

export interface StudentDetailProps {
  studentId: any
}
const MS_PER_HOUR = 1000 * 60 * 60
export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: MS_PER_HOUR,
    // dedupingInterval: 2000,
  })
  console.log(data)
  const handleMutateClick = () => {
    mutate({ name: ' Callie Christiansen ' }, true)
  }
  return (
    <div>
      Name: {data?.name || '--'}
      {` `}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  )
}
