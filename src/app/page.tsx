import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            <ContactSection />
        </main>
    );
}
