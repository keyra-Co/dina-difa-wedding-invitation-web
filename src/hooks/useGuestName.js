// hooks/useGuestName.js
// Ambil nama tamu dari URL query param ?to=NamaTamu
// Contoh: https://dina-difa.vercel.app?to=Budi

import { useMemo } from 'react'

export function useGuestName() {
  const guestName = useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('to') || 'Tamu Undangan'
  }, [])

  return guestName
}
