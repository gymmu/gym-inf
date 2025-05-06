import React from "react"
import Presentation from "../../components/Reveal"
import NetworkIntroContent from "./network-intro.mdx"

export default function NetworkIntroPresentation() {
  return (
    <div>
      <Presentation>
        <NetworkIntroContent />
      </Presentation>
    </div>
  )
}
