import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { menuItems, generateProductUrl } from '../components/common/Header/menuItems';

const extractLinks = (items = []) => {
	const links = [];

	items.forEach((item) => {
		if (typeof item === 'string') {
			links.push({ label: item, href: generateProductUrl(item) });
			return;
		}

		if (item && typeof item === 'object') {
			if (item.name) {
				links.push({
					label: item.name,
					href: item.href || generateProductUrl(item.name),
				});
			}

			if (Array.isArray(item.subItems)) {
				item.subItems.forEach((subItem) => {
					if (typeof subItem === 'string') {
						links.push({ label: subItem, href: generateProductUrl(subItem) });
					}
				});
			}

			if (Array.isArray(item.items)) {
				links.push(...extractLinks(item.items));
			}
		}
	});

	return links;
};

const MenuDataSheet = () => {
	const groupedMenus = useMemo(() => {
		return menuItems.map((menu) => {
			const categories = Array.isArray(menu.categories)
				? menu.categories
					.map((category) => ({
						name: category?.name || 'Items',
						links: extractLinks(category?.items || []),
					}))
					.filter((category) => category.links.length > 0)
				: [];

			const directLinks = menu.href ? [{ label: menu.name, href: menu.href }] : [];

			return {
				name: menu.name,
				categories,
				directLinks,
			};
		});
	}, []);

	return (
		<section className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
			<div className="mx-auto max-w-[1200px] rounded-xl border border-slate-300 bg-white shadow-lg overflow-hidden w-full">
				<div className="border-b border-slate-200 bg-slate-50 p-4 md:p-6 text-center">
					<h1 className="text-2xl md:text-3xl font-bold text-slate-900">Explore Products</h1>
					<p className="text-sm text-slate-600 mt-1">Click any item to open its page.</p>

				</div>

				<div className="p-4 md:p-6 grid gap-5">
					{groupedMenus.map((menu) => (
						<div key={menu.name} className="rounded-lg border border-slate-200 bg-white p-4 text-center">
							<h2 className="text-lg font-semibold text-slate-900 mb-3">{menu.name}</h2>

							{menu.directLinks.length > 0 && (
								<div className="mb-3 flex flex-wrap gap-2 justify-center">
									{menu.directLinks.map((item) => (
										<Link
											key={`${menu.name}-${item.label}`}
											to={item.href}
											className="rounded border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
										>
											{item.label}
										</Link>
									))}
								</div>
							)}

							<div className="grid gap-4 md:grid-cols-1">
								{menu.categories.map((category) => (
									<div key={`${menu.name}-${category.name}`} className="rounded border border-slate-200 p-3 text-center">
										<h3 className="text-sm font-semibold text-slate-800 mb-2">{category.name || 'Items'}</h3>
										<div className="flex flex-wrap gap-2 justify-center">
											{category.links.map((item) => (
												<Link
													key={`${menu.name}-${category.name}-${item.label}`}
													to={item.href}
													className="rounded border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100"
												>
													{item.label}
												</Link>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MenuDataSheet;
