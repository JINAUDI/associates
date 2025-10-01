import { History, Users, BookOpen, Award, Heart, Scale } from "lucide-react";
import legacyImage from "@/assets/legacy-image.jpg";

const LegacySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">Three Generations</span> of Legal Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A legacy of public service and commitment to justice since 1950
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>

          {/* Founder Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <History className="w-8 h-8 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">
                    Founded on the Vision of a Judicial Institute
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">Pt. Durga Lal Bardhar</span>, the
                  patriarch of the family, was renowned as a national-level jurist and famously
                  known as the <span className="text-primary">"People's Lawyer"</span>. His
                  dedication to serving the public through law was unparalleled.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Entering law as India gained independence, he passionately devoted himself to the
                  implementation of the Land Protection Act. He organized and prepared petitions to
                  secure land rights for thousands of farmers, earning his legendary title.
                </p>
                <div className="bg-secondary/30 border border-border rounded-lg p-6">
                  <p className="text-muted-foreground italic">
                    "Practicing law in the court is more honorable and a better means of serving the
                    public with legal knowledge than politics."
                  </p>
                  <p className="text-sm text-primary font-medium mt-2">
                    - Pt. Durga Lal Bardhar
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={legacyImage}
                  alt="Legacy"
                  className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-3xl"></div>
              </div>
            </div>
          </div>

          {/* Legacy Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-2">
                A Judicial Institute
              </h4>
              <p className="text-muted-foreground">
                Approximately 400 lawyers trained by Pt. Durga Lal Bardhar went on to hold
                judicial posts, including judges in various courts and the Rajasthan High Court.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-2">
                Literary Contributions
              </h4>
              <p className="text-muted-foreground">
                His books and collected digests on Revenue Law are considered superior references
                and continue to guide legal professionals today.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-2">Political Service</h4>
              <p className="text-muted-foreground">
                Served as MLA for Hawamahal constituency (1962-1972), defeating political
                heavyweights and serving on the Law Commission.
              </p>
            </div>
          </div>

          {/* Public Service Commitment */}
          <div className="bg-secondary/30 border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Commitment to Public Service & Social Responsibility
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Mediation Services</h5>
                    <p className="text-sm text-muted-foreground">
                      Partners serve as trained mediators in Jaipur District, helping resolve
                      disputes amicably.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Legal Aid</h5>
                    <p className="text-sm text-muted-foreground">
                      Active members of legal aid committees, providing pro-bono services to those
                      in need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Charitable Work</h5>
                    <p className="text-sm text-muted-foreground">
                      Trustees of Can Care Trust, sponsoring education for orphan children, and
                      leading Banipark Dharmansanthan for medical facilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Education</h5>
                    <p className="text-sm text-muted-foreground">
                      Management committee members of educational institutions, fostering legal
                      education and development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-12">
              Our Journey Through Time
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              <div className="space-y-12">
                {[
                  {
                    year: "1950",
                    title: "Foundation",
                    description:
                      "Pt. Durga Lal Bardhar establishes the firm with one of Rajasthan's oldest legal libraries",
                  },
                  {
                    year: "1962-1972",
                    title: "Political Service",
                    description: "Pt. Durga Lal serves as MLA for Hawamahal constituency",
                  },
                  {
                    year: "1972-1976",
                    title: "Second Generation",
                    description:
                      "Gyaneshwar and Giriraj Bardhar join the practice, continuing the legacy",
                  },
                  {
                    year: "2011",
                    title: "Third Generation",
                    description:
                      "Kapil Bardhar brings modern expertise, establishing Bardhar & Bardhar Associates",
                  },
                  {
                    year: "2025",
                    title: "Present Day",
                    description:
                      "75+ years of combined experience serving clients across Rajasthan",
                  },
                ].map((event, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <h4 className="text-2xl font-bold text-primary mb-2">{event.year}</h4>
                      <h5 className="text-xl font-semibold text-foreground mb-2">
                        {event.title}
                      </h5>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                    <div className="relative">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
