import React, { useState } from 'react';
import { Service } from '../types';
import CalculatorIcon from '../components/icons/CalculatorIcon';
import ShieldIcon from '../components/icons/ShieldIcon';
import StockIcon from '../components/icons/StockIcon';
import TaxIcon from '../components/icons/TaxIcon';
import Button from '../components/Button';

const servicesData: Service[] = [
  {
    icon: <CalculatorIcon />,
    title: 'Bookkeeping & Financial Reporting',
    description: 'Automated tracking, reconciliation, and monthly closes to free up SME time.',
    details: {
      summary: 'We transform your financial data into a powerful tool for decision-making. Our team handles everything from daily transaction recording to generating comprehensive monthly and annual reports, giving you a clear picture of your business’s financial health.',
      benefits: [
        'Free up valuable time to focus on your core business.',
        'Make informed decisions with real-time financial data.',
        'Ensure accuracy and consistency in your financial records.',
        'Access custom dashboards, P&L statements, and cash flow analysis.',
      ],
      pricing: 'Packages starting at $250/month.'
    }
  },
  {
    icon: <StockIcon />,
    title: 'Stock Management',
    description: 'Inventory optimization, cost tracking, and integration with accounting software.',
    details: {
      summary: 'Effective inventory management is crucial for profitability. We help you implement systems to track stock levels, manage costs, and prevent losses from overstocking or stockouts. Our solutions integrate seamlessly with your accounting software for a unified view.',
      benefits: [
        'Optimize inventory levels to improve cash flow.',
        'Reduce holding costs and minimize stock obsolescence.',
        'Gain clear visibility into product profitability.',
        'Integrate stock data with financial reporting.',
      ],
      pricing: 'Packages starting at $200/month.'
    }
  },
  {
    icon: <ShieldIcon />,
    title: 'Strong Internal Control Systems',
    description: 'Risk assessments, audit-ready processes, and fraud prevention frameworks.',
    details: {
      summary: 'Protect your business from the inside out. We design and implement robust internal control systems that safeguard your assets, ensure the integrity of your financial reporting, and deter fraud. Our frameworks make your business more secure and audit-ready.',
      benefits: [
        'Minimize risk of financial loss and fraud.',
        'Improve operational efficiency and accountability.',
        'Ensure your processes are compliant and audit-ready.',
        'Increase investor and lender confidence.',
      ],
      pricing: 'Custom pricing based on a service audit.'
    }
  },
  {
    icon: <TaxIcon />,
    title: 'VAT & Tax Filing',
    description: 'Accurate submissions, deductions maximization, and compliance with local regulations.',
    details: {
      summary: 'Navigating the complexities of tax and VAT can be daunting. Our experts handle all aspects of tax planning and filing, ensuring you meet all deadlines, maximize your deductions, and remain fully compliant with ever-changing regulations in Nepal/India.',
      benefits: [
        'Avoid penalties with timely and accurate filings.',
        'Maximize legal tax deductions and credits.',
        'Stay compliant with local and national tax laws.',
        'Receive expert advice on tax planning and strategy.',
      ],
      pricing: 'Packages starting at $150/month.'
    }
  }
];

const AccordionItem: React.FC<{ service: Service; isOpen: boolean; onClick: () => void }> = ({ service, isOpen, onClick }) => {
    return (
        <div className="border-b">
            <button onClick={onClick} className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 focus:outline-none">
                <div className="flex items-center">
                    {/* Fix: Replaced React.cloneElement with a direct call to React.createElement on the icon's type. This resolves a TypeScript type inference issue where the props of the cloned element were not correctly identified. */}
                    <div className="text-[#00A651] mr-4">{React.createElement(service.icon.type, { ...service.icon.props, className: 'h-8 w-8' })}</div>
                    <span className="text-xl font-semibold text-[#003366]">{service.title}</span>
                </div>
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-6 bg-white">
                    <p className="text-gray-700 mb-4">{service.details.summary}</p>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                        {service.details.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                    </ul>
                    <p className="font-semibold text-[#003366]">{service.details.pricing}</p>
                </div>
            </div>
        </div>
    );
};


const ServicesPage: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <>
            <div className="bg-[#003366] py-16 text-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">Our Financial Solutions</h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">Tailored services to drive efficiency, ensure compliance, and fuel your growth.</p>
                </div>
            </div>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        {servicesData.map((service, index) => (
                            <AccordionItem
                                key={index}
                                service={service}
                                isOpen={openAccordion === index}
                                onClick={() => toggleAccordion(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-[#003366] mb-6">Ready to Streamline Your Finances?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let's assess your current financial systems. Our service audit will identify areas for improvement and opportunities for growth.
                    </p>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Schedule a Service Audit</h3>
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A651]" />
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A651]" />
                            </div>
                            <textarea placeholder="Tell us about your business needs..." rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A651]"></textarea>
                            <Button onClick={() => { /* form submission logic */ }}>Request Audit</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;