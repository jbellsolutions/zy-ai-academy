import WelcomePage from "../_components/WelcomePage";

export default function EarlyBirdWelcome() {
  return (
    <WelcomePage
      tier="early-bird"
      tierName="Early Bird"
      includeMinecraft={false}
      includeVipCall={false}
      includeSponsorSection={false}
    />
  );
}
