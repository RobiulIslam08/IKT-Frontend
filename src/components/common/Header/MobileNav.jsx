/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Mail, Clock } from "lucide-react";



const MobileNav = ({ menuItems, isOpen, onClose }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleItem = (name) => {
    setExpandedItem(expandedItem === name ? null : name);
    setExpandedCategory(null);
  };

  const toggleCategory = (name) => {
    setExpandedCategory(expandedCategory === name ? null : name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-background border-b border-border overflow-hidden"
        >
          <div className="container mx-auto px-4 py-4">
            {/* Contact Info Mobile */}
            <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-border">
              <motion.a
                href="tel:+966-13-3444036"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center gap-1 p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-xs text-muted-foreground">Call</span>
              </motion.a>
              <motion.a
                href="mailto:sales@ikt.sa"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex flex-col items-center gap-1 p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-xs text-muted-foreground">Email</span>
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-1 p-2 rounded-lg bg-primary/5"
              >
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-xs text-muted-foreground">08-04PM</span>
              </motion.div>
            </div>

            {/* Menu Items */}
            <nav>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleItem(item.name)}
                        className="w-full flex items-center justify-between py-3 px-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                        <motion.span
                          animate={{ rotate: expandedItem === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.name && item.categories && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-muted/30 rounded-lg mb-2"
                          >
                            {item.categories.map((category) => (
                              <div key={category.name}>
                                {category.name === "" ? (
                                  // Empty category name: render items directly without toggle
                                  <div className="py-1">
                                    {category.items.map((subItem) => {
                                      if (typeof subItem === "object" && subItem.subItems) {
                                        return (
                                          <div key={subItem.name}>
                                            <div className="py-2 px-4 text-xs font-medium text-muted-foreground">{subItem.name}</div>
                                            {subItem.subItems.map((si) => (
                                              <a key={si} href="#" className="block py-2 px-6 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">{si}</a>
                                            ))}
                                          </div>
                                        );
                                      }
                                      if (typeof subItem === "object" && subItem.href) {
                                        return (
                                          <a key={subItem.name} href={subItem.href} className="block py-2 px-4 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">{subItem.name}</a>
                                        );
                                      }
                                      return (
                                        <a key={subItem} href="#" className="block py-2 px-4 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">{subItem}</a>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  <>
                                    <button
                                      onClick={() => toggleCategory(category.name)}
                                      className="w-full flex items-center justify-between py-2 px-4 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                                    >
                                      {category.name}
                                      <motion.span
                                        animate={{
                                          rotate: expandedCategory === category.name ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <ChevronDown className="w-3 h-3" />
                                      </motion.span>
                                    </button>

                                    <AnimatePresence>
                                      {expandedCategory === category.name && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.15 }}
                                          className="overflow-hidden"
                                        >
                                          {category.items.map((subItem) => (
                                            <a
                                              key={typeof subItem === "object" ? subItem.name : subItem}
                                              href={typeof subItem === "object" ? (subItem.href || "#") : "#"}
                                              className="block py-2 px-6 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                                            >
                                              {typeof subItem === "object" ? subItem.name : subItem}
                                            </a>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href || "#"}
                      className={`block py-3 px-2 text-sm font-medium transition-colors hover:text-primary ${item.isArabic ? "text-primary" : "text-foreground"
                        }`}
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
