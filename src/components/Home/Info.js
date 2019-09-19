import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit corporis voluptatum voluptatibus error iste magni
              repellat perferendis minima rem totam asperiores quas quo
              similique ullam excepturi, sed nesciunt atque mollitia in, officia
              tenetur. Ratione id, explicabo officia consequuntur nobis placeat
              perspiciatis error facere quis fugit dolores? Autem quae omnis
              doloremque?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-red">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
