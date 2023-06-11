import Lottie from "lottie-react"

import logotypeAnimation from "/public/animations/denwa logotype.json"

const LogotypeAnimation = () => {
  return (
    <Lottie
      animationData={logotypeAnimation}
      style={{ height: "25px", width: "256px", margin:"10px"}}
      autoplay={true}
      loop={false}
    />
  )
}

export default LogotypeAnimation
