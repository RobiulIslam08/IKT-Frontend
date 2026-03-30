import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const highSpeedSteelLinks = [
	{ label: 'T1', href: '/products/t1' },
	{ label: 'T5', href: '/products/t5' },
	{ label: 'T15', href: '/products/t15' },
	{ label: 'M2', href: '/products/m2' },
	{ label: 'M35', href: '/products/m35' },
	{ label: 'M42', href: '/products/m42' },
];

const HighSpeedSteelLinksBox = () => {
	const location = useLocation();

	return (
		<section className="px-4 sm:px-6 lg:px-8 py-10 bg-slate-50">
			<div className="max-w-7xl mx-auto border border-slate-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm text-center">
				<div className="mb-5">
					<h2 className="text-2xl md:text-3xl font-bold text-slate-900">High Speed Steel</h2>
					<p className="text-sm md:text-base text-slate-600 mt-2">
						Browse all High Speed Steel grades and related pages from one place.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
					{highSpeedSteelLinks.map((item) => {
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

export default HighSpeedSteelLinksBox;
