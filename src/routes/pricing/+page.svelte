<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Alejandro Torres",
      position: "Dispatch Manager",
      company: "ComfortWorks HVAC",
      quote:
        "Probook let us boost our average ticket by 14% in the first month without adding more techs or phones. Assigning the right job is now automatic, and our new dispatchers got up to speed way faster than before.",
      image: "/generated/image-portrait-of-a-hispanic-man-in-his-40s-wi.webp"
    },
    {
      name: "Tiana Franklin",
      position: "Operations Director",
      company: "Franklin Plumbing Group",
      quote:
        "We were hesitant because of the investment, but the ROI was real—Probook paid for itself in a few weeks. Managing twenty techs used to be chaotic, now it’s actually calm and we’re not missing high-value jobs anymore.",
      image: "/generated/image-portrait-of-a-black-woman-in-her-late-30.webp"
    },
    {
      name: "Kenji Yamamoto",
      position: "President",
      company: "BrightSpark Electric",
      quote:
        "I appreciate how simple it is for our team to use. Probook eliminated guesswork, gave me total visibility, and let us handle 30% more calls on busy days—no spreadsheets, no headaches.",
      image: "/generated/image-portrait-of-an-east-asian-man-in-his-50s.webp"
    }
  ]}
/>

<CallToAction
  title="Grow sales, not headcount"
  subtitle="Launch in 2 days—with real support, start seeing results in your first week."
  description="Probook makes dispatching effortless—boosting sales, tech efficiency, and customer satisfaction for home services companies. Book a demo and see why our users report a 12% sales lift and 19:1 tech-dispatch ratios—all with hands-on onboarding and 24/7 support."
  imageSrc="/generated/image-a-cheerful-home-services-dispatcher-in-a.webp"
  callsToAction={[
    {
      href: "/demo",
      label: "Book a demo",
      variant: "primary"
    },
    {
      href: "/contact",
      label: "Talk to our CEO",
      variant: "secondary"
    }
  ]}
/>

