<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
  {
    title: "Direct impact",
    description: "Shape how home service companies run. Ship work that actually gets used.",
    icon: IconBriefcase
  },
  {
    title: "Personal growth",
    description: "Early team = autonomy, learning, fast career growth, and real ownership.",
    icon: IconUsers
  },
  {
    title: "Legendary support",
    description: "Work closely with the CEO and industry leaders. We invest in each other with transparency, trust, and clear feedback.",
    icon: IconHeart
  }
];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "Sofia Martinez",
    position: "Customer Support Specialist",
    company: "Support Team",
    quote:
      "From day one, I felt welcomed and supported by teammates and leadership. Everyone’s ideas matter here, and the encouragement I receive helps me do my best work every day.",
    image: "/generated/image-a-hispanic-woman-with-a-warm-smile-weari.webp"
  },
  {
    name: "Jamal Robinson",
    position: "Software Engineer",
    company: "Engineering Team",
    quote:
      "Probook is the best place I’ve ever worked to grow as an engineer. The projects push you, but there’s always someone ready to help. I learn nonstop and actually influence big decisions.",
    image: "/generated/black-male-software-engineer-happy-office.webp"
  },
  {
    name: "Emily Carter",
    position: "Product Manager",
    company: "Product Team",
    quote:
      "We empower each other and celebrate wins big and small. Leadership trusts us to take ownership, and the energy on the team is positive and motivating. It’s a great place to lead and learn.",
    image: "/generated/white-woman-product-manager-office-tablet.webp"
  }
];

	const processSteps = [
  {
    step: 1,
    title: "Submit your application",
    description:
      "Use our short form (no cover letter required). Tell us a bit about yourself and why you want to join Probook."
  },
  {
    step: 2,
    title: "Meet the team",
    description: "If it's a fit, we'll reach out within 5 days for a friendly intro call. Interviews are conversational and focused on what you can do, not just your resume."
  },
  {
    step: 3,
    title: "Show your skills",
    description: "Tackle a real world challenge or work session related to the role. Get a feel for how we work and see if it's the right fit for you."
  },
  {
    step: 4,
    title: "Decision & feedback",
    description: "You'll get a response, either way, fast. No ghostingjust quick, clear feedback, and you can ask us anything."
  }
];

	const values = [
  {
    icon: IconHeart,
    title: "We show up",
    description: "We launch every new customer in person. Weekly check-ins and direct feedback are just how we work."
  },
  {
    icon: IconUsers,
    title: "We keep it real",
    description: "No ego, no layers. We say what we mean, share wins and misses, and everyone can talk to the CEO."
  },
  {
    icon: IconGlobe,
    title: "We care deeply",
    description: "We build with dispatchers, for dispatchers. Our team supports, teaches, and learns from each other every day."
  }
];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Help shape the future, together"
	subtitle="Work side-by-side with our CEO, grow fast, and make a real impact for customers"
	imageSrc="/generated/image-a-group-of-diverse-office-employees-gath.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Work with industry leaders. Grow fast. Make a real difference for home service companies across the country." />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} subtitle="Were a tight-knit team where everyone has a voice, feedback moves fast, and customer impact is what matters. Work with people who care, learn from dispatchers in the field, and be supported every step of the way." />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
