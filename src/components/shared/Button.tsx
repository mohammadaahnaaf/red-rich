import React from 'react'

type Props = {
    title: string;
    onClick: any
}

export const Button = (props: Props) => {

    function handleClick() {
        props.onClick()
    }
    return (
        <button
            className='p-4 relative flex text-red-600'
        // onClick={handleClick}
        >
            <span className="animate-ping delay-150 transition z-10 h-20 w-20 absolute rounded-full bg-yellow-300 opacity-75"></span>
            <span className="relative rounded-full z-20 h-20 w-20 text-[yellow]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>

            </span>

        </button>
    )
}
export const ButtonStar = (props: Props) => {

    function handleClick() {
        props.onClick()
    }
    return (
        <button
            className='p-4 relative flex text-red-600'
        // onClick={handleClick}
        >
            <span className="animate-ping delay-150 transition z-10 h-20 w-20 absolute rounded-full bg-teal-300 opacity-75"></span>
            <span className="relative rounded-full z-20 h-20 w-20 text-[teal]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
            </span>

        </button>
    )
}
export const ButtonSun = (props: Props) => {

    function handleClick() {
        props.onClick()
    }
    return (
        <button
            className='p-4 relative flex text-red-600'
        // onClick={handleClick}
        >
            <span className="animate-ping delay-150 transition z-10 h-20 w-20 absolute rounded-full bg-red-300 opacity-75"></span>
            <span className="relative rounded-full z-20 h-20 w-20 text-[red]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
            </span>

        </button>
    )
}
export const ButtonCloud = (props: Props) => {

    function handleClick() {
        props.onClick()
    }
    return (
        <button
            className='p-4 relative flex text-red-600'
        // onClick={handleClick}
        >
            <span className="animate-ping delay-150 transition z-10 h-20 w-20 absolute rounded-full bg-blue-300 opacity-75"></span>
            <span className="relative rounded-full z-20 h-20 w-20 text-[blue]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" />
                </svg>

            </span>

        </button>
    )
}