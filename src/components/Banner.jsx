import React from 'react'
function Banner({gender}) {

  return (
    <div>
        <ul className={`${gender === "women" ? "md:flex" : "hidden"}
          hidden justify-evenly  p-4 text-slate-500 font-light text-lg`} >
            <li>
                Tops
            </li>
            <li>
                Dresses
            </li>
            <li>
                Blazers
            </li>
            <li>
                Jackets
            </li>
            <li>
                Skirts
            </li>
            <li>
                Pants
            </li>
            <li>
                Underwear
            </li>
        </ul>
        <ul className={`${gender === "men" ? "md:flex" : "hidden"}
          hidden justify-evenly p-4 text-slate-500 text-lg font-light flex-wrap gap-8`} >
            <li>
                T-Shirts
            </li>
            <li>
                Hoodies
            </li>
            <li>
                Pullovers
            </li>
            <li>
                Jackets
            </li>
            <li>
                Tracksuits
            </li>
            <li>
                Pants
            </li>
            <li>
                Underwear
            </li>
        </ul>
    </div>
  )
}

export default Banner