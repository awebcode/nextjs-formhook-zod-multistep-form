import React from 'react'

const useClickOnOutside = (ref: React.RefObject<any>, handler: () => void) => {
    React.useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            event.stopPropagation()
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }
            handler()
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])
}

export default useClickOnOutside