import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-4xl'>
               <span className="font-bold">The Wellness You Want!</span>
            </h2>
            <p className='text-teal-700 dark:text-teal-300 my-2 text-1xl font-serif'>
                The path to feeling good should feel good. Each of our categories helps you discover what living well means for you
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="/sign-up
                " target='_blank' rel='noopener noreferrer' className='text-lg'>
                    Join Us Now
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.outbrain.com/blog/wp-content/uploads/2023/07/Wellness.png" />
        </div>
    </div>
  )
}