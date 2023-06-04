
class HelloWorld extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <h1>Hello World </h1>
          <p>(get location click <span>Get Location</span>)</p>
        `}
}
customElements.define("hello-world", HelloWorld);