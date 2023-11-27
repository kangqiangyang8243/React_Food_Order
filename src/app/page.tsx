import HomePageSlider from '@/components/HomePageSlider'
import HomepageFeature from '@/components/HomepageFeature'
import HomepageOffer from '@/components/HomepageOffer'

export default function Home() {
  return (
    <main className='w-full'>
      <HomePageSlider />
      <HomepageFeature />
      <HomepageOffer/>
    </main>
  )
}
