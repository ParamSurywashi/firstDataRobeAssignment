
class ButtonLocation extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <button id="getLoc">Get Location </button>
        `}
}
customElements.define("button-location", ButtonLocation);