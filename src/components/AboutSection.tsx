import { Scale, BookOpen, Users, Award } from "lucide-react";
import legacyImage from "@/assets/legacy-image.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Scale,
      title: "Judicial Institute",
      description: "Founded by Pt. Durga Lal Bardhar, recognized as a national-level jurist",
    },
    {
      icon: BookOpen,
      title: "Oldest Legal Library",
      description: "One of Rajasthan's most comprehensive legal libraries since 1950",
    },
    {
      icon: Users,
      title: "Multi-Generational",
      description: "Three generations of distinguished legal professionals",
    },
    {
      icon: Award,
      title: "People's Lawyer",
      description: "Dedicated to serving public interest and securing justice",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Welcome to{" "}
              <span className="text-primary">Bardhar & Bardhar Associates</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The history of the Bardhar family in the legal and public service arenas
                spans multiple generations, beginning in the mid-20th century. The family's
                influence is so significant that the late Pt. Durga Lal Bardhar is
                described not merely as an individual but as a{" "}
                <span className="text-primary font-semibold">"Judicial Institute"</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This powerful legacy, starting from the establishment of a well-known
                office featuring one of the oldest and most comprehensive legal libraries
                in Rajasthan, underpins the operations of the current firm. Our commitment
                to excellence, integrity, and public service continues to guide our
                practice today.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise spanning Revenue Law, Civil Law, Criminal Law, and more, we
                provide comprehensive legal solutions backed by decades of experience and a
                deep understanding of Rajasthan's legal landscape.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={legacyImage}
                  alt="Legal Library"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-3xl"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
