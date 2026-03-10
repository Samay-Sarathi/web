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
  Mail,
  Zap,
  Heart,
  Globe,
  TrendingUp,
  Target,
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
            <a href="#vision" className="hidden md:block text-sm text-muted hover:text-foreground transition">
              Vision
            </a>
            <a href="#platform" className="hidden md:block text-sm text-muted hover:text-foreground transition">
              Platform
            </a>
            <a href="#impact" className="hidden md:block text-sm text-muted hover:text-foreground transition">
              Impact
            </a>
            <a href="#ecosystem" className="hidden md:block text-sm text-muted hover:text-foreground transition">
              Ecosystem
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
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted mb-6">
              <Shield size={14} className="text-primary" />
              Reimagining India&apos;s Emergency Response Infrastructure
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              The Golden Hour
              <br />
              <span className="text-primary">Shouldn&apos;t Be a Gamble.</span>
            </h1>

            <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
              Every year, thousands die not because hospitals couldn&apos;t save them —
              but because they didn&apos;t reach in time. Samay Sarathi is building the
              operating system for emergency healthcare, connecting every ambulance,
              hospital, and traffic signal into one intelligent network.
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
                href="#vision"
                className="border-2 border-border text-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-surface transition flex items-center gap-2"
              >
                Our Vision
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
                <StatCard icon={<Clock size={20} />} value="< 8 min" label="Target Response Time" color="text-primary" />
                <StatCard icon={<Building2 size={20} />} value="AI-Driven" label="Hospital Matching" color="text-accent" />
                <StatCard icon={<MapPin size={20} />} value="Real-time" label="Live Coordination" color="text-accent" />
                <StatCard icon={<Siren size={20} />} value="Automated" label="Green Corridors" color="text-primary" />
              </div>

              <div className="bg-white rounded-2xl border border-border p-6 mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Emergency in Progress</span>
                </div>
                <div className="space-y-3">
                  <FlowStep step="1" text="Ambulance dispatched — vitals being recorded" done />
                  <FlowStep step="2" text="AI matched to hospital with cardiac ICU beds" done />
                  <FlowStep step="3" text="3 traffic police clearing route intersections" done />
                  <FlowStep step="4" text="Hospital trauma team on standby" active />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-muted/40" />
        </div>
      </section>

      {/* ─── The Problem ─── */}
      <section className="py-20 px-6 bg-foreground text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            India&apos;s Emergency Response is Broken
          </h2>
          <p className="mt-4 text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
            The system today is manual, disconnected, and slow. Ambulance drivers call hospitals one by one.
            Traffic doesn&apos;t clear. Hospitals don&apos;t know what&apos;s coming. Patients pay the price.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-accent">30%</div>
              <p className="mt-2 text-white/50 text-sm">of trauma deaths are preventable with faster response</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-accent">68%</div>
              <p className="mt-2 text-white/50 text-sm">of ambulances lack real-time hospital coordination</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-accent">45 min</div>
              <p className="mt-2 text-white/50 text-sm">average urban emergency response time in India</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vision ─── */}
      <section id="vision" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              We&apos;re Not Building an App.
              <br />
              <span className="text-primary">We&apos;re Building Infrastructure.</span>
            </h2>
            <p className="mt-4 text-muted max-w-3xl mx-auto text-lg">
              Samay Sarathi is the coordination layer that sits between ambulances, hospitals,
              and city traffic systems — turning a fragmented emergency chain into a single,
              intelligent, real-time network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <VisionCard
              icon={<Zap size={28} />}
              title="Today"
              subtitle="Smart Ambulance Coordination"
              description="Real-time hospital matching, green corridor automation, live vitals streaming. One app for every stakeholder in the emergency chain."
            />
            <VisionCard
              icon={<TrendingUp size={28} />}
              title="Tomorrow"
              subtitle="City-Wide Emergency Network"
              description="Government dashboards for district and state-level analytics. Integration with 108/112 dispatch. Predictive ambulance positioning using historical data."
            />
            <VisionCard
              icon={<Globe size={28} />}
              title="The Future"
              subtitle="National Health Infrastructure"
              description="Smart traffic signal integration. Cross-state hospital networks. AI-driven resource allocation. The backbone of India's emergency healthcare."
            />
          </div>
        </div>
      </section>

      {/* ─── Platform ─── */}
      <section id="platform" className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Platform
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Six core capabilities that transform how emergencies are handled.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={<Target size={24} />} title="AI Hospital Matching" description="Analyzes distance, bed availability, specialty, and real-time load to route patients to the optimal hospital — not just the nearest one." />
            <FeatureCard icon={<Siren size={24} />} title="Green Corridor Engine" description="Automatically identifies intersections along the route and dispatches traffic police to clear them before the ambulance arrives." />
            <FeatureCard icon={<Activity size={24} />} title="Live Vitals Pipeline" description="Anyone at the scene can scan a QR code and enter patient vitals. Data streams to the hospital in real time — doctors prepare before arrival." />
            <FeatureCard icon={<MapPin size={24} />} title="Real-time Command View" description="Every stakeholder — driver, hospital, police, admin — sees the full picture in real time. No phone calls. No guesswork." />
            <FeatureCard icon={<Building2 size={24} />} title="Hospital Capacity Network" description="Live bed counts across the hospital network. Beds auto-reserve on ambulance lock-in. No more 'sorry, we're full' at the door." />
            <FeatureCard icon={<Users size={24} />} title="Multi-Role Architecture" description="One platform, four interfaces. Each role sees exactly what they need. Built for the chaos of real emergencies." />
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="impact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">From Dial to Doorstep</h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              What happens in those critical minutes between an emergency and hospital arrival — and how Samay Sarathi orchestrates every second.
            </p>
          </div>

          <div className="space-y-0">
            <TimelineStep number="01" title="Emergency Detected" description="Driver launches trip with one tap. Incident type, severity, and location are captured instantly. The clock starts." />
            <TimelineStep number="02" title="Intelligence Kicks In" description="Our AI engine evaluates every hospital in range — beds, specialty, distance, current load — and recommends the optimal destination in under 2 seconds." />
            <TimelineStep number="03" title="The City Responds" description="Traffic police along the route receive automatic corridor assignments. Intersections are cleared before the ambulance arrives. Hospital reserves a bed and alerts the trauma team." />
            <TimelineStep number="04" title="Vitals in Transit" description="A paramedic or bystander scans the trip QR code and enters patient vitals. Blood pressure, pulse, consciousness — streamed live to the receiving hospital." />
            <TimelineStep number="05" title="Prepared Arrival" description="The ambulance arrives at a hospital that's ready — bed reserved, doctors briefed, vitals reviewed. No paperwork at the door. Treatment starts immediately." last />
          </div>
        </div>
      </section>

      {/* ─── Ecosystem ─── */}
      <section id="ecosystem" className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Ecosystem</h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Every role in the emergency chain gets a purpose-built experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StakeholderCard icon="🚑" role="Ambulance Drivers" features={["One-tap emergency trips", "AI hospital recommendations", "Live navigation with corridor status", "QR-based paramedic handoff"]} />
            <StakeholderCard icon="🏥" role="Hospitals" features={["Real-time bed dashboard", "Incoming ambulance alerts with ETA", "Live patient vitals preview", "Automatic bed reservation"]} />
            <StakeholderCard icon="🚔" role="Traffic Police" features={["Auto-assigned corridor duty", "Live ambulance tracking on map", "One-tap acknowledge & clear", "Route intersection mapping"]} />
            <StakeholderCard icon="🏛️" role="Government (Coming Soon)" features={["District & state dashboards", "Response time analytics", "Hospital performance metrics", "Resource allocation insights"]} />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart size={40} className="mx-auto mb-6 text-white/80" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Every Second Saved is a Life Earned
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            We&apos;re on a mission to ensure no one dies because an ambulance couldn&apos;t
            find the right hospital, or traffic wouldn&apos;t clear. Join us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://samaysarathi.in/samaysarathi.apk" className="bg-white text-primary px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-white/90 transition flex items-center gap-2">
              <Download size={18} />
              Download for Android
            </a>
            <a href="mailto:contact@samaysarathi.in" className="border-2 border-white/30 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-white/10 transition flex items-center gap-2">
              <Mail size={18} />
              contact@samaysarathi.in
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
            <a href="https://github.com/Samay-Sarathi" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">GitHub</a>
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

function VisionCard({ icon, title, subtitle, description }: { icon: React.ReactNode; title: string; subtitle: string; description: string }) {
  return (
    <div className="bg-surface rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-300">
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">{icon}</div>
      <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{title}</div>
      <h3 className="text-xl font-bold text-foreground mb-3">{subtitle}</h3>
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
