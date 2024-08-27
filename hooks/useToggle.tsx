import React from 'react'

const useToggle = (initialValue = false) => {
    const [isOpen, setisOpen] = React.useState(initialValue)
    return {
        isOpen,
        on: () => setisOpen(true),
        off: () => setisOpen(false),
        toggle: () => setisOpen(!isOpen),
  }
}

export default useToggle