import WelcomePage from "../_components/WelcomePage";

export default function FoundingFamilyWelcome() {
  return (
    <WelcomePage
      tier="founding-family"
      tierName="Founding Family"
      includeMinecraft={true}
      includeVipCall={false}
      includeSponsorSection={false}
    />
  );
}
