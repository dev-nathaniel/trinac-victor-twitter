import '../styles/globals.css'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Intro from '../components/intro/Intro'

// function Loading() {
//   const router = useRouter()
//   const [loading, setLoading] = useState(false)
//   useEffect(() => {
//     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
//     const handleComplete = (url) => (url === router.asPath) && setTimeout(() => {setLoading(false)}, 5000);
//     router.events.on('routeChangeStart', handleStart)
//     router.events.on('routeChangeComplete', handleComplete)
//     router.events.on('routeChangeError', handleComplete)

//     return () => {
//       router.events.off('routeChangeStart', handleStart)
//     router.events.off('routeChangeComplete', handleComplete)
//     router.events.off('routeChangeError', handleComplete)
//     }
//   })

//   useEffect(() => {
//       if (loading) {
//         console.log('loading')
//       }
//   }, [loading])

//   return loading && (
//     <div>loading..</div>
//   )
// }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
