import './globals.css'
import ChakraWrapper from '@/components/ChakraWrapper'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
      <ChakraWrapper>
          <Header/>
        </ChakraWrapper>
        <ChakraWrapper>
          {children}
        </ChakraWrapper>
        <ChakraWrapper>
          <Footer/>
        </ChakraWrapper>
      </body>
    </html>
  )
}
