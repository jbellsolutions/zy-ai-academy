import WelcomePage from "../_components/WelcomePage";

export default function VipWelcome() {
  return (
    <WelcomePage
      tier="vip"
      tierName="VIP Family"
      includeMinecraft={true}
      includeVipCall={true}
      includeSponsorSection={false}
    />
  );
}
