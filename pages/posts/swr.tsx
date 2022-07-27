import { StudentDetail } from '@/components/swr'
import React, { useState } from 'react'

export default function SWRPage() {
  const [detailPage, setDetailPage] = useState([1, 1, 1])
  const handleClick = () => {
    setDetailPage((prevPage) => [...prevPage, 1])
  }
  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={handleClick}>Add detail </button>
      <ul>
        {detailPage.map((x, index) => (
          <li key={index}>
            <StudentDetail studentId="sktwi1cgkkuif36f3" />
          </li>
        ))}
      </ul>
    </div>
  )
}
