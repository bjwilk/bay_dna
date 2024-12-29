import AcuityScheduler from '@/components/AcuityScheduler'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Container } from '@/components/container'


export default function Home() {
  return (
<div className="relative min-h-screen">
  <Gradient className="absolute inset-0 rounded-4xl ring-1 ring-inset ring-black/5" />
  <Container className="relative z-10"> {/* Ensure it's above the gradient */}
    <Navbar />
    <AcuityScheduler />
  </Container>
</div>

  )
}
