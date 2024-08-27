"use client"
import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useState, useRef, useEffect, useCallback } from 'react';

// OverlayModal component
const OverlayModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    // Effect to handle clicks outside the modal
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (
                event.target instanceof Node &&
                modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen, onClose]);
    const [animateParent] = useAutoAnimate({duration:300, easing:"linear"});
    const combinedRefs = useCallback((node: HTMLDivElement) => {
        overlayRef.current = node;
        animateParent(node);
    }, [animateParent, overlayRef]);
    return (
        <div ref={combinedRefs}>
       {
        isOpen && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div ref={modalRef} className="bg-white p-4 rounded-md shadow-lg">
                    <button onClick={onClose} className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full">Close</button>
                    <h1 className="text-lg">Hello World</h1>
                </div>
            </div>
                )}
        </div>
    );
};

// Parent Component
const ParentComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(prev => !prev);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <button onClick={toggleModal} className="p-2 bg-blue-500 text-white rounded-md">Toggle Modal</button>
            <OverlayModal isOpen={isOpen} onClose={closeModal} />
        </div>
    );
};

export default ParentComponent;
