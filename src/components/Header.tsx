import Link from 'next/link'

import React from 'react'

const Header = () => {

  return (
    <header className=' p-4 dark:bg-primary flex flex-row justify-between ' >
      <Link href={"/"}>
<h2 className='text-3xl font-bold'>Yu-gi-Oh!</h2>
</Link>
<Link href={"/deck"}>
<button  className='dark:bg-background text-text p-2 rounded w-[100px] hover:dark:bg-card'>Mazo</button>
</Link>
    </header>
  )
}

export default Header