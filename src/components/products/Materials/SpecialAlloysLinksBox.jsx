import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const specialAlloysLinks = [
	{ label: 'Inconel 600', href: '/products/inconel-600' },
	{ label: 'Inconel 601', href: '/products/inconel-601' },
	{ label: 'Inconel 625', href: '/products/inconel-625' },
	{ label: 'Inconel 718', href: '/products/inconel-718' },
	{ label: 'Inconel X-750', href: '/products/inconel-x-750' },
	{ label: 'Incoloy 800/H/HT', href: '/products/incoloy-800-h-ht' },
	{ label: 'Incoloy 825', href: '/products/incoloy-825' },
	{ label: 'Incoloy 925', href: '/products/incoloy-925' },
	{ label: 'Monel 400', href: '/products/monel-400' },
	{ label: 'Monel K500', href: '/products/monel-k500' },
	{ label: 'Hastelloy B / B2 / B3', href: '/products/hastelloy-b-b2-b3' },
	{ label: 'Hastelloy C22', href: '/products/hastelloy-c22' },
	{ label: 'Hastelloy C276', href: '/products/hastelloy-c276' },
	{ label: 'Hastelloy C2000', href: '/products/hastelloy-c2000' },
	{ label: 'Hastelloy X', href: '/products/hastelloy-x' },
	{ label: 'Nickel 200', href: '/products/nickel-200' },
	{ label: 'Nickel 201', href: '/products/nickel-201' },
	{ label: '254 SMO', href: '/products/254-smo' },
	{ label: 'Alloy 20', href: '/products/alloy-20' },
	{ label: '904L Stainless Steel', href: '/products/904l-stainless-steel' },
	{ label: 'Titanium Grade 1', href: '/products/titanium-grade-1' },
	{ label: 'Titanium Grade 2', href: '/products/titanium-grade-2' },
	{ label: 'Titanium Grade 3', href: '/products/titanium-grade-3' },
	{ label: 'Titanium Grade 4', href: '/products/titanium-grade-4' },
	{ label: 'Titanium Grade 5', href: '/products/titanium-grade-5' },
	{ label: 'Titanium Grade 6', href: '/products/titanium-grade-6' },
	{ label: 'Titanium Grade 7', href: '/products/titanium-grade-7' },
	{ label: 'Titanium Grade 9', href: '/products/titanium-grade-9' },
	{ label: 'Titanium Grade 11', href: '/products/titanium-grade-11' },
	{ label: 'Titanium Grade 12', href: '/products/titanium-grade-12' },
	{ label: 'Copper Nickel 90/10', href: '/products/copper-nickel-90-10' },
	{ label: 'Copper Nickel 70/30', href: '/products/copper-nickel-70-30' },
	{ label: 'Nimonic 75', href: '/products/nimonic-75' },
	{ label: 'Nimonic 81', href: '/products/nimonic-81' },
	{ label: 'Nimonic 86', href: '/products/nimonic-86' },
	{ label: 'Nimonic 80/80A', href: '/products/nimonic-80-80a' },
	{ label: 'Nimonic 90', href: '/products/nimonic-90' },
	{ label: 'Nimonic 105', href: '/products/nimonic-105' },
	{ label: 'Nimonic 115', href: '/products/nimonic-115' },
	{ label: 'Nimonic 263', href: '/products/nimonic-263' },
	{ label: 'Nimonic 901', href: '/products/nimonic-901' },
	{ label: 'Invar', href: '/products/invar' },
	{ label: 'AL6XN', href: '/products/al6xn' },
	{ label: 'Alloy 330', href: '/products/alloy-330' },
	{ label: 'Alloy A286', href: '/products/alloy-a286' },
	{ label: 'EN Standards', href: '/products/en-standards' },
];

const SpecialAlloysLinksBox = () => {
	const location = useLocation();

	return (
		<section className="px-4 sm:px-6 lg:px-8 py-10 bg-slate-50">
			<div className="max-w-7xl mx-auto border border-slate-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm text-center">
				<div className="mb-5">
					<h2 className="text-2xl md:text-3xl font-bold text-slate-900">Special Alloys</h2>
					<p className="text-sm md:text-base text-slate-600 mt-2">
						Browse all Special Alloys grades and related pages from one place.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
					{specialAlloysLinks.map((item) => {
						const isActive = location.pathname === item.href;

						return (
							<Link
								key={item.href}
								to={item.href}
								className={`w-full rounded-lg border px-4 py-3 text-sm font-medium transition-colors text-center flex items-center justify-center ${isActive
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

export default SpecialAlloysLinksBox;
