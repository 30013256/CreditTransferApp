import React from 'react'
import PlanUsageCard from '../layout/PlanUsageCard'

export default function Dashboard() {
    return (
        <>
            <div className={"lg:container space-x-5 lg:mx-auto mt-32 flex flex-wrap gap-10 justify-center"}>
                <div className={"p-4 container-md bg-purple-600 rounded-xl flex flex-col gap-4 "}>
                    <h1 class="text-center text-6xl font-semibold leading-normal mt-0 mb-2 text-white">
                        Mobile Plans
                    </h1>
                    <div className={"p-4 flex flex-col gap-4 bg-indigo-900 rounded-xl"}>
                        <h1 class="text-center text-2xl font-light leading-normal mt-0 mb-2 text-gray-300">
                            Plan One | 021 274 8993 | Expires 20/4/2021
                        </h1>
                        <div className={"flex flex-row gap-32 rounded-xl"}>
                            <PlanUsageCard title={"Data"} color={"bg-green-500"}/>
                            <PlanUsageCard title={"Mins"} color={"bg-red-500"}/>
                            <PlanUsageCard title={"Txts"} color={"bg-yellow-500"}/>
                        </div>                     
                    </div>
                </div>
                <div className={"p-4 container-md rounded-xl bg-purple-600"}>                
                    <div class="rounded-lg overflow-hidden">
                        <div class="px-6 py-8 sm:p-10 sm:pb-6">
                            <div class="flex justify-center">
                                <span class="inline-flex px-4 py-1 text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                                    Team Plan
                                </span>
                            </div>
                            <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold text-white">
                                <span class="ml-1 mr-3 text-xl leading-8 font-medium text-gray-200">
                                    from
                                </span>
                                    $10
                                <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-400">
                                    /month
                                </span>
                            </div>
                        </div>
                        <div class="px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                            <ul>
                                <li class="mt-4 flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base leading-6 text-gray-200">
                                        $10/month per user
                                    </p>
                                </li>
                                <li class="mt-4 flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base leading-6 text-gray-200">
                                        Unlimited number of projects
                                    </p>
                                </li>
                                <li class="mt-4 flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base leading-6 text-gray-200">
                                        Cancel anytime
                                    </p>
                                </li>
                            </ul>
                            <div class="mt-6 rounded-md shadow">
                                <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                    Start team plan
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
