import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Laptop, 
  Users, 
  Brain,
  Trophy
} from "lucide-react";

const skillsData = [
  {
    category: "Technical Platforms",
    icon: Laptop,
    skills: ["Jira", "Confluence", "Apollo.io", "Power BI", "Power Automate"]
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Strategy", "User Empathy", "Stakeholder Management", "Communication"]
  },
  {
    category: "Domain Expertise",
    icon: Brain,
    skills: ["Aviation", "Insurance", "B2B SaaS", "IT Transformation", "Digital Automation"]
  }
];

import hkuBusinessLogo from "@/assets/hku-business-logo.jpg";
import cathayLogo from "@/assets/cathay-logo.png";

const achievements = [
  {
    logo: hkuBusinessLogo,
    title: "HKU Business School Future Leader Scholarship Programme Recipient",
    year: "2024-25",
    description: "Selected as one of the top 100 local undergraduates in HKU Business School to receive the scholarship."
  },
  {
    logo: cathayLogo,
    title: "Cathay Hackathon",
    year: "2024",
    description: "Participated in the Cathay Hackathon to develop innovative solutions for the aviation industry."
  }
];

const KeySkills = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A blend of technical proficiency, business acumen, and leadership capabilities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Achievements & Recognition
          </h3>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <img 
                    src={achievement.logo} 
                    alt={`${achievement.title} logo`}
                    className="w-16 h-16 object-contain flex-shrink-0 rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h4 className="text-lg font-bold text-foreground leading-tight flex-1">{achievement.title}</h4>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{achievement.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeySkills;
