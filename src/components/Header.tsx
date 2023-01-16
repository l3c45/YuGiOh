import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=' p-4 dark:bg-yellow-900 flex flex-row justify-between ' >
      <Link href={"/"}>
<h2 className='text-2xl font-bold'>YugiOh</h2>
</Link>
<button className='dark:bg-zinc-900 p-2 rounded w-[100px] hover:dark:bg-zinc-700'>Mazo</button>

    </header>
  )
}

export default Header