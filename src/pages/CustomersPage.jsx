import React from 'react';

const CustomersPage = () => {
  const customerImageModules = import.meta.glob('../assets/customer/*.{jpg,jpeg,png,webp,avif}', {
    eager: true,
    import: 'default',
  });

  const customers = Object.entries(customerImageModules)
    .filter(([path]) => !path.toLowerCase().includes('inner-banner'))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, logo]) => {
      const fileName = path.split('/').pop() || '';
      const name = fileName
        .replace(/\.[^.]+$/, '')
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());

      return { name, logo };
    });

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 uppercase tracking-wide">
          Customers
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 items-center justify-items-center">
          {customers.map((customer, index) => (
            <div 
              key={index} 
              className="w-full h-24 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersPage;