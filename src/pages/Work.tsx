import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Users, Target, Lightbulb, Presentation } from "lucide-react";
import { useState } from "react";
import sidewlkSite1 from "@/assets/sidewlk-site-1.jpg";
import sidewlkSite2 from "@/assets/sidewlk-site-2.jpg";
import sidewlkSite3 from "@/assets/sidewlk-site-3.jpg";
import sidewlkFloorplan from "@/assets/sidewlk-floorplan.png";
import sidewlkTeam from "@/assets/sidewlk-team.png";
import sidePresentsLogo from "@/assets/side-presents-logo.png";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Project Portfolio
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Some interesting projects I have worked on...
          </p>
        </div>
      </section>

      {/* Project Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-elegant">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src={sidePresentsLogo} 
                alt="SIDE Presents logo" 
                className="w-16 h-16 object-contain flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  SIDEWLK Brand Launch Strategy
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Strategic Marketing</Badge>
                  <Badge variant="outline">Brand Strategy</Badge>
                  <Badge variant="outline">Community Engagement</Badge>
                  <Badge variant="outline">Market Research</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Image Collage */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <img 
                  src={sidewlkTeam} 
                  alt="SIDEWLK project team" 
                  className="w-full h-40 object-cover rounded"
                />
                <img 
                  src={sidewlkSite2} 
                  alt="SIDEWLK venue entrance" 
                  className="w-full h-40 object-cover rounded"
                />
                <img 
                  src={sidewlkSite3} 
                  alt="SIDEWLK neighborhood" 
                  className="w-full h-40 object-cover rounded"
                />
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Client</p>
                  <p className="text-foreground font-medium">SIDE Presents (Dorchester, Boston)</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Course & University</p>
                  <p className="text-foreground font-medium">Strategic Marketing Management Capstone</p>
                  <p className="text-foreground font-medium">Northeastern University</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Timeline</p>
                  <p className="text-foreground font-medium">January - May 2025</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Team</p>
                  <p className="text-foreground font-medium">Team of 4</p>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Project Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Partnered with SIDE Presents, a community-focused event management company in Dorchester, Boston, to develop a comprehensive brand launch strategy for their new event space, SIDEWLK. The mission was to establish a distinct brand identity separate from the parent company and position SIDEWLK as Boston's next major creative hub.
                </p>
              </div>

              {/* Expandable Details */}
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium w-full justify-start">
                  <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  {isOpen ? 'Hide Details' : 'View Full Project Details'}
                </CollapsibleTrigger>
                
                <CollapsibleContent className="space-y-6 mt-6">
                  {/* Key Objectives */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Key Objectives
                    </h3>
                    <ul className="space-y-2 text-muted-foreground pl-5 list-disc">
                      <li>Develop a distinct brand identity for SIDEWLK, setting it apart from its parent company, SIDE Presents</li>
                      <li>Position SIDEWLK as Boston's premier creative hub and event destination</li>
                      <li>Create a strategic and actionable launch plan to introduce SIDEWLK to the Boston community</li>
                    </ul>
                  </div>

                  {/* My Contributions */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      My Contributions & Deliverables
                    </h3>
                    <ul className="space-y-3 text-muted-foreground pl-5 list-disc">
                      <li>
                        <span className="font-medium text-foreground">Community Analysis:</span> Conducted in-person site visits and community analysis in Dorchester to understand the local landscape, identify competitors, and pinpoint potential community partners
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Funding Strategy:</span> Researched funding opportunities and grants within the Boston area to develop a sustainable funding model for the new venue
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Engagement Planning:</span> Developed a strategic plan for events and community engagement to ensure local involvement and long-term success
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Brand Identity:</span> Created visual brand mockups, including a website and Instagram profile, to define and present the new SIDEWLK identity
                      </li>
                    </ul>
                  </div>

                  {/* Impact Section */}
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Presentation className="w-5 h-5 text-primary" />
                      Project Impact
                    </h3>
                    <p className="text-muted-foreground">
                      Delivered a comprehensive brand strategy that provided SIDE Presents with a clear roadmap for launching SIDEWLK as an independent creative hub. The project demonstrated the ability to balance strategic thinking with hands-on research, community engagement, and creative execution—bridging business objectives with cultural impact.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Work;