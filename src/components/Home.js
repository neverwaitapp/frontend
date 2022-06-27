import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { io } from "socket.io-client";
import Event from "./Events";

const notify = (msg, { success }) => {
    if (success) {
        return toast.success(msg)
    }
    else {
        return toast.error(msg)
    }
}

// connect to socket server on /api proxy
const socket = io("/api");

export default function Home() {
    const [events, setEvents] = useState([]);

    axios.get("/api/events").then((res) => {
        setEvents(res.data);
    }).catch((err) => {
        console.log(err);
    }
    );

    return (
        <div>
            <div class="p-5 bg-light rounded-3">
                <div class="container-fluid py-5">
                    {/* TODO Add all events fetch with the API */}
                </div>
            </div>
        </div>
    )

}