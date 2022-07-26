import database from "./db"
import { Selectors } from "./consts"

import {
  appendLabel,
  factionToTitle,
  filterUniqueElements,
  stringToFaction,
  validProfileId,
} from "./core"

window.addEventListener("load", () => {
  ;(() => {
    const comments: Element[] = []

    setInterval(() => {
      // read all commenters
      let newComments = Array.from(
        document.querySelectorAll(Selectors.comments)
      )

      // only add new commenter nodes
      newComments = filterUniqueElements(comments, newComments)
      // push newly added comments
      comments.push(...newComments)

      // DOM operations
      Array.from(newComments).forEach(name => {
        const profile_id = name.closest("a")?.href.split("?")[0]

        if (profile_id && validProfileId(profile_id)) {
          database.getProfile(profile_id).then(profile => {
            // check profile status
            if (profile) {
              const faction = stringToFaction(profile.faction)
              appendLabel(name, factionToTitle(faction), faction)
              return
            }

            // User most likely untagged
          })
        }
      })
    }, 5000)
  })()
})
