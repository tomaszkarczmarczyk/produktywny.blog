import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { HeaderFooterLayoutProps } from '@/layouts/HeaderFooter'

const HeaderFooterLayout = ({ children }: HeaderFooterLayoutProps) => {
  return (
    <>
      <div className="grid min-h-screen grid-rows-[80px_1fr_80px] gap-10">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default HeaderFooterLayout
