"use client";

import { FormEvent, useState } from "react";
import { practices } from "@/data/practices";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-thanks">
        <p className="label">Received</p>
        <h3>Thank you. We will be in touch.</h3>
        <p>
          Your enquiry is treated as confidential. You may also write directly to{" "}
          <a href="mailto:manish.tiwari@kaivalyalaw.com">manish.tiwari@kaivalyalaw.com</a>{" "}
          or{" "}
          <a href="mailto:akhand.tripathi@kaivalyalaw.com">akhand.tripathi@kaivalyalaw.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="org">Organisation</label>
          <input id="org" name="organisation" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="interest">Area of interest</label>
        <select id="interest" name="interest" defaultValue={practices[2].name}>
          {practices.map((item) => (
            <option key={item.slug}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" required placeholder="A short note on the matter." />
      </div>
      <button className="btn btn-ink" type="submit">
        Send enquiry →
      </button>
      <p className="form-note">All enquiries are confidential.</p>
    </form>
  );
}
