import React, { ReactElement } from 'react';
import { Transition } from '@headlessui/react'
import { useState } from 'react'

type Props = {
    children: ReactElement;
    open: boolean
}

export const Animation = (props: Props) => {
    const [isShowing, setIsShowing] = useState(true)

    React.useEffect(() => {
        setIsShowing(props.open)
    }, [props.open])

    return (
        <Transition
            show={isShowing}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            {props.children}
        </Transition>
    )
}