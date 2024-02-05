import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>
        <div className="h-[300px] w-[1350px]">
        <Image src="/thumnail.jpg" height={450} width={1200} alt="Image" />
        </div>
        <div></div>
    </section>
  )
}

export default page