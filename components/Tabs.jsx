import React from "react";
import { useState } from "react";
import Link from "next/link";

const Tabs = (props) => {
    return (
        <div class="mx-6 mt-5">
            <div class="tabs is-toggle">
                <ul>
                    <li class="is-active"><Link href="/todos">Todos</Link></li>
                    <li><Link href="/done">Done</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Tabs;