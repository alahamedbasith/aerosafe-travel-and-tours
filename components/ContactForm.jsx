"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className="font-body font-semibold text-navy mb-2 text-sm" htmlFor="firstName">
            First Name
          </label>
          <input
            className="bg-white border border-outline rounded-md p-3 font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            id="firstName"
            placeholder="e.g. John"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-body font-semibold text-navy mb-2 text-sm" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="bg-white border border-outline rounded-md p-3 font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            id="lastName"
            placeholder="e.g. Doe"
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-body font-semibold text-navy mb-2 text-sm" htmlFor="company">
          Company Name
        </label>
        <input
          className="bg-white border border-outline rounded-md p-3 font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          id="company"
          placeholder="Enter your company name"
          type="text"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className="font-body font-semibold text-navy mb-2 text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="bg-white border border-outline rounded-md p-3 font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            id="email"
            placeholder="name@company.com"
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-body font-semibold text-navy mb-2 text-sm" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="bg-white border border-outline rounded-md p-3 font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            id="phone"
            placeholder="+971 52 108 4524"
            type="tel"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-body font-semibold text-navy mb-2 text-sm" htmlFor="inquiryType">
          I am interested in
        </label>
        <div className="relative">
          <select
            className="appearance-none w-full bg-white border border-outline rounded-md p-3 font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface-variant cursor-pointer"
            id="inquiryType"
            defaultValue=""
          >
            <option>Corporate Travel Management</option>
            <option>B2B Agency Partnership</option>
            <option>Visa &amp; Immigration Services</option>
            <option>Tour Packages &amp; Leisure</option>
            <option>Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-body font-semibold text-navy mb-2 text-sm" htmlFor="message">
          Message
        </label>
        <textarea
          className="bg-white border border-outline rounded-md p-3 font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
          id="message"
          placeholder="Tell us about your travel requirements..."
          rows="5"
        ></textarea>
      </div>

      <div className="pt-2 flex justify-end">
        <button
          className="bg-primary text-white font-body font-bold px-8 py-4 rounded-md hover:bg-primary-dark transition-colors shadow-card flex items-center gap-2"
          type="submit"
        >
          {submitted ? "Inquiry Sent" : "Submit Inquiry"}
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </div>
    </form>
  );
}
