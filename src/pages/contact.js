import React from "react"
import Layout from "../components/layout"
import { TagsStyle } from "../styles/styles"

const Contact = () => {
  return (
    <Layout>
      <TagsStyle>
        <h3>Contacto: </h3>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">
              Nombre: <br /> <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Correo: <br /> <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label htmlFor="message">
              Mensaje: <br />
              <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Enviar</button>
          </p>
        </form>
      </TagsStyle>
    </Layout>
  )
}

export default Contact
