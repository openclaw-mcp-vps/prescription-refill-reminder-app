export default function Home() {
  const faqs = [
    {
      q: "How does RxRemind work?",
      a: "Add your prescriptions, set your refill schedule, and we send you timely reminders via email or SMS before you run out."
    },
    {
      q: "Which pharmacies are supported?",
      a: "We integrate with CVS, Walgreens, Rite Aid, and most major pharmacy chains so you can reorder with one click."
    },
    {
      q: "Is my health data secure?",
      a: "Yes. All data is encrypted at rest and in transit. We are HIPAA-compliant and never sell your personal information."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health Tracking
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Never Miss a Prescription Refill Again
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Smart reminders, pharmacy integration, and one-click reordering — all in one place for chronic condition patients, caregivers, and the elderly.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start for $5/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "💊", title: "Medication Tracking", desc: "Log all your prescriptions and dosage schedules in one dashboard." },
          { icon: "🔔", title: "Smart Reminders", desc: "Get email or SMS alerts days before you run out of medication." },
          { icon: "🏪", title: "Pharmacy Integration", desc: "Connect to CVS, Walgreens, and more for instant one-click refills." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-bold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$5</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prescriptions",
              "Email & SMS reminders",
              "Pharmacy integrations",
              "Caregiver sharing",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} RxRemind. All rights reserved.
      </footer>
    </main>
  );
}
