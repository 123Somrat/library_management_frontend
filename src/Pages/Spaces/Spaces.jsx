import Lottie from "lottie-react"
import { Helmet } from "react-helmet"
import ComeingSoon from "../../../public/Animation - 1699534129054.json"
import SpaceAndRoomCover from "./SpaceAndRoomCover/SpaceAndRoomCover"
export default function Spaces() {
  return (
    <div className="max-w-6xl my-10">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Space & Rooms</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <section>
          <SpaceAndRoomCover/>
        </section>
    </div>
  )
}
