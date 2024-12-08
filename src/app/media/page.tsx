import Media from '@/section/media/Media'
import React from 'react'
import Fotter from '@/component/Fotter'
import GetInTouch from '@/section/landing/getInTouch'

export default function page() {
  return (
    <div>
      <Media/>
      <GetInTouch hidden={true}/>
      <Fotter />
    </div>
  )
}
