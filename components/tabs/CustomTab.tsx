"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define your content components
const Cm1 = () => <div>(TAB 1)Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit non dolorem voluptatibus facere, excepturi enim quae rerum tempora quasi similique ea nostrum cupiditate nobis molestiae laudantium quod atque architecto.</div>;
const Cm2 = () => <div>(TAB 2)Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit non dolorem voluptatibus facere, excepturi enim quae rerum tempora quasi similique ea nostrum cupiditate nobis molestiae laudantium quod atque architecto.</div>;
const Cm3 = () => <div>(TAB 3)Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit non dolorem voluptatibus facere, excepturi enim quae rerum tempora quasi similique ea nostrum cupiditate nobis molestiae laudantium quod atque architecto.</div>;
const Cm4 = () => <div>(TAB 4)Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit non dolorem voluptatibus facere, excepturi enim quae rerum tempora quasi similique ea nostrum cupiditate nobis molestiae laudantium quod atque architecto.</div>;
const Cm5 = () => <div>(TAB 5)Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit non dolorem voluptatibus facere, excepturi enim quae rerum tempora quasi similique ea nostrum cupiditate nobis molestiae laudantium quod atque architecto.</div>;

// Define your tabs with content components
const tabs = [
    { id: 'tab1', label: 'Tab 1', content: <Cm1 /> },
    { id: 'tab2', label: 'Tab 2', content: <Cm2 /> },
    { id: 'tab3', label: 'Tab 3', content: <Cm3 /> },
    { id: 'tab4', label: 'Tab 4', content: <Cm4 /> },
    { id: 'tab5', label: 'Tab 5', content: <Cm5 /> },
];

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Find the active tab data
    const activeTabData = React.useMemo(() => {

        return tabs.find((_, index) => index === activeTab)?.content
    }
        , [activeTab]);


    React.useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (['ArrowRight', 'ArrowUp'].includes(event.key)) {
                setActiveTab((activeTab + 1) % tabs.length);
            } else if (['ArrowLeft', 'ArrowDown'].includes(event.key)) {
                setActiveTab((activeTab - 1 + tabs.length) % tabs.length);
            }
        }

        window.focus();
        // Ensure the document has focus
        document.addEventListener('keydown', handler)
        return () => {
            document.removeEventListener('keydown', handler)
        }
    }, [activeTab])
    return (
        <div className="w-full max-w-lg mx-auto mt-10">
            <h1 className='text-2xl md:text-3xl rounded-sm selection:bg-orange-300 m-4 text-center bg-blue-100 text-blue-500 p-2'>Custom Tabs {activeTab+1 + "/" + tabs.length}</h1>
            <div className="flex space-x-4 border-b-1 border-gray-100 ">
                {tabs.map((tab, index) => (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        onTap={() => setActiveTab(index)}

                        whileTap={{ scale: 1.8 }}
                        key={tab.id}
                        className={` py-2 px-4 text-sm font-medium ${activeTab === index
                            ? 'bg-blue-100 text-blue-500 rounded-sm'
                            : 'text-gray-500'
                            }`}
                    >
                        {tab.label}
                    </motion.button>
                ))}
            </div>

            <div className="mt-4">
                <AnimatePresence mode='wait'>
                    {activeTabData && (
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="p-4 bg-blue-100 tracking-wider leading-8 text-gray-500 rounded-lg"
                        >
                            {activeTabData}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TabComponent;
