import React from "react"
import { Link } from "gatsby"

export const options = {
  renderNode: {
    hyperlink: node => {
      const {
        data: { uri },
        content,
      } = node
      return <Link to={uri}>{content[0].value}</Link>
    },
  },
}
