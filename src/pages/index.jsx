import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container, Divider } from '@mui/material'
import { Hero } from '@/components/Layouts/Home/Hero'
import { WhyUs } from '@/components/Layouts/Home/WhyUs'
import { LatestProducts } from '@/components/Layouts/Home/LastestProducts'
import { About } from '@/components/Layouts/Home/About'
import { VisitUs } from '@/components/Layouts/Home/VisitUs'
import { PostList } from '@/components/Layouts/Home/PostList'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { productApi } from '@/api/productApi'
import { postApi } from '@/api/postApi'

export default function Home({ productList, postList }) {
  const router = useRouter()

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
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
          onViewProducts={() => router.push(`/shop?page=1&limit=6`)}
          onVisitOurStore={() => router.push(`/contact`)}
        />

        <WhyUs onViewProducts={() => router.push(`/shop?page=1&limit=6`)} />

        <LatestProducts
          productList={productList}
          onCardClick={(item) => router.push(`/shop/${item.slug}`)}
          onViewProducts={() => router.push(`/shop?page=1&limit=6`)}
        />

        <About />

        <VisitUs />

        <Container>
          <Divider />
        </Container>

        <PostList
          postList={postList}
          onViewPost={() => router.push(`/blogs?page=1&limit=6`)}
          onCardClick={(item) => router.push(`/blogs/${item.slug}`)}
        />
      </MainLayout>
    </>
  )
}

export async function getStaticProps() {
  try {
    const [productRes, postRes] = await Promise.all([
      productApi.getAll({ page: 1, limit: 4 }),
      postApi.getAll({ page: 1, limit: 2 }),
    ])

    return {
      props: {
        productList: productRes?.data || [],
        postList: postRes?.data || [],
      },
      revalidate: 60, // ISR: làm mới mỗi 60 giây
    }
  } catch (error) {
    console.error('Failed to load home page data:', error)
    return {
      props: {
        productList: [],
        postList: [],
      },
    }
  }
}
