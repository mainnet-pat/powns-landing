import React from "react"
import styled from "@emotion/styled"
import logo from "../assets/logo-lightbg.png"

const LogoContainer = styled("div")`
  .ens-logo {
    width: 278px;
    margin-right: 10px;
  }
`

export default function Logo({ className }) {
  return (
    <LogoContainer className={className}>
      <img src={logo} alt="POWNS Logo" className="ens-logo" />
    </LogoContainer>
  )
}
