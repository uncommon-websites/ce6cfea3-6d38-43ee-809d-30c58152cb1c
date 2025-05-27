<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
  centered={false}
  title="Right job. Right tech. Every time."
  subtitle="Probook helps dispatchers move faster, boost sales, and handle more techs—without the headache."
  customers={[
    {
      name: 'Brandon Lee',
      position: 'HVAC Dispatcher',
      imageSrc: '/generated/image-a-cheerful-male-hvac-dispatcher-sitting-.webp',
    },
    {
      name: 'Michelle Nguyen',
      position: 'Plumbing Dispatcher',
      imageSrc: '/generated/image-a-confident-female-plumbing-dispatcher-s.webp',
    },
    {
      name: 'David Morales',
      position: 'Electrical Service Manager',
      imageSrc: '/generated/image-a-middle-aged-male-electrical-service-ma.webp',
    },
    {
      name: 'Samantha Torres',
      position: 'Home Services Coordinator',
      imageSrc: '/generated/image-a-young-female-home-services-coordinator.webp',
    },
    {
      name: 'Gary Foster',
      position: 'Sewer Company Dispatcher',
      imageSrc: '/generated/image-a-smiling-male-dispatcher-for-a-sewer-co.webp',
    },
  ]}
/>
<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		"https://logo.clearbit.com/ars.com",
		"https://logo.clearbit.com/benfranklinplumbing.com",
		"https://logo.clearbit.com/rooterhero.com",
		"https://logo.clearbit.com/mistersparky.com"
	]}
/>

<Summary
	title="What we do"
	text="Probook is an AI dispatching solution for home services companies. It optimizes technician assignments, boosts sales and efficiency, and helps deliver smoother customer service every day."
/>

<Testimonials
	testimonials={[
		{
			name: "Martina Hanley",
			position: "Director of Operations",
			company: "Lion Home Service",
			quote:
				"With Probook, I finally have time for everything I used to push off. Our dispatchers save nearly an hour per day and customers get callbacks faster than ever. The platform paid for itself in the first month.",
			image: "/generated/image-a-female-hvac-dispatcher-with-a-warm-and.webp"
		},
		{
			name: "Aidan Clark",
			position: "Service Manager",
			company: "Flow Smart Plumbing",
			quote:
				"Before Probook, a single absence threw our whole schedule off. Now, job assignments update instantly when plans change. No more panic when someone calls in sick—risk just isn’t a factor anymore.",
			image: "/generated/image-a-male-plumbing-service-manager-exuding-.webp"
		},
		{
			name: "Barrett Young",
			position: "Supervisor",
			company: "VoltGuard Electric",
			quote:
				"Probook revealed which techs drive results and which jobs are losing money. We improved our billable hour efficiency by 21% and cut costs without sacrificing quality service.",
			image: "/generated/image-a-male-electrician-supervisor-focused-an.webp"
		}
	]}
/>

<Features
	generating
	title="Features"
	subtitle="Some features"
	features={[
		{
			title: "Streamlined Workflows",
			description:
				"Automate repetitive tasks and connect systems to improve productivity with our industry-leading 87% time savings."
		},
		{
			title: "Data Analysis",
			description:
				"Extract meaningful insights from your data with powerful analytical tools backed by proprietary AI algorithms that are 3x more accurate than competitors."
		},
		{
			title: "Secure Collaboration",
			description:
				"Work together seamlessly while maintaining strict data privacy standards with our zero-knowledge architecture and military-grade encryption."
		}
	]}
/>

<UseCases
  title="Use cases"
  subtitle="Real-world applications for home service leaders"
  useCases={[
    {
      title: "Boost revenue with smarter tech assignments",
      description: "Send your best closer to top-dollar jobs—AI pinpoints which calls have the highest upsell potential and matches them with sales-focused technicians, raising your average ticket and flip rate without adding extra appointments.",
      image: "/generated/image-a-residential-hvac-technician-arriving-a.webp",
      link: {
        href: "/use-cases/boost-revenue",
        label: "Learn more"
      }
    },
    {
      title: "Keep your board running when techs call out",
      description: "A last-minute absence won’t wreck your day. Instantly reshuffle assignments and re-balance workloads, so you never leave revenue on the table or scramble to fill gaps.",
      image: "/generated/image-in-a-busy-office-environment-a-dispatche.webp",
      link: {
        href: "/use-cases/instant-reshuffle",
        label: "Learn more"
      }
    },
    {
      title: "Reduce callbacks and delight more customers",
      description: "Proactively flag jobs at risk for delays or mistakes—AI catches the small details before they become big problems. Keep customers happy with fewer callbacks and on-time service they’ll remember.",
      image: "/generated/image-an-electrician-standing-in-a-cozy-living.webp",
      link: {
        href: "/use-cases/reduce-callbacks",
        label: "Learn more"
      }
    }
  ]}
/>

<AboutTeaser />
<CallToAction
  title="See Probook in action"
  subtitle="Give your dispatch team superpowers"
  description="See how Probook helps home service companies optimize assignments and drive higher sales—while making dispatchers’ days easier. Book a live demo or connect for details."
  imageSrc="/generated/image-a-cheerful-home-services-manager-wearing.webp"
  callsToAction={[
    {
      href: "/book-demo",
      label: "Book a live demo",
      variant: "primary"
    },
    {
      href: "/contact",
      label: "Contact sales",
      variant: "secondary"
    }
  ]}
/>
