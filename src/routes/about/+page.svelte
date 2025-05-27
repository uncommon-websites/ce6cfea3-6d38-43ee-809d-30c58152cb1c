<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Operational excellence",
    description: "We build practical solutions that work at scale—focusing on high standards, discipline, and measurable results."
  },
  {
    title: "Relentless support",
    description: "2-minute response times and 24/7 availability are table stakes. We solve problems fast and never leave customers hanging—ever."
  },
  {
    title: "We're present in person",
    description: "Hands-on onboarding and weekly check-ins mean every idea, issue, or success feeds straight back to the team and the product."  
  }
];
</script>

<SecondaryHero
  title="Send the right tech, every time"
  subtitle="AI-powered dispatching that boosts sales, cuts wasted drive time, and keeps customers happy"
  imageSrc="/generated/image-a-friendly-team-in-a-modern-office-setti.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Probook began when we saw home service teams struggling to match technicians to the right jobs. Too many decisions were made on gut instinct, leading to lost revenue and missed opportunities. We believed dispatching could be smarter—and that every dispatcher deserved better tools.",
		"Built by dispatchers, for dispatchers, Probook was created with real-world challenges in mind. We don’t just hand over software; we join companies onsite for launch and stay available around the clock. Our mission is to partner with teams, making sure every dispatcher feels confident and supported from day one.",
		"Today, Probook helps leading home service companies grow sales, train new hires faster, and handle more calls with fewer headaches. We stand out by delivering fast, personal support and real, measurable results. When dispatchers succeed, everyone wins."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Our team."
  subtitle="Your partners in dispatch innovation."
  stakeholders={[
    {
      name: "George Eliadis",
      position: "Founder & CEO",
      bio: "George helps home service companies optimize dispatch and maximize results.",
      image: "/generated/image-a-professional-headshot-of-george-eliadi.webp"
    }
  ]}
/>

<StakeholderGrid
	stakeholderType="investor"
	title="Backed by the best."
	subtitle="Point Nine, TSIC and others"
	stakeholders={[
		{
			name: "Point Nine Capital",
			image: "https://cdn.brandfetch.io/pointnine.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7"
		},
		{
			name: "TSIC Ventures",
			image: "https://cdn.brandfetch.io/tiny.vc/w/400/h/400/logo?c=1a2b3c4d5e"
		},
		{
			name: "Sequoia Capital",
			image: "https://cdn.brandfetch.io/sequoiacap.com/w/400/h/400/logo"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
  title="Help lead real change in home services"
  subtitle="Work hands-on with leadership, customers, and a small team that moves fast."
  description="If you want to make your mark, shape powerful tools, and support the people who keep homes running, we want to hear from you. Reach out directly or apply if this sounds like you."
  callsToAction={[
    { href: '/careers', label: 'View open roles', variant: 'primary' },
    { href: 'mailto:ceo@probook.com', label: 'Contact our CEO', variant: 'secondary' }
  ]}
  imageSrc="/generated/image-a-diverse-team-of-home-services-startup-.webp"
/>
