import { ChefProfiles } from "@/components/restaurant/chef-profiles";
import { ChefTips } from "@/components/restaurant/chef-tips";

export default function ChefsPage() {
  return (
    <main className="pt-24">
      <ChefProfiles />
      <ChefTips />
    </main>
  );
}
