import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Wrapper from '@/components/Wrapper'
import type { HeaderFooterLayoutProps } from '@/layouts/HeaderFooter'

const HeaderFooterLayout = ({ children }: HeaderFooterLayoutProps) => {
  return (
    <>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </>
  )
}

export default HeaderFooterLayout
