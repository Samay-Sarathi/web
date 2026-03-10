import Image from "next/image";
import {
  Shield,
  MapPin,
  Activity,
  Clock,
  Users,
  Building2,
  Siren,
  Download,
  ArrowRight,
  ChevronDown,
  Phone,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ─── Navbar ─── */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Samay Sarathi" width={36} height={36} />
            <div>
              <span className="font-bold text-lg text-foreground tracking-wide">
                SAMAY SARATHI
              </span>
              <span className="hidden sm:inline text-xs text-muted ml-2">
                समय सारथी
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hidden md:block text-sm text-muted hover:text-foreground transition">
              Features
            </a>
            <a href="#how-it-works" className="hidden md:block text-sm text-muted hover:text-foreground transition">
              How It Works
            </a>
            <a href="#stakeholders" className="hidden md:block text-sm text-muted hover:text-foreground transition">
              Stakeholders
            </a>
            <a
              href="https://samaysarathi.in/samaysarathi.apk"
              className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition flex items-center gap-2"
            >
              <Download size={16} />
              Download App
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted mb-6">
              <Shield size={14} className="text-primary" />
              National Emergency Response Initiative
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Every Second
              <br />
              <span className="text-primary">Counts.</span>
            </h1>

            <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
              Samay Sarathi is India&apos;s AI-powered emergency coordination system
              that connects ambulance drivers, hospitals, and traffic police in
              real time — reducing response times and saving lives.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://samaysarathi.in/samaysarathi.apk"
                className="bg-primary text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary-dark transition flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                <Download size={18} />
                Download for Android
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-border text-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-surface transition flex items-center gap-2"
              >
                Learn More
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm text-muted">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Live System
              </div>
              <div>Open Source</div>
              <div>Made in India</div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
            <div className="relative p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <StatCard icon={<Clock size={20} />} value="< 8 min" label="Avg Response Time" color="text-primary" />
                <StatCard icon={<Building2 size={20} />} value="Smart" label="Hospital Routing" color="text-accent" />
                <StatCard icon={<MapPin size={20} />} value="Real-time" label="Live Tracking" color="text-accent" />
                <StatCard icon={<Siren size={20} />} value="Auto" label="Green Corridors" color="text-primary" />
              </div>

              <div className="bg-white rounded-2xl border border-border p-6 mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Emergency Trip Active</span>
                </div>
                <div className="space-y-3">
                  <FlowStep step="1" text="Driver starts emergency trip" done />
                  <FlowStep step="2" text="AI selects nearest hospital with beds" done />
                  <FlowStep step="3" text="Green corridor activated" done />
                  <FlowStep step="4" text="Hospital prepared for arrival" active />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-muted/40" />
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Intelligent Emergency Response
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              A unified platform that orchestrates every stakeholder in the emergency chain — from the moment an ambulance starts to hospital arrival.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={<MapPin size={24} />} title="Smart Hospital Routing" description="AI recommends the best hospital based on distance, bed availability, specialty match, and real-time capacity." />
            <FeatureCard icon={<Siren size={24} />} title="Green Corridor Management" description="Automatic coordination with traffic police along the ambulance route to clear a path for faster transit." />
            <FeatureCard icon={<Activity size={24} />} title="Live Vitals Streaming" description="Paramedics or bystanders can enter patient vitals via QR scan — streamed directly to the receiving hospital." />
            <FeatureCard icon={<MapPin size={24} />} title="Real-time Location Tracking" description="All stakeholders see the ambulance location in real time — hospital prepares, police clears, family tracks." />
            <FeatureCard icon={<Building2 size={24} />} title="Hospital Bed Management" description="Hospitals update bed availability in real time. Beds are auto-reserved when an ambulance locks a destination." />
            <FeatureCard icon={<Users size={24} />} title="Multi-Role Platform" description="Purpose-built interfaces for ambulance drivers, hospitals, traffic police, and system administrators." />
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-muted">From emergency call to hospital arrival — fully coordinated.</p>
          </div>

          <div className="space-y-0">
            <TimelineStep number="01" title="Emergency Trip Created" description="Ambulance driver opens the app, enters incident type and severity. A trip is created instantly." />
            <TimelineStep number="02" title="AI Selects Hospital" description="The system analyzes distance, bed availability, hospital specialty, and current load to recommend the best destination." />
            <TimelineStep number="03" title="Green Corridor Activated" description="Traffic police along the route are automatically notified and assigned to clear intersections." />
            <TimelineStep number="04" title="Live Coordination" description="Hospital receives patient vitals, prepares for arrival. Police track the ambulance. Family can follow progress." />
            <TimelineStep number="05" title="Patient Delivered" description="Ambulance arrives at a prepared hospital. Bed is ready. Medical team has vitals. Every second was optimized." last />
          </div>
        </div>
      </section>

      {/* ─── Stakeholders ─── */}
      <section id="stakeholders" className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Every Stakeholder</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StakeholderCard icon="🚑" role="Ambulance Drivers" features={["One-tap emergency trip creation", "AI hospital recommendations", "Turn-by-turn navigation", "QR code for paramedic vitals"]} />
            <StakeholderCard icon="🏥" role="Hospitals" features={["Real-time bed management", "Incoming ambulance alerts", "Patient vitals preview", "Automatic bed reservation"]} />
            <StakeholderCard icon="🚔" role="Traffic Police" features={["Green corridor assignments", "Live ambulance tracking", "Route intersection mapping", "One-tap acknowledgment"]} />
            <StakeholderCard icon="⚙️" role="Administrators" features={["System-wide dashboard", "User & hospital management", "Trip analytics & reports", "Performance monitoring"]} />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join the Mission</h2>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Samay Sarathi is building India&apos;s emergency response infrastructure. Download the app and be part of a system that saves lives.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://samaysarathi.in/samaysarathi.apk" className="bg-white text-primary px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-white/90 transition flex items-center gap-2">
              <Download size={18} />
              Download for Android
            </a>
            <a href="mailto:contact@samaysarathi.in" className="border-2 border-white/30 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-white/10 transition flex items-center gap-2">
              <Phone size={18} />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Samay Sarathi" width={28} height={28} />
            <div>
              <span className="font-bold text-sm text-foreground">SAMAY SARATHI</span>
              <span className="text-xs text-muted ml-2">समय सारथी</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="https://github.com/Samay-Sarathi" className="hover:text-foreground transition">GitHub</a>
            <a href="mailto:contact@samaysarathi.in" className="hover:text-foreground transition">Contact</a>
            <a href="https://samaysarathi.in/samaysarathi.apk" className="hover:text-foreground transition">Download</a>
          </div>
          <p className="text-xs text-muted">© 2026 Samay Sarathi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function StatCard({ icon, value, label, color }: { icon: React.ReactNode; value: string; label: string; color: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-5">
      <div className={`${color} mb-2`}>{icon}</div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}

function FlowStep({ step, text, done, active }: { step: string; text: string; done?: boolean; active?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${done ? "bg-accent text-white" : active ? "bg-primary text-white animate-pulse" : "bg-border text-muted"}`}>
        {done ? "✓" : step}
      </div>
      <span className={`text-sm ${done ? "text-foreground" : active ? "text-primary font-medium" : "text-muted"}`}>{text}</span>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}

function TimelineStep({ number, title, description, last }: { number: string; title: string; description: string; last?: boolean }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{number}</div>
        {!last && <div className="w-0.5 h-full bg-border min-h-[60px]" />}
      </div>
      <div className="pb-10">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted mt-1 leading-relaxed max-w-lg">{description}</p>
      </div>
    </div>
  );
}

function StakeholderCard({ icon, role, features }: { icon: string; role: string; features: string[] }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-foreground mb-3">{role}</h3>
      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted">
            <span className="text-accent mt-0.5">●</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
