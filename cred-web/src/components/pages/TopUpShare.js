import React, { useState} from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

export default function TopUpShare() {

    let match = useRouteMatch();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [tab, setTab] = useState(1);

    return (
        <>
            <div className={"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 space-x-5 lg:mx-auto mt-32 flex flex-wrap gap-10 justify-center"}>
                <div className="bg-white rounded-xl w-full">
                    <nav className="flex flex-col sm:flex-row">
                        <Link to={`${match.url}/topup`}
                            onClick={() => setTab(1)} 
                            className={
                                classNames(
                                    "text-gray-600 py-4 px-6 block hover:text-purple-500 focus:outline-none", 
                                    tab == 1 ? "text-purple-500 border-b-2 font-medium border-purple-500" : ""
                                )
                            }
                        >
                            Top-Up
                        </Link>
                        <Link 
                            onClick={() => setTab(2)}
                            to={`${match.url}/share`} 
                            className={
                                classNames(
                                    "text-gray-600 py-4 px-6 block hover:text-purple-500 focus:outline-none", 
                                    tab == 2 ? "text-purple-500 border-b-2 font-medium border-purple-500" : ""
                                )
                            }
                        >
                            Share
                        </Link>
                    </nav>
                    <Switch>
                        <Route path={`${match.path}/topup`}>
                            <div className="m-4">
                                <form className="flex flex-col gap-4 w-full">
                                    <label class="inline-flex items-center font-bold">Payment Method</label>
                                    <div>
                                    <label class="inline-flex items-center">
                                        <input type="radio" class="form-radio" name="radio" value="1" checked/>
                                        <span class="ml-2">Visa</span>
                                    </label>
                                    </div>
                                    <div>
                                    <label class="inline-flex items-center">
                                        <input type="radio" class="form-radio" name="radio" value="2"/>
                                        <span class="ml-2">Voucher</span>
                                    </label>
                                    </div>
                                    <div class="mb-3 pt-0">
                                        <input type="number" placeholder="Amount" class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full" />
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Confirm
                                        </button>
                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Clear
                                        </button>
                                    </div>
                                    
                                </form>                
                            </div>
                        </Route>
                        <Route path={`${match.path}/share`}>
                        <div className="m-4">
                                <form className="flex flex-col gap-4 w-full">
                                    <label class="inline-flex items-center font-bold">Recipient</label>
                                    <div class="mb-3 pt-0">
                                        <input type="text" placeholder="Recipient" class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full" />
                                    </div>
                                    <div class="mb-3 pt-0">
                                        <input type="number" placeholder="Amount" class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full" />
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Confirm
                                        </button>
                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Clear
                                        </button>
                                    </div>
                                    
                                </form>                
                            </div>
                        </Route>
                    </Switch>
                </div>   
            </div>
        </>
    )
}
