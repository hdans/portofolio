import MainLayout from './layouts/MainLayout'
import HeroSection from './components/hero/HeroSection'
import ProfileSection from './components/profile/ProfileSection'
import ExperienceSection from './components/experience/ExperienceSection'
import AwardsSection from './components/awards/AwardsSection'
import OrganizationSection from './components/organization/OrganizationSection'
import ProjectsSection from './components/projects/ProjectsSection'
import ContactSection from './components/contact/ContactSection'

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <ProfileSection />
      <ExperienceSection />o
      <AwardsSection />
      <OrganizationSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  )
}

export default App
