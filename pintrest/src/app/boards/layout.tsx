export const metadata = {
  title: 'Boards',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900">{children}</body>
    </html>
  )
}
