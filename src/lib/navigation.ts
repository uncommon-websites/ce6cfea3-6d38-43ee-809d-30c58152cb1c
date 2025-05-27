/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
        label: "Boost revenue with smarter tech assignments",
        href: "/use-cases/boost-revenue",
        image:
          "/generated/image-a-residential-hvac-technician-arriving-a.webp",
        description:
          "Send your best closer to top-dollar jobs—AI pinpoints which calls have the highest upsell potential and matches them with sales-focused technicians, raising your average ticket and flip rate without adding extra appointments.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Keep your board running when techs call out",
        href: "/use-cases/instant-reshuffle",
        image:
          "/generated/image-in-a-busy-office-environment-a-dispatche.webp",
        description:
          "A last-minute absence won’t wreck your day. Instantly reshuffle assignments and re-balance workloads, so you never leave revenue on the table or scramble to fill gaps.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Reduce callbacks and delight more customers",
        href: "/use-cases/reduce-callbacks",
        image:
          "/generated/image-an-electrician-standing-in-a-cozy-living.webp",
        description:
          "Proactively flag jobs at risk for delays or mistakes—AI catches the small details before they become big problems. Keep customers happy with fewer callbacks and on-time service they’ll remember.",
        showInNav: true,
        showInFooter: true
      }
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
