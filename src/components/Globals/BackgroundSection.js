import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}
//lets set up a default prop so we can have some default settings so we dont have to create them every time (not for img because it comes from the query, but we can do it for other stuff like title, styleClass, children, etc)
BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
