"use client"

import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu"

export default function Nav() {
    return (
        <div id="nav">
            <h2 className='text-xl'>Visit Previous Journals</h2>
            <NavigationMenu className="flex justify-center items-center w-full">
                <NavigationMenuList className="mb-20 flex justify-around items-center w-full">
                    <NavigationMenuItem className="m-10">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            ⋖
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="m-10">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Jan 22th
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="m-10">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Jan 23th
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="m-10">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Jan 24th
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="m-10">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Jan 25th
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="m-10">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Jan 26th
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="m-10">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Yesterday
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="m-10">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Today
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
