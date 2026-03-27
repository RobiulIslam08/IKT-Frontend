/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Plus, Minus, ChevronRight } from "lucide-react";
import { menuItems, generateProductUrl } from "./menuItems";

const RightDrawer = ({ isOpen, onClose }) => {
	const navigate = useNavigate();
	const [expandedMenu, setExpandedMenu] = useState(null);
	const [expandedSubMenu, setExpandedSubMenu] = useState(null);
	const [expandedNestedMenu, setExpandedNestedMenu] = useState(null);

	const toggleMenu = (name) => {
		setExpandedMenu(expandedMenu === name ? null : name);
		setExpandedSubMenu(null);
		setExpandedNestedMenu(null);
	};

	const toggleSubMenu = (name) => {
		setExpandedSubMenu(expandedSubMenu === name ? null : name);
		setExpandedNestedMenu(null);
	};

	const toggleNestedMenu = (name) => {
		setExpandedNestedMenu(expandedNestedMenu === name ? null : name);
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Overlay */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
					/>

					{/* Drawer */}
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 30, stiffness: 300 }}
						className="fixed right-0 top-0 h-full w-full max-w-sm bg-primary z-50 overflow-y-auto"
					>
						{/* Close Button */}
						<motion.button
							initial={{ opacity: 0, rotate: -90 }}
							animate={{ opacity: 1, rotate: 0 }}
							transition={{ delay: 0.2 }}
							onClick={onClose}
							className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
							whileHover={{ scale: 1.1, rotate: 90 }}
							whileTap={{ scale: 0.9 }}
						>
							<X className="w-6 h-6" />
						</motion.button>

						<div className="p-6 pt-16">
							{/* Logo */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
								className="mb-6"
							>
								<img src="/logo4.png" className="h-12 w-50" alt="" srcset="" />
							</motion.div>



							{/* Navigation Menu */}
							<motion.nav
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
								className="mb-6 flex flex-col lg:hidden"
							>
								{menuItems.map((item, index) => (
									<motion.div
										key={item.name}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.2 + index * 0.05 }}
									>
										{item.hasDropdown ? (
											<div>
												<button
													onClick={() => toggleMenu(item.name)}
													className="w-full flex items-center justify-between py-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
												>
													<span className="text-sm font-medium tracking-wide">{item.name}</span>
													<motion.span
														animate={{ rotate: expandedMenu === item.name ? 180 : 0 }}
														transition={{ duration: 0.2 }}
													>
														{expandedMenu === item.name ? (
															<Minus className="w-4 h-4" />
														) : (
															<Plus className="w-4 h-4" />
														)}
													</motion.span>
												</button>

												<AnimatePresence>
													{expandedMenu === item.name && item.categories && (
														<motion.div
															initial={{ height: 0, opacity: 0 }}
															animate={{ height: "auto", opacity: 1 }}
															exit={{ height: 0, opacity: 0 }}
															transition={{ duration: 0.25 }}
															className="overflow-hidden"
														>
															<div className="pl-4 border-l-2 border-primary-foreground/20 ml-2">
																{item.categories.map((cat, catIndex) => (
																	<motion.div
																		key={cat.name || `cat-${catIndex}`}
																		initial={{ opacity: 0, x: 10 }}
																		animate={{ opacity: 1, x: 0 }}
																		transition={{ delay: catIndex * 0.03 }}
																	>
																		{cat.name !== "" && (
																			<button
																				onClick={() => {
																					if (cat.items && cat.items.length > 0) {
																						setExpandedSubMenu(expandedSubMenu === cat.name ? null : cat.name);
																					} else if (cat.href) {
																						navigate(cat.href);
																						onClose();
																					}
																				}}
																				className="w-full flex items-center justify-between py-2 text-primary-foreground/70 font-semibold text-sm transition-colors"
																			>
																				<span>{cat.name}</span>
																				{cat.items && cat.items.length > 0 && (
																					<motion.span
																						animate={{ rotate: expandedSubMenu === cat.name ? 90 : 0 }}
																						transition={{ duration: 0.2 }}
																					>
																						<ChevronRight className="w-3 h-3" />
																					</motion.span>
																				)}
																			</button>
																		)}
																		{cat.name === "" ? (
																			// Empty category name: render items directly without toggle
																			<div className="pl-3 py-1">
																				{cat.items && cat.items.map((leaf, leafIndex) => {
																					const isLeafObject = typeof leaf === "object" && leaf !== null;
																					const hasSubItems = isLeafObject && leaf.subItems && leaf.subItems.length > 0;
																					const leafKey = isLeafObject ? leaf.name : leaf;
																					const leafHref = isLeafObject ? (leaf.href || "#") : generateProductUrl(leaf);
																					const leafLabel = isLeafObject ? leaf.name : leaf;

																					if (hasSubItems) {
																						return (
																							<motion.div
																								key={leafKey}
																								initial={{ opacity: 0 }}
																								animate={{ opacity: 1 }}
																								transition={{ delay: leafIndex * 0.02 }}
																							>
																								<button
																									onClick={() => toggleNestedMenu(leafKey)}
																									className="w-full flex items-center justify-between py-1.5 text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
																								>
																									<span>{leafLabel}</span>
																									<motion.span
																										animate={{ rotate: expandedNestedMenu === leafKey ? 90 : 0 }}
																										transition={{ duration: 0.2 }}
																									>
																										<ChevronRight className="w-3 h-3" />
																									</motion.span>
																								</button>
																								<AnimatePresence>
																									{expandedNestedMenu === leafKey && (
																										<motion.div
																											initial={{ height: 0, opacity: 0 }}
																											animate={{ height: "auto", opacity: 1 }}
																											exit={{ height: 0, opacity: 0 }}
																											transition={{ duration: 0.2 }}
																											className="overflow-hidden"
																										>
																											<div className="pl-3 py-1 border-l border-primary-foreground/10 ml-1">
																												{leaf.subItems.map((subLeaf, subLeafIndex) => {
																													const subLeafKey = typeof subLeaf === "string" ? subLeaf : subLeaf.name;
																													const subLeafHref = typeof subLeaf === "string" ? generateProductUrl(subLeaf) : subLeaf.href;
																													const subLeafLabel = typeof subLeaf === "string" ? subLeaf : subLeaf.name;
																													return (
																														<Link
																															key={subLeafKey}
																															to={subLeafHref}
																															onClick={onClose}
																															className="block"
																														>
																															<motion.div
																																initial={{ opacity: 0 }}
																																animate={{ opacity: 1 }}
																																transition={{ delay: subLeafIndex * 0.02 }}
																																className="py-1.5 text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
																															>
																																{subLeafLabel}
																															</motion.div>
																														</Link>
																													);
																												})}
																											</div>
																										</motion.div>
																									)}
																								</AnimatePresence>
																							</motion.div>
																						);
																					}

																					return (
																						<Link
																							key={leafKey}
																							to={leafHref}
																							onClick={onClose}
																							className="block"
																						>
																							<motion.div
																								initial={{ opacity: 0 }}
																								animate={{ opacity: 1 }}
																								transition={{ delay: leafIndex * 0.02 }}
																								className="py-1.5 text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
																							>
																								{leafLabel}
																							</motion.div>
																						</Link>
																					);
																				})}
																			</div>
																		) : (
																			<AnimatePresence>
																				{cat.items && cat.items.length > 0 && expandedSubMenu === cat.name && (
																					<motion.div
																						initial={{ height: 0, opacity: 0 }}
																						animate={{ height: "auto", opacity: 1 }}
																						exit={{ height: 0, opacity: 0 }}
																						transition={{ duration: 0.2 }}
																						className="overflow-hidden"
																					>
																						<div className="pl-3 py-1">
																							{cat.items.map((leaf, leafIndex) => {
																								const isLeafObject = typeof leaf === "object" && leaf !== null;
																								const hasSubItems = isLeafObject && leaf.subItems && leaf.subItems.length > 0;
																								const leafKey = isLeafObject ? leaf.name : leaf;
																								const leafHref = isLeafObject ? (leaf.href || "#") : generateProductUrl(leaf);
																								const leafLabel = isLeafObject ? leaf.name : leaf;
																								if (hasSubItems) {
																									return (
																										<motion.div key={leafKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: leafIndex * 0.02 }}>
																											<button onClick={() => toggleNestedMenu(leafKey)} className="w-full flex items-center justify-between py-1.5 text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
																												<span>{leafLabel}</span>
																												<motion.span animate={{ rotate: expandedNestedMenu === leafKey ? 90 : 0 }} transition={{ duration: 0.2 }}>
																													<ChevronRight className="w-3 h-3" />
																												</motion.span>
																											</button>
																											<AnimatePresence>
																												{expandedNestedMenu === leafKey && (
																													<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
																														<div className="pl-3 py-1 border-l border-primary-foreground/10 ml-1">
																															{leaf.subItems.map((subLeaf, subLeafIndex) => {
																																const subLeafKey = typeof subLeaf === "string" ? subLeaf : subLeaf.name;
																																const subLeafHref = typeof subLeaf === "string" ? generateProductUrl(subLeaf) : subLeaf.href;
																																const subLeafLabel = typeof subLeaf === "string" ? subLeaf : subLeaf.name;
																																return (
																																	<Link key={subLeafKey} to={subLeafHref} onClick={onClose} className="block">
																																		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: subLeafIndex * 0.02 }} className="py-1.5 text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">{subLeafLabel}</motion.div>
																																	</Link>
																																);
																															})}
																														</div>
																													</motion.div>
																												)}
																											</AnimatePresence>
																										</motion.div>
																									);
																								}
																								return (
																									<Link key={leafKey} to={leafHref} onClick={onClose} className="block">
																										<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: leafIndex * 0.02 }} className="py-1.5 text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">{leafLabel}</motion.div>
																									</Link>
																								);
																							})}
																						</div>
																					</motion.div>
																				)}
																			</AnimatePresence>
																		)}
																	</motion.div>
																))}
															</div>
														</motion.div>
													)}
												</AnimatePresence>
											</div>
										) : (
											<Link
												to={item.href}
												onClick={onClose}
												className="block py-3 text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium tracking-wide transition-colors"
											>
												{item.name}
											</Link>
										)}
									</motion.div>
								))}
							</motion.nav>

							{/* Divider */}
							<motion.div
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ delay: 0.4, duration: 0.4 }}
								className="h-px bg-primary-foreground/20 mb-6"
							/>

							{/* About Section */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.45 }}
								className="mb-6"
							>
								<h3 className="text-lg font-bold text-primary-foreground mb-3 font-[Poppins]">
									About <span className="text-primary-foreground/80">ikt</span>
								</h3>
								<p className="text-primary-foreground/75 text-sm leading-relaxed">
									Our focus is on the supply of highly specified, quality steel plate products. We’re proud to hold one of the most diverse stock ranges available anywhere in the world running from carbon manganese through to super duplex stainless steel. Whatever your ex-stock steel plate requirement, the chances are that we can offer a speedy supply ...
								</p>
							</motion.div>

							{/* Divider */}
							<motion.div
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ delay: 0.5, duration: 0.4 }}
								className="h-px bg-primary-foreground/20 mb-6"
							/>

							{/* Contact Info */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.55 }}
							>
								<h3 className="text-lg font-bold text-primary-foreground mb-4 font-[Poppins]">
									Contact Info
								</h3>

								<div className="space-y-3">
									{/* Address */}
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.6 }}
										className="flex items-start gap-3"
										whileHover={{ x: 5 }}
									>
										<div className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
											<MapPin className="w-3.5 h-3.5 text-primary-foreground" />
										</div>
										<p className="text-primary-foreground/75 text-sm">
											ATH Thuqbah District-15th Street-Postal Code 34623,Al-Khobar-7666
										</p>
									</motion.div>

									{/* Phone */}
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.65 }}
										className="flex items-center gap-3"
										whileHover={{ x: 5 }}
									>
										<div className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
											<Phone className="w-3.5 h-3.5 text-primary-foreground" />
										</div>
										<p className="text-primary-foreground/75 text-sm">
											+966-13-3444036
										</p>
									</motion.div>

									{/* Email */}
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.7 }}
										className="flex items-center gap-3"
										whileHover={{ x: 5 }}
									>
										<div className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
											<Mail className="w-3.5 h-3.5 text-primary-foreground" />
										</div>
										<p className="text-primary-foreground/75 text-sm">
											sales@ikt.sa
										</p>
									</motion.div>



								</div>
							</motion.div>

							{/* Divider */}
							<motion.div
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ delay: 0.8, duration: 0.4 }}
								className="h-px bg-primary-foreground/20 my-6"
							/>

							{/* Social Links */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.85 }}
								className="pb-8"
							>
								<h3 className="text-lg font-bold text-primary-foreground mb-4 font-[Poppins]">
									Follow Us
								</h3>
								<div className="flex gap-2">
									{[
										{ icon: Facebook, href: "#" },
										{ icon: Twitter, href: "#" },
										{ icon: Linkedin, href: "#" },
										{ icon: Instagram, href: "#" },
									].map((social, index) => (
										<motion.a
											key={index}
											href={social.href}
											initial={{ opacity: 0, scale: 0 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.9 + index * 0.05, type: "spring" }}
											className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
											whileHover={{ scale: 1.15, rotate: 5 }}
											whileTap={{ scale: 0.95 }}
										>
											<social.icon className="w-4 h-4" />
										</motion.a>
									))}
								</div>
							</motion.div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default RightDrawer;
