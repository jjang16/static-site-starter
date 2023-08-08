import React from 'react'
import { HeadBase } from '@containers/root/head'
import { ExampleContainer } from '../containers/example'
import { getOrigin } from '@/config'

const RootPage = () => {
  return <ExampleContainer />
}
// https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup

export const Head = ({ location }: { location: Location }) => {
  const url = `${getOrigin()}/${location.pathname}`
  const title = 'title'
  const description = 'description'
  const imageSrc = '/image-url'

  return (
    <>
      <HeadBase />
      <meta name="robots" content="index, follow" />
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <link rel="image_src" href={imageSrc} />
      <meta property="og:image" content={imageSrc} />
    </>
  )
}

export default RootPage
