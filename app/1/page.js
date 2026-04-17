import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Browse | Movie Catalog',
}

export default function DesignOnePage() {
  redirect('/2')
}
