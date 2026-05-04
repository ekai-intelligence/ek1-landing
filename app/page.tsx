import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Customers from '@/components/sections/Customers'
import Problem from '@/components/sections/Problem'
import AppsShowcase from '@/components/sections/AppsShowcase'
import AppBuilder from '@/components/sections/AppBuilder'
import Integrations from '@/components/sections/Integrations'
import WhyNow from '@/components/sections/WhyNow'
import WhoFor from '@/components/sections/WhoFor'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Customers />
        <Problem />
        <AppsShowcase />
        <Integrations />
        <AppBuilder />
        <WhyNow />
        <WhoFor />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
