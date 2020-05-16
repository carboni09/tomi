import Nav from '../components/nav'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <div className="container w-4/5 md:w-3/5 mx-auto">
      <Head>
        <title>Happy Birthday</title>
      </Head>

      <div className="hero">
        <h1 className="title">Couldn't find a better gift that's expressive of you and has tech written all over it.</h1>
        <h1 className="subtitle  mt-8">Hope <a href="#" className="text-purple-600">oluwatomis.in</a> would be useful for your personal brand. Happy birthday.</h1>
        <p className="text-center mt-2"> - Caleb </p>

      </div>
    </div>
  )
}
