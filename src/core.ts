import { Faction } from "./consts"

export function appendLabel(elem: Element, text: string, type: Faction) {
  var div = document.createElement("span")
  div.className = `plusplus-label ${factionToClass(type)}`

  var img = document.createElement("img")
  img.src = chrome.runtime.getURL("images/pohottu.svg")
  img.className = `plusplus-logo`

  var span = document.createElement("span")
  span.className = "lblpp"
  span.textContent = text

  div.appendChild(img)
  div.appendChild(span)

  elem.appendChild(div)
}

/**
 * Filter and get only unique elements
 * @param already Already found elements
 * @param newFound New found elements (may contain already found elements)
 * @returns Filtered elements
 */
export function filterUniqueElements(already: Element[], newFound: Element[]) {
  return newFound.filter(x => {
    for (let i = 0; i < already.length; i++) {
      if (x.isEqualNode(already[i])) {
        return false
      }
    }

    return true
  })
}

export function factionToClass(faction: Faction): string {
  switch (faction) {
    case Faction.Pohottu:
      return "fbpp-pohottu"
    case Faction.UNP:
      return "fbpp-unp"
    case Faction.PaidFakeAccount:
      return "fbpp-paid"
  }
}
