import { About } from '@/components/Layouts/Home/About'
import { Hero } from '@/components/Layouts/Home/Hero'
import { LatestProducts } from '@/components/Layouts/Home/LastestProducts'
import { PostList } from '@/components/Layouts/Home/PostList'
import { VisitUs } from '@/components/Layouts/Home/VisitUs'
import { WhyUs } from '@/components/Layouts/Home/WhyUs'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { useProducts } from '@/hooks/useProduct'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const postList = []
  const { data: productList } = useProducts({ page: 1, limit: 4 })

  return (
    <>
      <Head>
        <title>Serene Leaf | Natural Herbal Teas for Mind & Body</title>
        <meta
          name="description"
          content="Discover the calming power of nature with Serene Leaf. Explore our selection of natural herbal teas crafted to refresh your body and restore your peace of mind."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />

        {/* Favicon */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sereneleaf.vercel.app" />
        <meta property="og:title" content="Serene Leaf | Natural Herbal Teas" />
        <meta
          property="og:description"
          content="Soothing, all-natural herbal teas to support wellness and tranquility. Shop now at Serene Leaf."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dea5jhokr/image/upload/v1748596647/tea_wilzys.png"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Serene Leaf | Natural Herbal Teas"
        />
        <meta
          name="twitter:description"
          content="Soothing, all-natural herbal teas to support wellness and tranquility. Shop now at Serene Leaf."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dea5jhokr/image/upload/v1748596647/tea_wilzys.png"
        />
      </Head>

      <MainLayout>
        <Hero
          onViewProducts={() => router.push(`/products`)}
          onVisitOurStore={() => router.push(`/contact`)}
        />

        <WhyUs />
        <LatestProducts
          productList={productList}
          onCardClick={(item) => router.push(`/products/${item._id}`)}
          onViewProducts={() => router.push(`/products`)}
        />
        <About />
        <VisitUs />
        <PostList postList={postList} />
      </MainLayout>
    </>
  )
}
