

/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, ArrowDown, ArrowUp } from "lucide-react";
import { generateProductUrl } from "./menuItems";

const MegaDropdown = ({ categories }) => {
	const navigate = useNavigate();
	const [activeCategory, setActiveCategory] = useState(categories[0]?.name || "");
	const [activeSubItem, setActiveSubItem] = useState(null);
	const [showScrollDown, setShowScrollDown] = useState(false);
	const [showScrollUp, setShowScrollUp] = useState(false);
	const leftColumnRef = useRef(null);
	const rightColumnRef = useRef(null);

	const activeItems = categories.find((cat) => cat.name === activeCategory)?.items || [];

	// Find sub-items for the currently hovered nested item
	const activeSubItems = activeSubItem
		? activeItems.find((item) => typeof item === "object" && item !== null && item.subItems && item.name === activeSubItem)?.subItems || []
		: [];

	// Check if we should hide the left column (single category with empty name)
	const hideLeftColumn = categories.length === 1 && categories[0].name === "";

	// Check if content overflows
	useEffect(() => {
		const checkOverflow = () => {
			if (leftColumnRef.current) {
				const { scrollHeight, clientHeight, scrollTop } = leftColumnRef.current;
				setShowScrollDown(scrollHeight > clientHeight && scrollTop + clientHeight < scrollHeight - 5);
				setShowScrollUp(scrollTop > 5);
			}
		};

		checkOverflow();
		const leftCol = leftColumnRef.current;
		if (leftCol) {
			leftCol.addEventListener('scroll', checkOverflow);
			return () => leftCol.removeEventListener('scroll', checkOverflow);
		}
	}, [categories, activeCategory]);

	const scrollLeft = (direction) => {
		if (leftColumnRef.current) {
			if (direction === 'down') {
				leftColumnRef.current.scrollTo({ top: leftColumnRef.current.scrollHeight, behavior: 'smooth' });
			} else {
				leftColumnRef.current.scrollTo({ top: 0, behavior: 'smooth' });
			}
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 10, scaleY: 0.95 }}
			animate={{ opacity: 1, y: 0, scaleY: 1 }}
			exit={{ opacity: 0, y: 10, scaleY: 0.95 }}
			transition={{ duration: 0.2, ease: "easeOut" }}
			className="absolute left-0 top-full bg-background shadow-2xl border border-border rounded-b-lg z-50"
			style={{ transformOrigin: "top" }}
		>
			<div className="flex">
				{/* Left Column - Categories */}
				{!hideLeftColumn && (
					<div className="relative w-64 bg-muted/50 border-r border-border">
						<div
							ref={leftColumnRef}
							className="overflow-y-auto max-h-[calc(100vh-150px)] scrollbar-hide mega-scrollbar"
						>
							{categories.map((category, index) => (
								<button
									key={category.name}
									onMouseEnter={() => setActiveCategory(category.name)}
									onClick={() => {
										if (category.items && category.items.length > 0) {
											setActiveCategory(category.name);
										} else if (category.href) {
											navigate(category.href);
										}
									}}
									className={`w-full flex items-center justify-between px-4 py-1.5 text-[12px] font-medium text-foreground transition-all duration-200 ${activeCategory === category.name
										? " text-primary  bg-primary/5 "
										: "hover:bg-muted"
										}`}
								>
									<span className="truncate">{category.name}</span>
									{category.items && category.items.length > 0 && (
										<span>
											{activeCategory === category.name ? (
												<ChevronDown className="w-4 h-4" />
											) : (
												<ChevronRight className="w-4 h-4 opacity-50" />
											)}
										</span>
									)}
								</button>
							))}
						</div>

						{/* Scroll Up Button */}
						{showScrollUp && (
							<motion.button
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => scrollLeft('up')}
								onMouseEnter={() => scrollLeft('up')}
								className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-muted/90 to-transparent flex items-center justify-center hover:from-muted cursor-pointer z-10"
							>
								<ArrowUp className="w-4 h-4 text-primary animate-bounce" />
							</motion.button>
						)}

						{/* Scroll Down Button */}
						{showScrollDown && (
							<motion.button
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => scrollLeft('down')}
								onMouseEnter={() => scrollLeft('down')}
								className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-muted/90 to-transparent flex items-center justify-center hover:from-muted cursor-pointer z-10"
							>
								<ArrowDown className="w-4 h-4  text-primary animate-bounce" />
							</motion.button>
						)}
					</div>
				)}

				{/* Right Column - Items (only render if there are items to show) */}
				{activeItems.length > 0 && (
					<div
						className={`${hideLeftColumn ? 'w-64' : 'w-64'} bg-background relative`}
						onMouseLeave={() => setActiveSubItem(null)}
					>
						{/* Scrollable items list */}
						<div className="p-2 max-h-[calc(100vh-150px)] overflow-y-auto mega-scrollbar">
							<div key={activeCategory}>
								{activeItems.map((item, index) => {
									// Handle both string items (products), object items (services with href), and nested items (with subItems)
									const isObject = typeof item === "object" && item !== null;
									const hasSubItems = isObject && item.subItems && item.subItems.length > 0;
									const itemKey = isObject ? item.name : item;
									const itemHref = isObject ? (item.href || "#") : generateProductUrl(item);
									const itemLabel = isObject ? item.name : item;

									if (hasSubItems) {
										return (
											<div
												key={itemKey}
												onMouseEnter={() => setActiveSubItem(item.name)}
											>
												<div
													className={`flex items-center justify-between px-4 py-2 text-[12px] font-medium rounded-md transition-colors duration-150 cursor-pointer ${activeSubItem === item.name
														? "text-primary bg-primary/5"
														: "text-foreground hover:text-primary hover:bg-primary/5"
														}`}
												>
													<span>{itemLabel}</span>
													<ChevronRight className="w-3.5 h-3.5 opacity-60" />
												</div>
											</div>
										);
									}

									return (
										<Link
											key={itemKey}
											to={itemHref}
											className="block"
										>
											<div
												className="px-4 py-2 text-[12px] font-medium text-foreground hover:text-primary hover:bg-primary/5 hover:translate-x-1 rounded-md transition-all duration-150"
												onMouseEnter={() => setActiveSubItem(null)}
											>
												{itemLabel}
											</div>
										</Link>
									);
								})}
							</div>
						</div>

						{/* 3rd Level Flyout - Rendered outside scrollable area so it won't be clipped */}
						{activeSubItem && (() => {
							const activeItem = activeItems.find(
								(i) => typeof i === "object" && i !== null && i.name === activeSubItem
							);
							if (!activeItem || !activeItem.subItems || activeItem.subItems.length === 0) return null;
							return (
								<div className="absolute left-full top-0 w-56 bg-background shadow-xl border border-border rounded-md p-2 z-50 min-h-full max-h-[calc(100vh-150px)] overflow-y-auto mega-scrollbar">
									{activeItem.subItems.map((subItem) => {
										const subKey = typeof subItem === "string" ? subItem : subItem.name;
										const subHref = typeof subItem === "string" ? generateProductUrl(subItem) : subItem.href;
										const subLabel = typeof subItem === "string" ? subItem : subItem.name;
										return (
											<Link
												key={subKey}
												to={subHref}
												className="block"
											>
												<div className="px-4 py-2 text-[12px] font-medium text-foreground hover:text-primary hover:bg-primary/5 hover:translate-x-1 rounded-md transition-all duration-150">
													{subLabel}
												</div>
											</Link>
										);
									})}
								</div>
							);
						})()}
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default MegaDropdown;
