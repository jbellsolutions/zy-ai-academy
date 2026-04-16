import WelcomePage from "../_components/WelcomePage";

export default function HomeschoolHeroWelcome() {
  return (
    <WelcomePage
      tier="homeschool-hero"
      tierName="Homeschool Hero"
      includeMinecraft={true}
      includeVipCall={false}
      includeSponsorSection={false}
    />
  );
}
