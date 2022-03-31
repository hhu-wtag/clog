import Item from "./components/Item.js"
import Info from "./components/Info.js"
import BottomNav from "./components/BottomNav.js"
import {
  githubIcon,
  spotifyIcon,
  linkedinIcon,
  twitterIcon,
} from "../utils/Icons.js"

import textData from "../utils/textData.json"

import { useState } from "react"

export default function Home() {
  const [itemSelected, setItemSelected] = useState("softwareEngineer")

  return (
    <>
      <div className="home__container">
        <div className="home__main">
          <div className="home__main-body">
            <Item
              text="Software Engineer"
              Icon={githubIcon}
              active={itemSelected}
              uid="softwareEngineer"
              setItemSelected={setItemSelected}
            />
            <Item
              text="an aesthete"
              Icon={spotifyIcon}
              active={itemSelected}
              uid="aesthete"
              setItemSelected={setItemSelected}
            />
            <Item
              text="melophile"
              Icon={linkedinIcon}
              active={itemSelected}
              uid="melophile"
              setItemSelected={setItemSelected}
            />
            <Item
              text="and movie buff"
              Icon={twitterIcon}
              active={itemSelected}
              uid="movieBuff"
              setItemSelected={setItemSelected}
            />
          </div>

          <Info text={textData[itemSelected]} />

          <BottomNav />
        </div>
      </div>
    </>
  )
}
