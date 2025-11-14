import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Globe, Heart } from "lucide-react";
import hkuCrest from "@/assets/hku-crest.jpg";
import northeasternSeal from "@/assets/northeastern-seal.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Bridging the gap between business vision and technical execution
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-bold text-foreground mb-6">My Journey</h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm Ian Chau, an aspiring Product Manager with a passion for leveraging technology to solve complex business problems. Currently pursuing my Bachelor of Business Administration in Business Analytics at The University of Hong Kong, I've complemented my academic foundation with hands-on experience in aviation, insurance, and tech startups.
              </p>

              <p>
                My journey into product management began with a fascination for how technology transforms industries. Through internships at Airport Authority Hong Kong, AXA, and leading tech companies, I've learned to navigate the crucial intersection between business stakeholders and technical teams—translating strategic vision into actionable product roadmaps.
              </p>

              <p>
                What sets me apart is my <strong>AI-native approach to product management</strong>. I don't just understand AI as a buzzword—I've built OCR models, developed RPA solutions with 90% accuracy, and presented AI strategy frameworks to C-level executives. I see AI as a tool to augment decision-making, automate workflows, and unlock new value propositions.
              </p>

              <p>
                As a <strong>Professional Scrum Master (PSM I)</strong>, I bring structured agile methodologies to every project. Whether facilitating daily stand-ups, managing product backlogs on Jira, or coordinating cross-functional dependencies across 60+ IT projects, I thrive in dynamic environments that demand both strategic thinking and hands-on execution.
              </p>

              <p>
                My experience spans <strong>aviation infrastructure transformation, insurance digitalization, fintech product development, and enterprise automation</strong>. This diversity has taught me to adapt quickly, communicate effectively across technical and non-technical audiences, and always focus on measurable business impact.
              </p>

              <p className="text-lg font-medium text-foreground">
                I'm actively seeking opportunities as a Business Analyst, Project Manager, Scrum Master, or Product Manager where I can combine my technical expertise with my passion for operational excellence and customer-centric innovation.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <img 
                    src={hkuCrest} 
                    alt="HKU logo" 
                    className="w-16 h-16 object-contain flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Bachelor of Business Administration
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">
                      The University of Hong Kong
                    </p>
                    <p className="text-muted-foreground">
                      Major: Business Analytics | Minors: Politics and Marketing
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="mt-2 md:mt-0">2022 - 2026</Badge>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <img 
                    src={northeasternSeal} 
                    alt="Northeastern University logo" 
                    className="w-16 h-16 object-contain flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Exchange Semester
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">
                      Northeastern University, Boston
                    </p>
                    <p className="text-muted-foreground">
                      Courses: Advertising, Marketing Management, International Relations, Cyberlaw
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="mt-2 md:mt-0">Jan - Apr 2025</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Award className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Certifications & Training</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    <a 
                      href="https://www.credly.com/badges/c0ec7b24-ef9c-4351-a777-5af41cbcebf6/public_url" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Professional Scrum Master I (PSM I)
                    </a>
                  </h3>
                  <p className="text-sm text-primary">Scrum.org</p>
                </div>
                <Badge variant="secondary">Jul 2024</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Certified in Scrum framework, agile methodologies, and team facilitation
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    <a 
                      href="https://www.coursera.org/account/accomplishments/verify/H6GTK23NPQSK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      AI Strategy and Governance
                    </a>
                  </h3>
                  <p className="text-sm text-primary">The Wharton School</p>
                </div>
                <Badge variant="secondary">Jun 2024</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                9-hour intensive course covering AI strategy, governance, and ethical implementation
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Languages & Interests */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Languages</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-foreground font-medium">Cantonese</p>
                  <p className="text-sm text-muted-foreground">Native proficiency</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">English</p>
                  <p className="text-sm text-muted-foreground">Professional proficiency</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Mandarin</p>
                  <p className="text-sm text-muted-foreground">Professional proficiency</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Basketball</Badge>
                <Badge variant="outline">Hiking</Badge>
                <Badge variant="outline">Movies</Badge>
                <Badge variant="outline">Social Sciences</Badge>
                <Badge variant="outline">AI & Technology</Badge>
                <Badge variant="outline">Aviation</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
