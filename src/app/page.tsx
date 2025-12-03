import React from "react";
import FeatureCard from "@/components/FeatureCard";
import AudienceCard from "@/components/AudienceCard";
import Testimonial from "@/components/Testimonial";
import FAQItem from "@/components/FAQItem";
import EmailCaptureForm from "@/components/EmailCaptureForm";

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-emerald-400 tracking-wide uppercase mb-3">
            LocumApp
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Fill locum shifts faster with one simple app.
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-6 max-w-xl">
            Connect locum staff with agencies, keep an accurate view of who is
            available, and cut down on calls, texts, and spreadsheets – all in
            one secure mobile app.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              Download on the App Store
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-50 hover:bg-slate-900 transition"
            >
              Get it on Google Play
            </a>
          </div>

          {/* Secondary CTA: email link */}
          <EmailCaptureForm />

          {/* Trust mini-line */}
          <p className="mt-3 text-xs text-slate-500">
            Free to download • No credit card required
          </p>
        </div>

        {/* Phone mockup / screenshots placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-128 max-w-xs">
            <div className="relative mx-auto h-96 w-48 rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl shadow-emerald-500/20 overflow-hidden">
              <div className="h-8 bg-slate-950/90 flex items-center justify-center text-[10px] text-slate-400">
                LocumApp – Schedule
              </div>
              <div className="p-3 space-y-2 text-[11px]">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-100 text-xs">
                    Upcoming shifts
                  </span>
                  <span className="text-[10px] text-emerald-400">Today</span>
                </div>
                {/* Placeholder list items */}
                <div className="rounded-lg bg-slate-800/90 p-2 flex flex-col gap-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-medium text-slate-100">
                      A&E Locum Doctor
                    </span>
                    <span className="text-emerald-400">09:00–17:00</span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    City Hospital • AgencyX
                  </span>
                </div>
                <div className="rounded-lg bg-slate-800/60 p-2 flex flex-col gap-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-medium text-slate-100">
                      ICU Locum Nurse
                    </span>
                    <span className="text-emerald-300">Night</span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Riverside Clinic • AgencyY
                  </span>
                </div>
              </div>
              <div className="absolute inset-x-8 bottom-3 h-1 rounded-full bg-slate-700" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-12 md:py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          How LocumApp helps you fill gaps
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <p className="text-xs font-semibold text-emerald-400 mb-2">Step 1</p>
            <h3 className="text-base font-semibold mb-2">Create your profile</h3>
            <p className="text-sm text-slate-300">
              Sign up in minutes as a locum professional or an agency. Set your
              skills, locations, and availability so the right shifts find you.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <p className="text-xs font-semibold text-emerald-400 mb-2">Step 2</p>
            <h3 className="text-base font-semibold mb-2">Match &amp; manage shifts</h3>
            <p className="text-sm text-slate-300">
              Browse upcoming shifts, request or assign staff, and keep
              bookings, confirmations, and changes in one place.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <p className="text-xs font-semibold text-emerald-400 mb-2">Step 3</p>
            <h3 className="text-base font-semibold mb-2">Stay in sync</h3>
            <p className="text-sm text-slate-300">
              Receive real-time updates on approvals, changes, and new
              opportunities so shifts are filled quickly and nothing falls
              through the cracks.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-12 md:py-16 max-w-5xl mx-auto border-y border-slate-900/60 bg-slate-950/80">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Built for busy healthcare teams who can't afford gaps
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            title="Reduce scheduling chaos"
            body="Keep all locum shifts and availability in a single, structured view instead of scattered spreadsheets, chats, and calls."
          />
          <FeatureCard
            title="Stay in sync"
            body="Push notifications keep locums and coordinators aligned on new shifts, changes, and approvals."
          />
          <FeatureCard
            title="Confidence & compliance"
            body="Store key information securely so you can quickly check suitability and compliance when filling shifts."
          />
          <FeatureCard
            title="Designed for teams"
            body="Agencies and organizations get an overview of multiple sites, teams, and roles in one place, so they can spot gaps early and fill them faster."
          />
        </div>
      </section>

      {/* Audience-specific */}
      <section className="px-6 py-12 md:py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Made for both locums and agencies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <AudienceCard
            label="For Locum Staff"
            points={[
              "Find shifts that match your skills and availability.",
              "Manage your profile and documents from your phone.",
              "Get notified instantly when new opportunities appear.",
            ]}
          />
          <AudienceCard
            label="For Agencies & Organizations"
            points={[
              "Post, assign, and track shifts in one dashboard.",
              "Quickly see who is available and suitable to cover gaps.",
              "Reduce back-and-forth calls, emails, and spreadsheets.",
            ]}
          />
        </div>
      </section>

      {/* Screenshots / product tour placeholder */}
      <section className="px-6 py-12 md:py-16 max-w-5xl mx-auto border-y border-slate-900/60">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          See LocumApp in action
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {["Shifts list", "Shift details", "Profile & availability"].map(
            (label, index) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-3"
              >
                <div className="h-40 rounded-xl bg-slate-800/80 flex items-center justify-center text-xs text-slate-500">
                  Screenshot {index + 1} – {label}
                </div>
                <p className="text-sm text-slate-200 font-medium">{label}</p>
                <p className="text-xs text-slate-400">
                  Short caption explaining what the user can do on this screen.
                </p>
              </div>
            )
          )}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
          >
            Get the app for iOS
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-50 hover:bg-slate-900 transition"
          >
            Get the app for Android
          </a>
        </div>
      </section>

      {/* Social proof & FAQ & final CTA */}
      <section className="px-6 py-12 md:py-16 max-w-5xl mx-auto">
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Testimonial
            quote="LocumApp cut the back-and-forth for my shifts dramatically. I can see everything on my phone."
            name="Dr. A. Patel"
            role="Locum Doctor"
          />
          <Testimonial
            quote="We fill shifts faster and with far less admin. Our teams finally have a single source of truth."
            name="Sarah Jones"
            role="Agency Manager"
          />
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">FAQ</h2>
          <div className="space-y-4 text-sm text-slate-200">
            <FAQItem
              q="Is LocumApp free to use?"
              a="LocumApp is free to download. Some advanced features for agencies and organizations may require a subscription plan."
            />
            <FAQItem
              q="Which platforms are supported?"
              a="LocumApp is available for iOS and Android. The mobile apps are the primary way to use the product."
            />
            <FAQItem
              q="Do I need to be part of an organization?"
              a="Locum professionals can sign up independently. Agencies and organizations can onboard to coordinate teams and sites."
            />
            <FAQItem
              q="How is my data protected?"
              a="We use modern encryption and follow best practices to keep your data safe, with secure authentication and storage."
            />
          </div>
        </div>

        {/* Final CTA */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-1">
              Ready to simplify locum staffing?
            </h3>
            <p className="text-sm text-slate-300">
              Download LocumApp and start managing shifts, staff, and
              availability from a single mobile app.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              Download on the App Store
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-50 hover:bg-slate-900 transition"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="px-6 py-12 md:py-16 max-w-5xl mx-auto border-t border-slate-900/60">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Us</h2>
        <div className="text-sm text-slate-300 space-y-4 max-w-3xl">
          <p>
            <a
              href="https://www.locum.care"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium"
            >
              Locum Care
            </a>{" "}
            is a product of{" "}
            <span className="text-slate-100 font-medium">
              Aesculapius Professional Services Ltd
            </span>
            .
          </p>
          <p>
            Aesculapius Professional Services Ltd operates in the healthcare
            services sector, providing recruitment marketplaces, workforce
            scheduling, and mental health assessments to hospitals, clinics, and
            clinicians.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-slate-900/80 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} Aesculapius Professional Services Ltd. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a
              href="https://www.locum.care"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300"
            >
              Locum Care
            </a>
            <a href="/privacy" className="hover:text-slate-300">
              Privacy
            </a>
            <a href="/terms" className="hover:text-slate-300">
              Terms
            </a>
            <a
              href="mailto:support@locum.care"
              className="hover:text-slate-300"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;

