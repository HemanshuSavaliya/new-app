import React from "react";
import Section from "./Section";

const Contect = () => {
  return (
    <div className="  pt-5 mt-5 ">
      <div class="container mt-5 animate__animated animate__zoomIn">
        <h1 class="text-center">Contact Us</h1>
        <h6 class="text-center">
          Please fill out the form below to get in touch with us.
        </h6>
        <div class="row mt-4">
          <div class="col-md-6 offset-md-3">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-3">
                <label for="subject" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Enter subject"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Section />
    </div>
  );
};

export default Contect;
