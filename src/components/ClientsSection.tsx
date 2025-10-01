"use client"

import { Building2 } from "lucide-react"
import { useMemo, useState } from "react"

const ClientsSection = () => {
  const [errorUrls, setErrorUrls] = useState<Set<string>>(new Set())

  const logos = useMemo(
    () => [
      { name: "Jaipur Vidyut Vitran Nigam Limited (JVVNL)", logo: "https://jvvnl.org/images/logo.png" },
      {
        name: "Rajasthan Public Service Commission (RPSC)",
        logo: "https://rpsc.rajasthan.gov.in/images/rpsc-logo.png",
      },
      { name: "Punjab National Bank (PNB)", logo: "https://www.pnbindia.in/images/PNB-Logo.png" },
      { name: "Oriental Insurance Company Ltd", logo: "https://orientalinsurance.org.in/documents/39423/0/logo.png" },
      { name: "Central Electricity Regulation Commission (CERC)", logo: "https://cercind.gov.in/images/cerc-logo.png" },
      { name: "TATA GY Batteries", logo: "https://www.tatagreenbatteries.com/images/tata-green-logo.png" },
      { name: "SBI General Insurance", logo: "https://www.sbigeneral.in/portal/sbi-general-insurance-logo.png" },
      {
        name: "Reliance General Insurance",
        logo: "https://www.reliancegeneral.co.in/Common/Images/reliance-general-insurance-logo.png",
      },
      {
        name: "Universal Sompo General Insurance",
        logo: "https://www.universalsompo.com/images/universal-sompo-logo.png",
      },
      { name: "Pandit Deen Dayal Upadhyay University Sikar", logo: "https://www.pduuds.ac.in/images/logo.png" },
      {
        name: "Lachoo Memorial College of Science and Technology",
        logo: "https://www.lachoo.edu.in/images/lachoo-logo.png",
      },
      {
        name: "TATA Motors",
        logo: "https://www.tatamotors.com/wp-content/themes/tata-motors/img/tata-motors-logo.png",
      },
      {
        name: "Jaipur Development Authority (JDA)",
        logo: "https://jda.urban.rajasthan.gov.in/content/dam/doitassets/jda/images/jda-logo.png",
      },
      { name: "HG Infra Engineering", logo: "https://www.hginfra.com/images/hg-infra-logo.png" },
      { name: "Varun Beverages", logo: "https://www.varunbeverages.com/images/varun-beverages-logo.png" },
      { name: "Programmers Pvt Ltd", logo: "https://www.programmers.io/images/logo.png" },
    ],
    [],
  )

  const handleError = (url: string) => {
    setErrorUrls((prev) => {
      const next = new Set(prev)
      next.add(url)
      return next
    })
  }

  // Helper to render one row track (duplicated for seamless loop)
  const LogoRow = ({
    items,
    direction = "left",
    duration = 40,
    ariaLabel,
  }: {
    items: { name: string; logo: string }[]
    direction?: "left" | "right"
    duration?: number // seconds
    ariaLabel?: string
  }) => {
    const animationClass = direction === "left" ? "animate-logo-left" : "animate-logo-right"

    return (
      <div className="logo-marquee py-4">
        <div
          className={`logo-track ${animationClass}`}
          style={{ animationDuration: `${duration}s` }}
          aria-label={ariaLabel}
        >
          {[...items, ...items].map((client, idx) => {
            // Mark the second copy as aria-hidden to avoid duplication for screen readers
            const isDuplicate = idx >= items.length
            const failed = errorUrls.has(client.logo)

            return (
              <div
                key={`${client.logo}-${idx}`}
                className="flex items-center justify-center h-24 w-[180px] rounded-md"
                aria-hidden={isDuplicate}
              >
                {!failed ? (
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    className="max-h-12 w-auto object-contain logo-img grayscale"
                    onError={() => handleError(client.logo)}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />
                    <span className="sr-only">{`${client.name} logo unavailable`}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Create three rows. We can vary starting slices for subtle variety.
  const row1 = logos
  const row2 = [...logos.slice(8), ...logos.slice(0, 8)]
  const row3 = [...logos.slice(4), ...logos.slice(0, 4)]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Our <span className="text-primary">Esteemed Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Representing Industry Leaders and Government Institutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>

          {/* Three-row alternating marquee */}
          <div className="space-y-6">
            <LogoRow items={row1} direction="left" duration={46} ariaLabel="Top row of client logos scrolling left" />
            <LogoRow
              items={row2}
              direction="right"
              duration={36}
              ariaLabel="Middle row of client logos scrolling right"
            />
            <LogoRow
              items={row3}
              direction="left"
              duration={52}
              ariaLabel="Bottom row of client logos scrolling left"
            />
          </div>

          {/* Trust Statement */}
          <div className="mt-14 text-center">
            <p className="text-lg text-muted-foreground italic max-w-4xl mx-auto">
              "Trusted by leading corporations, financial institutions, government bodies, and educational organizations
              across Rajasthan and beyond."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
