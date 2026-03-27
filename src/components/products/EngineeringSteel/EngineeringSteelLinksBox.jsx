import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const engineeringSteelLinks = [
	{ label: 'EN3B - 080A15 070M20 Mild steel', href: '/products/en3b-080a15-070m20-mild-steel' },
	{ label: 'EN1A - 220M07 230M07', href: '/products/en1a-220m07-230m07' },
	{ label: 'EN1A LD - 220M07 PB 230M07 PB', href: '/products/en1a-ld-220m07-pb-230m07-pb' },
	{ label: 'EN8 - 080A42 080M40', href: '/products/en8-080a42-080m40' },
	{ label: 'EN9 - 070M55', href: '/products/en9-070m55' },
	{ label: 'EN14 - 150M19', href: '/products/en14-150m19' },
	{ label: 'EN16 - 605M36 606M36', href: '/products/en16-605m36-606m36' },
	{ label: 'EN19 - 708M40 709M40', href: '/products/en19-708m40-709m40' },
	{ label: 'EN24/EN24T - 817M40', href: '/products/en24-en24t-817m40' },
	{ label: 'EN36 - 655M13', href: '/products/en36-655m13' },
	{ label: 'S690QL', href: '/products/s690ql' },
	{ label: 'Alloy24', href: '/products/alloy24' },
	{ label: 'Chrome Plated Steel Bar', href: '/products/chrome-plated-steel-bar' },
	{ label: 'Steel Hardness conversions', href: '/products/steel-hardness-conversions' },
];

const EngineeringSteelLinksBox = () => {
	const location = useLocation();

	return (
		<section className="px-4 sm:px-6 lg:px-8 py-10 bg-slate-50">
			<div className="max-w-7xl mx-auto border border-slate-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm">
				<div className="mb-5">
					<h2 className="text-2xl md:text-3xl font-bold text-slate-900">Engineering Steel Pages</h2>
					<p className="text-sm md:text-base text-slate-600 mt-2">
						Browse all Engineering Steel grades and related pages from one place.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{engineeringSteelLinks.map((item) => {
						const isActive = location.pathname === item.href;

						return (
							<Link
								key={item.href}
								to={item.href}
								className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${isActive
									? 'border-primary bg-primary/10 text-primary'
									: 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
									}`}
							>
								{item.label}
							</Link>
						);
					})}
				</div>

				<div className="mt-6 flex justify-center">
					<Link
						to="/menu-data-sheet"
						className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
					>
						Explore More
					</Link>
				</div>
			</div>
		</section>
	);
};

export default EngineeringSteelLinksBox;
