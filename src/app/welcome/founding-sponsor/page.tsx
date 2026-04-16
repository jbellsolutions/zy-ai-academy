import WelcomePage from "../_components/WelcomePage";

export default function FoundingSponsorWelcome() {
  return (
    <WelcomePage
      tier="founding-sponsor"
      tierName="Founding Sponsor"
      includeMinecraft={true}
      includeVipCall={true}
      includeSponsorSection={true}
    />
  );
}
