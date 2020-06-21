import { Controller } from 'stimulus'

let scroll

export default class extends Controller {
  static get targets() {
    return ['pageOutline', 'outlineButton']
  }

  connect() {
    this.element.scrollTop = scroll
  }

  saveScroll() {
    scroll = this.element.scrollTop
  }

  toggleOutline(event) {
    event.stopPropagation()
    event.preventDefault()

    if (this.outlineButtonTarget.getAttribute('aria-expanded') === "false") {
      this.showOutline()
    } else {
      this.hideOutline(event)
    }
  }

  showOutline() {
    this.outlineButtonTarget.setAttribute('aria-expanded', "true")
    this.pageOutlineTarget.classList.add('block')
    this.pageOutlineTarget.classList.remove('hidden')
  }

  hideOutline(event) {
    if (event.target === this.pageOutlineTarget) {
      event.preventDefault()
      return
    }
    this.outlineButtonTarget.setAttribute('aria-expanded', "false")
    this.pageOutlineTarget.classList.remove('block')
    this.pageOutlineTarget.classList.add('hidden')
  }
}
