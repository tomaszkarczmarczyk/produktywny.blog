import type { WrapperProps } from '@/components/Wrapper'

const Wrapper = ({ children }: WrapperProps) => (
  <div className="grid min-h-screen grid-rows-[80px_1fr_60px]">{children}</div>
)

export default Wrapper
