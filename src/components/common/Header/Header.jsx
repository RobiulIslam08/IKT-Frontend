/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, Menu, ChevronDown } from "lucide-react";
import MegaDropdown from "./MegaDropdown";
import RightDrawer from "./RightDrawer";
import { menuItems } from "./menuItems";

const Header = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);

	return (
		<>
			<header className="w-full bg-white shadow-sm relative z-50 ">
				{/* Top Bar */}
				<div className="border-b border-border">
					<div className="px-4 mx-auto ">
						<div className="flex items-center justify-between py-4">
							{/* Logo */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								className="shrink-0"
							>
								<img src="/logo4.png" className="h-8 w-62" alt="" srcset="" />
							</motion.div>

							{/* Contact Info */}
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="hidden lg:flex items-center gap-8"
							>
								{/* Phone */}
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
										<Phone className="w-5 h-5 text-primary" />
									</div>
									<div>
										<p className="text-xs text-primary font-medium">Call</p>
										<p className="text-sm font-semibold text-primary">+966-13-3444036</p>
									</div>
								</div>

								{/* Email */}
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
										<Mail className="w-5 h-5 text-primary" />
									</div>
									<div>
										<p className="text-xs text-primary font-medium">Email</p>
										<p className="text-sm font-semibold text-primary">sales@ikt.sa</p>
									</div>
								</div>

								{/* Time */}
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
										<Clock className="w-5 h-5 text-primary" />
									</div>
									<div>
										<p className="text-xs text-primary font-medium">Time</p>
										<p className="text-sm font-semibold text-primary">08AM - 04PM</p>
									</div>
								</div>
							</motion.div>

							{/* Mobile Menu Button */}
							<motion.button
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								onClick={() => setIsDrawerOpen(true)}
								className="lg:hidden w-10 h-10 flex items-center justify-center text-primary hover:bg-primary/10 rounded-lg transition-colors"
							>
								<Menu className="w-6 h-6" />
							</motion.button>
						</div>
					</div>
				</div>

				{/* Navigation Bar */}
				<nav className="bg-background border-b border-border">
					<div className=" mx-auto  ">
						<div className="flex items-center justify-between">
							<motion.ul
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="hidden lg:flex items-center"
							>
								{menuItems.map((item, index) => (
									<li
										key={item.name}
										className="relative"
										onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
										onMouseLeave={() => setActiveDropdown(null)}
									>
										{item.href ? (
											<motion.div
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.3, delay: 0.1 * index }}
											>
												<Link
													to={item.href}
													className={`flex items-center gap-1 px-4 py-4 text-sm font-medium transition-colors hover:text-primary ${item.isArabic ? "text-primary" : "text-foreground"
														}`}
												>
													{item.name}
													{item.hasDropdown && (
														<motion.span
															animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
															transition={{ duration: 0.2 }}
														>
															<ChevronDown className="w-4 h-4" />
														</motion.span>
													)}
												</Link>
											</motion.div>
										) : (
											<motion.div
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.3, delay: 0.1 * index }}
												className={`flex items-center gap-1 px-4 py-4 text-sm font-medium transition-colors hover:text-primary cursor-pointer ${item.isArabic ? "text-primary" : "text-foreground"
													}`}
											>
												{item.name}
												{item.hasDropdown && (
													<motion.span
														animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
														transition={{ duration: 0.2 }}
													>
														<ChevronDown className="w-4 h-4" />
													</motion.span>
												)}
											</motion.div>
										)}

										{/* Mega Dropdown */}
										{item.hasDropdown && (
											<AnimatePresence>
												{activeDropdown === item.name && (
													<MegaDropdown categories={item.categories} />
												)}
											</AnimatePresence>
										)}
									</li>
								))}
							</motion.ul>

							{/* Hamburger Menu for Desktop */}
							<motion.button
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								onClick={() => setIsDrawerOpen(true)}
								className="hidden lg:flex w-10 h-10 items-center justify-center text-primary hover:bg-primary/10 rounded-lg transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Menu className="w-6 h-6" />
							</motion.button>
						</div>
					</div>
				</nav>
			</header>

			{/* Right Drawer */}
			<RightDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
		</>
	);
};

export default Header;
