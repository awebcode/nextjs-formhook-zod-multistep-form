"use client"
import React from 'react'

const ServiceWorker = () => {
    React.useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then((registration) => console.log('scope is: ', registration.scope));
        }
    }, []);
  return (
    <div>ServiceWorker</div>
  )
}

export default ServiceWorker