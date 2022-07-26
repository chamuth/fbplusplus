import database from "./db"
import { Faction, Selectors } from "./consts"
import { appendLabel, filterUniqueElements } from "./core"

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
        const profile = name.closest("a")?.href.split("?")[0]

        console.log(profile)

        database.setProfile(profile || "unded", {
          expires: new Date(),
          faction: "pohottu",
        })

        // check profile status
        appendLabel(name, "බයියෙක්", Faction.Pohottu)
      })
    }, 5000)
  })()
})
